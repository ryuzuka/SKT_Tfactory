<template src="../../assets/html/main/main-store.html"></template>

<script>
/* eslint no-undef: "off" */
/* eslint no-new: "off" */

import _ from 'lodash'
import ModalMain from '../main/ModalMain'

import * as USER from '../../js/user.js'
import * as STORE from '../../js/store.js'

export default {
  name: 'MainStore',
  components: {
    ModalMain
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
      TAB_LIST_VIEW_LENGTH: 3,
      tabIndex: 0,
      tabsList: [[], [], []],
      tabsMore: [true, true, true],
      tabsMoreIndex: [0, 0, 0],
      tabs: [true, false, false],
      storeSwiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      aniObj: [],
      tabAniObj: [],
      location: {
        lat: 37.55547231,
        long: 126.92233948
      }
    }
  },
  watch: {
    scrollTop () {
      this.scroll()
    }
  },
  methods: {
    openPopup (POPUP_LIST) {
      this.$modal.show(ModalMain, {
        POPUP_LIST: POPUP_LIST
      }, {
        class: 'pop-main'
      }, {
        'before-open': () => {},
        'opened': () => {},
        'before-close': () => {},
        'closed': () => {},
        'event-notForToday': (e) => {
          if (e.notForToday) {
            localStorage.setItem('popUpDate', this.$moment().format('YYYYMMDD'))
          }
        }
      })
    },
    goStoreDetailPage () {
      this.$router.push('/shop/detail?store_id=' + process.env.FLAGSHIP_STORE_ID)
    },
    clickFlagshipBook () {
      if (!this.isLogin) {
        localStorage.setItem('previous_url', '/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
        this.$router.push({'name': 'Login'})
      } else {
        this.$router.push('/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
      }
    },
    openTmap () {
      window.location.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xxea7bfbc8f2074f16b2d26a9a335aa930&name=T Factory&lat=' + this.location.lat + '&lon=' + this.location.long
    },
    initMap () {
      this.map = new Tmapv2.Map('map_div',
        {
          center: new Tmapv2.LatLng(this.location.lat, this.location.long),
          height: '280px'
        })

      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(this.location.lat, this.location.long),
        map: this.map
      })
    },
    scroll () {
      let viewH = document.documentElement.clientHeight - this.BOTTOM_HEIGHT

      this.tabAniObj = [false, false, false, false]
      _.forEach(this.$refs, (obj, key) => {
        let clientRect = obj.getBoundingClientRect()
        if (key.indexOf('aniObj') > -1) {
          let index = parseInt(key.replace(/aniObj/g, ''))
          if (viewH > clientRect.top + clientRect.height) {
            this.aniObj[index] = true
          } else {
            this.aniObj[index] = false
          }
        } else if (key.indexOf('tabAniObj' + this.tabIndex) > -1) {
          if (viewH > clientRect.top) {
            this.tabAniObj[this.tabIndex] = true
          } else {
            this.tabAniObj[this.tabIndex] = false
          }
        }
      })
      this.aniObj[0] = true
      this.$forceUpdate()
    },
    clickTabs (index) {
      if (index === this.tabIndex) return

      this.tabIndex = index
      this.tabsMoreIndex[index] = 0
      this.tabs = this.tabs.map((val, idx) => {
        if (idx === index) {
          val = true
        } else {
          val = false
        }
        return val
      })
      this.$nextTick(() => {
        this.scroll()
      })
    },
    clickMore (index) {
      this.tabsMoreIndex[index] += 1
      this.addList(index)
    },
    addList (index) {
      for (let i = 0; i < 3; ++i) {
        if (!this.tabsList[index][this.tabsMoreIndex[index] * 3 + i]) return
        this.tabsList[index][this.tabsMoreIndex[index] * 3 + i].isShow = true
        if (this.tabsList[index].length < this.tabsMoreIndex[index] * 3 + i + 3) {
          this.tabsMore[index] = false
        }
      }
    },
    toggleMore () {
      _.forEach(this.tabsMore, (val, idx) => {
        if (this.tabsList[idx].length > 1) {
          val = true
        } else {
          val = false
        }
        this.tabsMore[idx] = val
      })
    }
  },
  created () {
    this.tabsList = [
      [{isShow: true}, {isShow: true}, {isShow: true}, {isShow: false}, {isShow: false}, {isShow: false}, {isShow: false}, {isShow: false}],
      [{isShow: true}],
      [{isShow: true}, {isShow: true}, {isShow: true}, {isShow: false}, {isShow: false}, {isShow: false}, {isShow: false}, {isShow: false}, {isShow: false}]
    ]
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })

    if (Object.keys(this.$route.query).length !== 0) {
      this.$loading.stop()
      localStorage.setItem('t_token', this.$route.query.id_token)
      USER.signInTID(this.$route.query.id_token).then(result => {
        this.$loading.stop()

        if (result.RET_CODE === 0) {
          // 이미 T Factory 회원 (O)
          this.$cookies.set('USER_AUTH', result)
          this.$store.getters.CONSTANTS.session_alive = true
          this.$router.push(localStorage.getItem('previous_url'))
        } else if (result.RET_CODE === 1) {
          // T Factory 최초 - 자사
          this.$router.push('/join?line_list=' + JSON.stringify(result.LINE_LIST))
        } else if (result.RET_CODE === 2) {
          // T Factory 최초 - 타사
          this.$router.push('/join/number')
        }
      }).catch((err) => {
        this.$loading.stop()
        this.loginFailedModal(err.response.data.RET_CODE)
      })
    }

    this.toggleMore()
    this.scroll()
    this.initMap()

    STORE.getPopUpContent().then(result => {
      let today = this.$moment().format('YYYYMMDD')

      result = {'RET_CODE': 0, 'POPUP_LIST': [{'POPUP_ID': 4, 'TYPE': 'text', 'TITLE': '■ 4월의 덕콘 | 페퍼톤스 신청 결과 안내', 'BODY': '<b>4월의 덕콘 l 페퍼톤스</b>에 많은 관심을 가져주시고<br>\n응모해주신 모든 분들께 감사드립니다.<br>\n아래 당첨자 명단 및 유의사항 확인 부탁드립니다.\n<Br><br>\n○ 덕콘은 당첨되신 분들에 한해 참석 가능합니다.<br>\n <font size=-2>　  (당일 현장 관객 모집과 스탠딩은 운영되지 않습니다.)</font><br>\n○ 아래 당첨되신 분들께 참석여부 확인을 위해<br>\n　개별 연락을 드립니다. MMS를 확인해주세요.<br>\n○ 덕콘은 1인 1매, 본인에 한해 참석 가능하며, <br>\n　타인 양도는 불가합니다. <font size=-2>(당첨MMS 및 신분증 확인)</font><br>\n○ 덕콘 당일 <b>인스타그램 라이브</b>가 운영되오니 <br>\n　많은 시청 부탁드립니다. <br>\n  <font size=-1><u><b>라이브계정: www.instagram.com/tfactory_sampler</u></b>\n<br><br>\n<b>당첨자 명단</b> <br>\n이*진 4483　문*현 6540　박*진 0245　최*영 0773 <br>\n백*연 0829　김*지 1791　이*은 2353　반*연 8607 <br>\n윤*선 5811　김*곤 1331　김*현 0681　문*희 2494<br>\n김*정 7323　이*빈 3998　오*지 8531　김*영 0240<br>\n정*수 3112　손*아 1137　성*서 2681　심*정 1477<br>\n이*인 4034　신*원 1604　민*정 9959　전*영 0363<br>\n고*영 4617　서*지 7220　문*혜 2458　서*주 1362<br>\n박*모 8087　고*선 6752　김*희 5867　윤*경 5992<br> \n임*혜 1011　배*경 5001　이*연 0406　손*나 7005<br>\n이*나 2417　박*현 1139　김*람 2923　이*원 3019 <br>\n<br></font>\n감사합니다.', 'LANDING_TYPE': 'none', 'LANDING_URL': ''}]}
      if (result.POPUP_LIST.length > 0 && localStorage.getItem('popUpDate') !== today.toString()) {
        this.openPopup(result.POPUP_LIST)
      }
    })
  }
}
</script>
