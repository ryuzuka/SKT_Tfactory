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
      BOTTOM_HEIGHT: 64,
      isClassMore: true,
      isSpecialMore: true,
      isConcertMore: true,
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
      mainBannerKor: ['갤럭시 스튜디오', 'Love Galaxy@T팩토리', '갤럭시로 한 곡 뚝딱!'],
      mainBannerUrl: []
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
        result.CLASSES.forEach((program) => {
          program.PROGRAM_CLASS_TAGS = program.PROGRAM_CLASS_TAGS.split(',')

          if (program.TYPE === 'class') {
            this.crewClasses.push(program)
          }
          if (program.TYPE === 'today') {
            this.todayClasses.push(program)
          }
          if (program.TYPE === 'special') {
            this.specialClasses.push(program)
          }

          this.mainBannerKor.forEach((banner, bannerIndex) => {
            if (banner === program.PROGRAM_CLASS_NAME) {
              this.mainBannerUrl[bannerIndex] = program.PROGRAM_CLASS_LINK_URL + '?classId=' + program.PROGRAM_CLASS_ID
            }
          })
        })
      })
    }
  },
  mounted () {
    this.scroll()
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
