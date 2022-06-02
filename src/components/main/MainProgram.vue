<template src="../../assets/html/main/main-program.html"></template>

<script>
import _ from 'lodash'
import ModalMain from '../main/ModalMain'

import * as STORE from '../../js/store.js'

export default {
  name: 'MainProgram',
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
      isLogin: false,
      BOTTOM_HEIGHT: 64,
      isClassMore: true,
      isSpecialMore: true,
      isConcertMore: true,
      isAsyncComplete: [false, false],
      scrollQuery: this.$route.query.scroll,
      programSwiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      aniObj: [],
      listAniObj: [],
      crewClasses: [],
      todayClasses: [],
      specialClasses: [],
      mainBannerKor: ['Welcome to ⓥStudio!', '갤럭시로 한 곡 뚝딱'],
      mainBannerUrl: [],
      mainBannerList: []
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
    scroll () {
      let viewH = document.documentElement.clientHeight - this.BOTTOM_HEIGHT
      _.forEach(this.$refs, (obj, key) => {
        let clientRect = obj.getBoundingClientRect()
        if (key.indexOf('aniObj') > -1) {
          let index = parseInt(key.replace(/aniObj/g, ''))
          if (viewH > clientRect.top + clientRect.height) {
            this.aniObj[index] = true
          } else {
            this.aniObj[index] = false
          }
        } else if (key.indexOf('listAniObj') > -1) {
          let index = parseInt(key.replace(/listAniObj/g, ''))
          if (viewH > clientRect.top) {
            this.listAniObj[index] = true
          } else {
            this.listAniObj[index] = false
          }
        }
      })
      this.aniObj[0] = true
      this.$forceUpdate()
    },
    clickMore (type) {
      if (type === 'concert') {
        this.isConcertMore = false
      } else if (type === 'special') {
        this.isSpecialMore = false
      } else if (type === 'class') {
        this.isClassMore = false
      }
      this.$forceUpdate()
    },
    getProgramList () {
      STORE.getProgramClassList().then(result => {
        result['CLASSES'].forEach(program => {
          if (program['DISPLAY_IN_CLASS']) {
            if (program.NAME.indexOf('ㅤ') > -1) {
              program.NAME = program.NAME.replace(/ㅤ/g, '<br>')
            }
            this.crewClasses.push(program)
          }
          if (program['DISPLAY_IN_SPECIAL']) {
            this.specialClasses.push(program)
          }
          if (program['DISPLAY_IN_TODAY']) {
            this.todayClasses.push(program)
          }

          this.mainBannerKor.forEach((banner, bannerIndex) => {
            if (banner === program.NAME) {
              this.mainBannerUrl[bannerIndex] = program['LINK_URL'] + '?classId=' + program['PROGRAM_CLASS_ID']
            }
          })
        })
        this.crewClasses.sort(function (a, b) {
          return b['ORDER_IN_CLASS'] - a['ORDER_IN_CLASS']
        })
        this.specialClasses.sort(function (a, b) {
          return b['ORDER_IN_SPECIAL'] - a['ORDER_IN_SPECIAL']
        })
        this.todayClasses.sort(function (a, b) {
          return b['ORDER_IN_TODAY'] - a['ORDER_IN_TODAY']
        })

        this.isAsyncComplete[0] = true
        this.$nextTick(() => {
          this.scrollToFactory()
        })
      })
    },
    getProgramBanner () {
      STORE.getProgramBanner().then(result => {
        this.mainBannerList = result['CLASSES']
        this.isAsyncComplete[1] = true
        this.$nextTick(() => {
          this.scrollToFactory()
        })
      })
    },
    scrollToFactory () {
      if (!this.isAsyncComplete[0] || !this.isAsyncComplete[1]) return

      if (this.scrollQuery === 'special' || this.scrollQuery === 'today' || this.scrollQuery === 'class') {
        let scrollPosition = document.querySelector('#factory-' + this.scrollQuery).offsetTop + 60
        window.scrollTo({top: scrollPosition, behavior: 'smooth'})
      }
    },
	  clickFlagshipBook () {
		  if (!this.isLogin) {
			  localStorage.setItem('previous_url', '/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
			  this.$router.push({'name': 'Login'})
		  } else {
			  this.$router.push('/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
		  }
	  }
  },
  mounted () {
	  this.$store.watch(() => {
		  if (this.$store.getters.CONSTANTS.session_alive === true) {
			  this.isLogin = true
		  }
	  })

    this.scroll()
    this.getProgramBanner()
    this.getProgramList()

    STORE.getPopUpContent().then(result => {
      let today = this.$moment().format('YYYYMMDD')

      if (result.POPUP_LIST.length > 0 && localStorage.getItem('popUpDate') !== today.toString()) {
        this.openPopup(result.POPUP_LIST)
      }
    })
  }
}
</script>
