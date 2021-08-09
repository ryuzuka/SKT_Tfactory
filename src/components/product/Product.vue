<template src="../../assets/html/product/details.html"></template>

<script>
import * as DEVICE from '../../js/kiosk.js'
import * as MLS from '../../js/mls.js'
import * as NATIVE from '../../js/native.js'
import * as STORE from '../../js/store.js'
import * as FAVORITE from '../../js/favorite.js'
import * as MYTAG from '../../js/mytag.js'
import * as COMMON from '../../js/common.js'

import UiChart from '../../ui/UiChart'

export default {
  name: 'Product',
  components: {
    UiChart
  },
  data () {
    return {
      LATITUDE: 37.55547231,
      LONGITUDE: 126.92233948,
      HEADER_HEIGHT: 48,
      DEVIDER_HEIGHT: 12,
      user_type: '',
      mdn: '',
      deviceInfo: {},
      colorInfo: {},
      detailInfo: {},
      specialInfo: [],
      hasAgeProductSale: false,
      specialNms: ['Face ID', '지문인식', '방수', 'S pen', '삼성 Pay'],
      selectedColor: 0,
      selectedMemory: 0,
      locationAgree: false,
      segmentName: '',
      chartFlag: '',
      lat: 0,
      long: 0,
      bestColorSize: {
        color: {
          color_nm: '',
          count: '',
          share: ''
        },
        size: {
          eqp_mdl_size: '',
          count: '',
          share: ''
        }
      },
      isLogin: '',
      lineID: null,
      isScrollActive: false,
      isActiveTab: [true, false, false],
      isScrolled: false,
      isSticky: false,
      isSpecMore: false,
      popularBytes: [],
      popularColors: [],
      isActiveGalleryThumb: [],
      productSwiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      gallerySwiperOption: {
        pagination: {
          type: 'progressbar',
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: () => {
            let realIndex = this.$refs.gallerySwiper.swiper.realIndex
            this.$refs.galleryThumbSwiper.swiper.slideTo(realIndex)
            this.activeGalleryThumbSwiper(realIndex)
          }
        }
      },
      galleryThumbSwiperOption: {
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        on: {
          slideChange: () => {
            let realIndex = this.$refs.galleryThumbSwiper.swiper.realIndex
            this.$refs.gallerySwiper.swiper.slideTo(realIndex)
          }
        }
      }
    }
  },
  computed: {
    pieChartData () {
      return this.popularBytes.map(data => data.ratio)
    }
  },
  methods: {
    clickCounselingBtn () {
      if (this.isLogin) {
        this.onSiteBooking()

        // if (!this.locationAgree || this.distance > 100) {
        //   this.$router.push('/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
        // } else {
        //   this.onSiteBooking()
        // }
      } else {
        localStorage.setItem('previous_url', this.$route.fullPath)
        this.$router.push({'name': 'Login'})
      }
    },
    onSiteBooking () {
      this.$store.getters.CONSTANTS.ON_SITE_COUNSELING_DETAIL = {
        'sale_cnsl_add_info': {
          'eqp_img_url': '/SWING/SMP/images/thum/phone.png',
          'eappl_op_typ_disp_lst': [
            'BOD0000001'
          ],
          'eqp_mdl_cd': this.detailInfo.productId,
          'eqp_mdl_nm': this.detailInfo.modelNo,
          'eqp_pet_nm': this.detailInfo.modelNo
        },
        'eappl_op_typ_cd': 'OP02C10001',
        'eappl_op_smry_ctt': [
          {
            'smry_nm': '단말',
            'smry_ctt': this.deviceInfo['modelName'] + '/' + this.colorInfo.colorName + '/' + this.detailInfo.memory
          }
        ]
      }
      if (!this.isLogin) {
        localStorage.setItem('previous_url', this.$router.currentRoute.path)
        this.$router.push({name: 'Login'})
      }

      this.$cookies.get('MY_INFO').LINE_LIST.forEach(line => {
        if (line.REPRESENT_YN) {
          this.lineID = line.LINE_ID
        }
      })

      if (!this.lineID) {
        this.$router.push({path: '/sev/consult'})
      }

      this.$modal.show('dialog', {
        title: this.$t('prd.alert-contact-number-guide') + this.mdn,
        buttons: [{
          title: this.$t('prd.change-contact-number'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({path: '/sev/consult'})
          }
        }, {
          title: this.$t('prd.apply-counseling'),
          handler: () => {
            let bookInfo = {
              POC_DEVICE_ID: process.env.POC_DEVICE_ID,
              PAGE_NAME: '모바일 현장호출',
              MDN: '010' + this.contactNumber,
              ADDITIONAL_INFO: this.$store.getters.CONSTANTS.ON_SITE_COUNSELING_DETAIL
            }

            STORE.bookOnSiteCounseling(bookInfo).then(result => {
              if (result.RET_CODE === 0) {
                this.$modal.hide('dialog')
                this.$router.push('/sev/consult/complete?BOOK_ID=' + result.BOOK_ID)
              }
            })
          }
        }]
      })
    },
    clickTab (index) {
      this.activeTab(index)
      let top = Math.ceil(this.$refs.info.getBoundingClientRect().height + this.$refs.productSwiper.$el.getBoundingClientRect().height) + this.DEVIDER_HEIGHT - this.HEADER_HEIGHT
      window.scrollTo({behavior: 'smooth', top: top})
    },
    activeTab (index) {
      this.isActiveTab = this.isActiveTab.map(() => false)
      this.isActiveTab[index] = true
    },
    clickGalleryThumbSwiper (index) {
      this.$refs.gallerySwiper.swiper.slideTo(index)
      this.activeGalleryThumbSwiper(index)
    },
    activeGalleryThumbSwiper (index) {
      this.isActiveGalleryThumb = this.isActiveGalleryThumb.map(() => false)
      this.isActiveGalleryThumb[index] = true
    },
    getDeviceInfo (deviceGroupId) {
      if (deviceGroupId) {
        DEVICE.getDeviceInfo(deviceGroupId).then(result => {
          this.deviceInfo = result
          // this.deviceInfo.gallaryImgs = this.deviceInfo.gallaryImgs.slice(0, 3)
          this.$emit('product-name', {'productName': this.deviceInfo['modelName']})

          this.setColorInfo(0)
          this.setProductId(this.$route.query.productId, this.deviceInfo.detail)
          this.setSpecialFunction(this.deviceInfo.specialNms)
          this.clickGalleryThumbSwiper(0)

          if (this.isLogin) {
            let extraInfo = {
              PET_NAME: this.deviceInfo['modelName'],
              PRODUCT_ID: this.$route.params.productId
            }

            MYTAG.addTimeline('EXP_TPA_DQR', extraInfo, this.colorInfo.slideImg[0]).then(result => {
              console.log(result)
            })
          }
        })
      }
    },
    setColorInfo (index) {
      this.selectedColor = index
      this.colorInfo = this.deviceInfo.detail[this.selectedColor]

      let temp = this.deviceInfo.detail[this.selectedColor].deviceImgs.slice(0, 1)
      this.deviceInfo.detail[this.selectedColor].slideImg =
        temp.concat(this.deviceInfo.detail[this.selectedColor].twdImgArr)

      if (this.colorInfo.item[this.selectedMemory] === undefined) {
        this.detailInfo = this.colorInfo.item[0]
        this.selectedMemory = 0
      } else {
        this.detailInfo = this.colorInfo.item[this.selectedMemory]
      }
    },
    setMemoryinfo (index) {
      this.selectedMemory = index
      this.detailInfo = this.colorInfo.item[this.selectedMemory]
    },
    setSpecialFunction (specialNms) {
      let infos = []
      for (let i = 0; i < specialNms.length; i++) {
        let isDisable = false
        let imageIndex = 0
        if (specialNms[i] === 'true') {
          isDisable = false
          imageIndex = i + 8
        } else if (specialNms[i] === 'false') {
          isDisable = true
          imageIndex = i
        }
        let temp = {
          'name': this.deviceInfo.specialFuncs[i],
          'isDisable': isDisable,
          'imageIndex': imageIndex
        }
        infos[i] = temp
      }
      this.specialInfo = infos
    },
    redirectTWD () {
      let mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidApp2webSSOAutoLogin(this.deviceInfo.twdPageLink, mobileOS)
      } else {
        window.open(this.deviceInfo.twdPageLink)
      }
    },
    drawStatistics (result) {
      this.bestColorSize.color = result.dist_color_nm[0]
      this.popularColors = result.dist_color_nm

      if (result.dist_eqp_mdl_size.length === 0) {
        this.bestColorSize.size.eqp_mdl_size = this.colorInfo.item[0].memory
        this.bestColorSize.size.share = 1.0
        this.popularBytes = [this.bestColorSize.size]
      } else {
        this.bestColorSize.size = result.dist_eqp_mdl_size[0]
        this.popularBytes = result.dist_eqp_mdl_size
      }
    },
    setProductId (productId, data) {
      data.forEach((colorData, colorIndex) => {
        colorData.item.forEach((memoryData, memoryIndex) => {
          if (memoryData.productId === productId) {
            this.setColorInfo(colorIndex)
            this.setMemoryinfo(memoryIndex)
          }
        })
      })
    },
    scrollEventHandler () {
      let scrollY = window.scrollY
      let $info = this.$refs.info
      let $productSwiper = this.$refs.productSwiper.$el

      if (scrollY < 1) {
        this.isScrollActive = false
      } else {
        this.isScrollActive = true
      }
      if ($productSwiper.getBoundingClientRect().height < scrollY) {
        if (!this.isScrolled) {
          this.isScrolled = true
          this.$emit('header-scrolled', {'isScrolled': this.isScrolled})
        }
      } else {
        if (this.isScrolled) {
          this.isScrolled = false
          this.$emit('header-scrolled', {'isScrolled': this.isScrolled})
        }
      }

      if (Math.ceil($info.getBoundingClientRect().height + $productSwiper.getBoundingClientRect().height + this.DEVIDER_HEIGHT - this.HEADER_HEIGHT) < scrollY) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollEventHandler)
  },
  mounted () {
    window.addEventListener('scroll', this.scrollEventHandler)
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive) {
        this.isLogin = true
      } else if (!this.$store.getters.CONSTANTS.session_alive) {
        this.isLogin = false
      }
    })

    this.$getLocation().then(coordinates => {
      this.locationAgree = true
      this.lat = coordinates.lat
      this.long = coordinates.lng
      this.distance = COMMON.getdistanceFromLatLongInKm(this.lat, this.long, this.LATITUDE, this.LONGITUDE)
    }).catch(() => {
      this.locationAgree = false
    })
  },
  created () {
    this.getDeviceInfo(this.$route.params.productId)
    MLS.getStatistics(this.$route.params.productId).then(result => {
      if (result.dist_color_nm.length !== 0 && result.dist_eqp_mdl_size !== 0) {
        this.chartFlag = true
        this.drawStatistics(result)
      } else {
        this.chartFlag = false
        this.isActiveTab = [false, false, true]
      }
    }).catch(() => {
      this.chartFlag = false
      this.isActiveTab = [false, false, true]
    })
  },
  watch: {
    isLogin: function () {
      if (this.isLogin) {
        FAVORITE.addFavorite(this.$route.params.productId)
        let myInfo = this.$cookies.get('MY_INFO')
        this.mdn = myInfo.MDN
        if (myInfo.USER_TYPE === 'tid_cert') {
          let age = new Date().getFullYear() - myInfo.BIRTH_YEAR + 1
          this.user_type = 'TID_CERT'

          let segment = COMMON.getSegment(myInfo.GENDER, parseInt(age))
          this.segmentName = segment.SEGMENT_NAME

          MLS.getStatisticsWithSegment(this.$route.params.productId, segment.SEGMENT).then(result => {
            if (result.dist_color_nm.length !== 0 && result.dist_eqp_mdl_size !== 0) {
              this.drawStatistics(result)
              this.hasAgeProductSale = true
            }
          })
        }
      }
    }
  },
  filters: {
    currency: value => {
      if (!value) return ''
      let num = Number(value)
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    },
    makeHashTag: value => {
      let deviceTag = ''
      for (let tag in value) {
        deviceTag += ('#' + value[tag] + ' ')
      }
      return deviceTag
    },
    parsePercent: value => {
      if (value === 1.0) {
        return 100
      }
      return parseFloat(value * 100).toFixed(1)
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
