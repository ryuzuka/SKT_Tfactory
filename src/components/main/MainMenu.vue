<template src="../../assets/html/main/main-menu.html"></template>

<script>
import * as TID from '../../js/tid.js'
import * as NATIVE from '../../js/native.js'
import _ from 'lodash'

export default {
  name: 'MainMenu',
  props: {
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      BOTTOM_HEIGHT: 64,
      isLogin: false,
      myInfo: {},
      aniObj: []
    }
  },
  mounted () {
    this.scroll()

    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })
  },
  watch: {
    scrollTop () {
      this.scroll()
    },
    isLogin: function () {
      if (this.isLogin === true) {
        this.myInfo = this.$cookies.get('MY_INFO')
      }
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
      this.$forceUpdate()
    },
    tidLoginRedirect () {
      if (this.isLogin) {
        this.$router.push('/member')
      } else {
        let callback = window.location.origin + '/'
        let mobileOS = this.$cookies.get('platform')
        if (mobileOS === 'A' || mobileOS === 'I') {
          NATIVE.tidLogin_native(mobileOS, callback)
        } else {
          TID.tidLoginRedirect(callback)
        }
      }
    },
    clickSetting () {
      this.$router.push({name: 'Setting'})
    },
    clickFaceRegist () {
      if (this.$cookies.get('platform') === 'A' || this.$cookies.get('platform') === 'I') {
        if (this.isLogin === true) {
          this.$router.push({name: 'Checkin'})
        } else {
          localStorage.setItem('previous_url', '/my/checkin')
          this.$router.push({name: 'Login'})
        }
      } else {
        this.$router.push({name: 'MainAppDown'})
      }
    },
    clickMyWish () {
      if (this.isLogin === true) {
        this.$router.push({name: 'Wish'})
      } else {
        localStorage.setItem('previous_url', '/my/wish')
        this.$router.push({name: 'Login'})
      }
    },
    clickPurchaseList () {
      if (this.isLogin === true) {
        this.$router.push({name: 'MyPayList'})
      } else {
        localStorage.setItem('previous_url', '/my/paylist')
        this.$router.push({name: 'Login'})
      }
    },
    clickMyReservation () {
      if (this.isLogin === true) {
        this.$router.push({name: 'MyBookingList'})
      } else {
        localStorage.setItem('previous_url', '/my/booking/list')
        this.$router.push({name: 'Login'})
      }
    },
    clickCouponList () {
      if (this.isLogin === true) {
        this.$router.push({name: 'MyCouponList'})
      } else {
        localStorage.setItem('previous_url', '/my/coupon')
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>
