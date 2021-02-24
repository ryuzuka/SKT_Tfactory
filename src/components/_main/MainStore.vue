<template src="../../assets/html/main/main-store.html"></template>

<script>
import * as MLS from '../../js/mls.js'
import * as DEVICE from '../../js/kiosk.js'
import * as USER from '../../js/user.js'

export default {
  name: 'MainStore',
  data () {
    return {
      isLogin: '',
      deviceInfo: {},
      AIPickFlag: true,
      deviceImg: '',
      saleRank: [],
      myInfo: {},
      storeSwiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      bestSwiperOption: {
        slidesPerView: 2.34,
        spaceBetween: 10
      },
      isScroll: false,
      defaultDevice: '000004553'
    }
  },
  methods: {
    getAiPickDevice () {
      USER.getAiPick('tshop_device').then(result => {
        DEVICE.getDeviceInfo(result.tshop_device[0].id).then(deviceInfo => {
          if (deviceInfo.displayYn === 'N') {
            DEVICE.getDeviceInfo(this.defaultDevice).then(deviceInfo => {
              this.deviceInfo = deviceInfo
              this.deviceImg = deviceInfo.detail[0].deviceImgs[0]
            })
          } else {
            this.deviceInfo = deviceInfo
            this.deviceImg = deviceInfo.detail[0].deviceImgs[0]
          }
        }).catch(() => {
          DEVICE.getDeviceInfo(this.defaultDevice).then(deviceInfo => {
            this.deviceInfo = deviceInfo
            this.deviceImg = deviceInfo.detail[0].deviceImgs[0]
          })
        })
      }).catch(() => {
        DEVICE.getDeviceInfo(this.defaultDevice).then(deviceInfo => {
          this.deviceInfo = deviceInfo
          this.deviceImg = deviceInfo.detail[0].deviceImgs[0]
        })
      })
    },
    setSaleRank (saleRank) {
      saleRank.forEach(product => {
        DEVICE.getDeviceInfo(product.product_grp_id).then(deviceInfo => {
          if (deviceInfo.detail[0].deviceImgs.length > 0) {
            product.deviceImg = deviceInfo.detail[0].deviceImgs[0]
          } else {
            product.deviceImg = deviceInfo.detail[0].twdImgArr[0]
          }
          product.modelName = deviceInfo.modelName
          this.saleRank.push(product)
          this.saleRank = this.saleRank.sort(this.sortJsonArray)
        })
      })
    },
    sortJsonArray (a, b) {
      if (a.sales_rank === b.sales_rank) { return 0 } return a.sales_rank > b.sales_rank ? 1 : -1
    },
    clickDeviceDetail (deviceGrpId) {
      this.$router.push({'name': 'Product', 'params': { productId: deviceGrpId }})
    },
    clickFlagshipBook () {
      if (!this.isLogin) {
        localStorage.setItem('previous_url', '/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
        this.$router.push({'name': 'Login'})
      } else {
        this.$router.push('/sev/booking/counseling/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID)
      }
    },
    clickFlagshipDetail () {
      this.$router.push('/shop/detail?store_id=' + process.env.FLAGSHIP_STORE_ID)
    },
    clickLogin () {
      localStorage.setItem('previous_url', this.$router.currentRoute.path)
      this.$router.push({'name': 'Login'})
    },
    loginFailedModal (RET_CODE) {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-cancel-booking-failed') + ' ' + RET_CODE,
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'Main'})
          }
        }]
      })
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })

    MLS.getOrgProductSale(process.env.FLAGSHIP_ORG_ID).then(saleRank => {
      this.setSaleRank(saleRank)
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

    // if (this.$route.query.sso_login_id !== undefined) {
    //   let callback = window.location.origin + window.location.pathname
    //   TID.loginRedirectSso(this.$route.query.sso_login_id, callback)
    // }
  },
  watch: {
    isLogin: function () {
      if (this.isLogin) {
        this.myInfo = this.$cookies.get('MY_INFO')
        if (this.myInfo.LINE_LIST.length === 0) {
          DEVICE.getDeviceInfo(this.defaultDevice).then(deviceInfo => {
            this.deviceInfo = deviceInfo
            this.deviceImg = deviceInfo.detail[0].deviceImgs[0]
          })
        } else {
          this.getAiPickDevice()
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/main';
</style>
