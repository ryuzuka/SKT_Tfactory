<template src="../../assets/html/main/main-tag.html"></template>

<script>
import UiSelect from '../../ui/UiSelect'
import QrcodeVue from 'qrcode.vue'

import ModalChangeName from './ModalChangeName'
import ModalQR from './ModalQR'
import ModalMyTagSurvey from '../mytag/ModalMyTagSurvey'

import * as USER from '../../js/user.js'
import * as STORE from '../../js/store.js'
import * as MYTAG from '../../js/mytag.js'
import * as TID from '../../js/tid.js'
import _ from 'lodash'

export default {
  name: 'MainTag',
  components: {
    UiSelect,
    QrcodeVue
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      BOTTOM_HEIGHT: 64,
      today: '',
      userInfo: {},
      oneTimeCertKey: '',
      tagList: [],
      myTag: [],
      recommendTag: [],
      recommendList: [],
      historyList: {},
      historyLike: {},
      historyDate: [],
      historyDqr: [],
      historyFvd: [],
      todayBooking: [],
      otherDayBooking: [],
      updateMyTag: false,
      nickname: null,
      hasNoti: false,
      mdnUserFlag: false,
      isTabActive: [true, false],
      isActivePoint: [true, false, false],
      isActiveLog: [],
      isLogin: '',
      aniObj: []
    }
  },
  methods: {
    scroll () {
      let viewH = document.documentElement.clientHeight - this.BOTTOM_HEIGHT
      _.forEach(this.$refs, (obj, key) => {
        if (key.indexOf('aniObj') < 0) return

        let clientRect = obj.getBoundingClientRect()
        let index = parseInt(key.replace(/aniObj/g, ''))

        if (viewH > clientRect.top) {
          this.aniObj[index] = true
        } else {
          this.aniObj[index] = false
        }
      })
      this.aniObj[0] = true
      this.aniObj[1] = true
      this.$forceUpdate()
    },
    goLandingURL (path) {
      window.location.href = path
    },
    openMyTag () {
      this.$modal.show(ModalMyTagSurvey, {
        tagList: this.tagList,
        myTag: this.myTag,
        recommendTag: this.recommendTag
      }, {
        type: 'full'
      }, {
        'change-tag': e => {
          this.myTag = e.tag
          this.getMyTags()
          this.getZoneRecommend()
        }
      })
    },
    clickLog (index) {
      this.isActiveLog = this.isActiveLog.map((val, idx) => {
        if (index === idx) {
          val = val ? Boolean(false) : Boolean(true)
        } else {
          val = false
        }
        return val
      })
    },
    changePoint (index) {
      this.isActivePoint = this.isActivePoint.map((val, idx) => {
        if (index === idx) {
          val = true
        } else {
          val = false
        }
        return val
      })
    },
    changeName () {
      this.$modal.show(ModalChangeName, {
        nickname: this.nickname
      }, {}, {
        'change-name': e => {
          this.nickname = e.name
        }
      })
    },
    clickQR () {
      this.$modal.show(ModalQR, {
        oneTimeCertKey: this.oneTimeCertKey
      }, {
        type: 'full'
      }, {
        'change-qr': e => {
          this.setOneTimeCert()
        }
      })
    },
    clickTab (idx) {
      this.isTabActive = this.isTabActive.map((val, index) => {
        return idx === index
      })
    },
    getMyTags () {
      MYTAG.getMyTags().then(result => {
        this.myTag = []
        this.recommendTag = []
        this.tagList = result.MYTAG_LIST
        result.MYTAG_LIST.forEach(tag => {
          if (tag.SELECT_YN) {
            this.myTag.push(tag)
          }
          if (tag.RECOMMEND_YN) {
            this.recommendTag.push(tag)
          }
        })
      })
    },
    getZoneRecommend () {
      this.recommendListByFloor = []
      MYTAG.getZoneRecommend().then(result => {
        this.recommendList = result.RECOMMEND_LIST.sort(this.sortJsonArray)
        this.$loading.stop()
      }).catch((err) => {
        console.log(err)
        this.$loading.stop()
        window.location.href = '/main/store'
      })
    },
    getMyHistory (date) {
      MYTAG.getTimelines().then(result => {
        this.historyList = {}
        this.historyDate = []
        result.TIMELINE_LIST.forEach((history) => {
          history.REG_YMD = this.$moment(history.REG_YMDT).format('YY.MM.DD (ddd)')
          history.TIME = this.$moment(history.REG_YMDT).format('HH:mm')
          if (!this.historyList[history.REG_YMD]) {
            this.historyList[history.REG_YMD] = []
            this.historyDate.push(history.REG_YMD)
          }
          this.historyList[history.REG_YMD].push(history)
          this.historyLike[history.TIMELINE_ID] = Boolean(history.LIKE_YN)
        })

        this.historyDate.forEach((history, index) => {
          this.isActiveLog[index] = false
          if (date) {
            if (history === date) {
              this.isActiveLog[index] = true
            }
          } else {
            this.isActiveLog[0] = true
          }
        })

        this.historyDate.forEach((date, dateIndex) => {
          this.historyDqr[dateIndex] = 0
          this.historyFvd[dateIndex] = 0

          this.historyList[date].forEach(log => {
            if (log.EXP_CODE === 'EXP_TPA_DQR') {
              log.PET_NAME = JSON.parse(log.EXTRA_INFO).PET_NAME
              this.historyDqr[dateIndex] += 1
              if (this.historyDqr[dateIndex] > 1) {
                log.DISABLE = true
              }
            }
            if (log.EXP_CODE === 'EXP_DCK_FVD') {
              log.PET_NAME = JSON.parse(log.EXTRA_INFO).NAME
              this.historyFvd[dateIndex] += 1
              if (this.historyFvd[dateIndex] > 1) {
                log.DISABLE = true
              }
            }
          })
          console.log(this.historyList)
        })
      })
    },
    clickLikeTimeline (timeLineID, likeFlag, date) {
      MYTAG.likeTimeline(timeLineID, !likeFlag, date).then(() => {
        this.getMyHistory(date)
      })
    },
    setNotification () {
      // 사후플랜 -> 마이태그 -> 오늘 예약 -> TID 전환 -> 나중 예약
      let today = this.$moment().format('YYYYMMDD')

      if (this.$cookies.get('MY_INFO').MYTAG_SURVEY_YMD) {
        let myTagDate = this.dateAddDel(this.$cookies.get('MY_INFO').MYTAG_SURVEY_YMD, 6, 'm')
        let y = myTagDate.substr(0, 4)
        let m = myTagDate.substr(4, 2)
        let d = myTagDate.substr(6, 2)
        myTagDate = new Date(y, m - 1, d)
        let future = this.$moment(myTagDate).format('YYYYMMDD')

        if (parseInt(future) - parseInt(today) < 0) {
          this.updateMyTag = true
          this.myTag = []
        }
      }

      STORE.getMyBookingList(0).then(result => {
        result.BOOKING.forEach(booking => {
          if (booking.STATUS === 'ordered' || booking.STATUS === 'operator_assigned') {
            this.hasNoti = true

            booking.DATE_EXCEPT_TIME = this.$moment(booking.DATE).format('YYYYMMDD')
            booking.DATE = this.$moment(booking.DATE).format('YYYY.MM.DD HH:mm')
            if (today === booking.DATE_EXCEPT_TIME) {
              this.todayBooking.push(booking)
            } else {
              this.otherDayBooking.push(booking)
            }
          }
        })
      })

      if (this.$cookies.get('MY_INFO').USER_TYPE === 'mdn') {
        this.hasNoti = true
        this.mdnUserFlag = true
      }
    },
    tidMigration () {
      let callback = window.location.origin + window.location.pathname
      TID.tidLoginRedirect(callback)
    },
    clickBookingDetail (bookID, type) {
      if (type === 'counseling') {
        this.$router.push('/my/booking/counseling/detail/success?BOOK_ID=' + bookID)
      }
      if (type === 'program') {
        this.$router.push('/my/booking/program/detail/success?BOOK_ID=' + bookID)
      }
    },
    sortJsonArray (a, b) {
      if (a.PRIORITY === b.PRIORITY) { return 0 } return a.PRIORITY > b.PRIORITY ? 1 : -1
    },
    dateAddDel (sDate, nNum, type) {
      let d
      let yyyy = parseInt(sDate.substr(0, 4), 10)
      let mm = parseInt(sDate.substr(4, 2), 10)
      let dd = parseInt(sDate.substr(6, 2), 10)
      if (type === 'd') {
        d = new Date(yyyy, mm - 1, dd + nNum)
      } else if (type === 'm') {
        d = new Date(yyyy, mm - 1 + nNum, dd)
      } else if (type === 'y') {
        d = new Date(yyyy + nNum, mm - 1, dd)
      }
      yyyy = d.getFullYear()
      mm = d.getMonth() + 1; mm = (mm < 10) ? '0' + mm : mm
      dd = d.getDate(); dd = (dd < 10) ? '0' + dd : dd
      return '' + yyyy + '' + mm + '' + dd
    },
    setOneTimeCert () {
      USER.requestOneTimeCert().then(oneTimeCertKey => {
        this.oneTimeCertKey = oneTimeCertKey
      })
    }
  },
  watch: {
    scrollTop () {
      this.scroll()
    },
    isLogin: function () {
      if (this.isLogin) {
        this.$loading.start()

        this.today = this.$moment().format('YY.MM.DD (ddd)')
        this.userInfo = this.$cookies.get('MY_INFO')
        this.nickname = this.userInfo.NICKNAME

        USER.requestOneTimeCert().then(oneTimeCertKey => {
          this.oneTimeCertKey = oneTimeCertKey
        })

        this.setOneTimeCert()
        setInterval(this.setOneTimeCert, 60000)

        if (this.$route.query.id_token !== undefined) {
          USER.migrateToTID(this.$route.query.id_token).then(result => {
            this.$cookies.remove('USER_AUTH')
            if (result.RET_CODE === 0) {
              this.$cookies.set('USER_AUTH', result)
              this.$store.getters.CONSTANTS.session_alive = true
            }
          })
        }

        this.getMyHistory()
        this.getMyTags()
        this.getZoneRecommend()
        this.setNotification()
      } else if (!this.isLogin) {
        window.location.href = '/main/store'
      }
    }
  },
  mounted () {
    this.scroll()

    /** isActiveLog test **/
    this.isActiveLog = [true, false]

    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })
  }
}
</script>
