<template src="../../assets/html/main/main-menu.html"></template>

<script>
import * as TID from '../../js/tid.js'
import * as NATIVE from '../../js/native.js'

export default {
  name: 'MainMenu',
  data () {
    return {
      isOpen: false,
      isLogin: false,
      myInfo: {}
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })
  },
  watch: {
    isLogin: function () {
      if (this.isLogin === true) {
        this.myInfo = this.$cookies.get('MY_INFO')
      }
    }
  },
  methods: {
    toggleGnb () {
      this.isOpen = this.isOpen ? Boolean(false) : Boolean(true)
    },
    clickMenu (type) {
      if (type === 'setting') {
        this.toggleGnb()
        this.$router.push({name: 'Setting'})
      } else if (type === 'store') {
        this.toggleGnb()
        this.$router.push({name: 'Shop'})
      }

      // else if (type === 'reword') {}
      // else if (type === 'event') {}
    },
    tidLoginRedirect () {
      let callback = window.location.origin + '/main/store'
      let mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidLogin_native(mobileOS, callback)
      } else {
        TID.tidLoginRedirect(callback)
      }
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
        localStorage.setItem('previous_url', this.$router.currentRoute.path)
        this.$router.push({name: 'Login'})
      }
    },
    clickPurchaseList () {
      if (this.isLogin === true) {
        this.$router.push({name: 'MyPayList'})
      } else {
        localStorage.setItem('previous_url', this.$router.currentRoute.path)
        this.$router.push({name: 'Login'})
      }
    },
    clickMyReservation () {
      if (this.isLogin === true) {
        this.$router.push({name: 'MyBookingList'})
      } else {
        localStorage.setItem('previous_url', this.$router.currentRoute.path)
        this.$router.push({name: 'Login'})
      }
    },
    clickCouponList () {
      if (this.isLogin === true) {
        this.$router.push({name: 'MyCouponList'})
      } else {
        localStorage.setItem('previous_url', this.$router.currentRoute.path)
        this.$router.push({name: 'Login'})
      }
    }
  },
  created () {
    this.$EventBus.$on('toggle-gnb', this.toggleGnb)
  }
}
</script>
