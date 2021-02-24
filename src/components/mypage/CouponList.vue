<template src="../../assets/html/mypage/coupon-list.html"></template>

<script>
import * as USER from '../../js/user.js'
import ModalCouponDetail from './CouponDetail'

export default {
  name: 'MyCouponList',
  data () {
    return {
      isCouponGuide: false,
      myCouponList: [],
      isLogin: ''
    }
  },
  methods: {
    openLink (link, type) {
      console.log(type)
      if (type === 'new_window') {
        window.location.href = link
      } else if (type === 'modal') {
        this.couponDetail(link)
      }
    },
    copyCoupon (couponId) {
      this.$modal.show('dialog', {
        title: this.$t('my.coupon-copy-alert'),
        buttons: [
          {
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$copyText(couponId)
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    },
    checkCoupon (couponId) {
      this.$modal.show('dialog', {
        title: this.$t('my.coupon-check-confirm'),
        buttons: [
          {
            title: this.$t('comm.no'),
            class: 'btn-line',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: this.$t('comm.yes'),
            handler: () => {
              USER.useCoupon(couponId).then(() => {
                this.$modal.hide('dialog')
                this.getCouponList()
              })
            }
          }
        ]
      })
    },
    getCouponList () {
      USER.getMyCouponList().then(result => {
        this.myCouponList = result.COUPONS
        result.COUPONS.forEach(coupon => {
          coupon.START_DATE = this.$moment(coupon.ISSUED_YMDT).format('YYYY.MM.DD')
          coupon.EXPIRE_DATE = this.$moment(coupon.EXPIRE_YMD).format('YYYY.MM.DD')

          if (coupon.EXPIRE_DATE < this.$moment().format('YYYY.MM.DD')) {
            coupon.PASS_DATE = true
          }
        })
        this.myCouponList = this.myCouponList.sort(this.sortJsonArray)
      })
    },
    couponDetail (url) {
      this.$modal.show(ModalCouponDetail, {
        url: url
      }, {
        type: 'full'
      }, {})
    },
    sortJsonArray (a, b) {
      if (a.USE_YN === b.USE_YN) { return 0 } return a.USE_YN > b.USE_YN ? 1 : -1
    }
  },
  mounted () {
    if (!this.$cookies.get('USER_AUTH')) {
      localStorage.setItem('COUPON_FLAG', 'y')
      this.$router.push('/mytag/reissue?couponFlag=true')
    }

    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  },
  watch: {
    isLogin: function () {
      if (this.isLogin) {
        localStorage.setItem('COUPON_FLAG', 'n')
        this.getCouponList()
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
