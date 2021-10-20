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
          this.$cookies.set('USER_AUTH', result)
          this.$store.getters.CONSTANTS.session_alive = true
          this.$router.push(localStorage.getItem('previous_url'))
        }

        if (result.RET_CODE === 11003) {
          // 휴면
          this.$router.push('/sso/inactive')
        }
      })
    }

    this.toggleMore()
    this.scroll()
    this.initMap()

    STORE.getPopUpContent().then(result => {
      let today = this.$moment().format('YYYYMMDD')

      if (result.POPUP_LIST.length > 0 && localStorage.getItem('popUpDate') !== today.toString()) {
        this.openPopup(result.POPUP_LIST)
      }
    })
  }
}
</script>
