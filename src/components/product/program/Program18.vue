<template src="../../../assets/html/product/program/program18.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import * as NATIVE from '../../../js/native.js'

export default {
  name: 'Program18',
  data () {
    return {
      bookingAvailable: false,
      isLogin: '',
      expired: false
    }
  },
  created () {
    if (parseInt(this.$moment().format('YYYYMMDD')) >= 20210331) {
      this.expired = true
    }
  },
  mounted () {
    STORE.getProgramClass(this.$route.query.classId).then(result => {
      this.bookingAvailable = result.PROGRAM_CLASS.PROGRAM_CLASS_BOOKING_YN
    })

    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })
  },
  methods: {
    bookProgram () {
      if (this.isLogin) {
        let mobileOS = this.$cookies.get('platform')
        let redirectURL = 'https://bd3ig7ut4mo.typeform.com/to/p0ohMjin'
        NATIVE.sysBrowserOpen(mobileOS, redirectURL)
      } else {
        let prevURL = window.location.pathname + '?classId=' + this.$route.query.classId
        localStorage.setItem('previous_url', prevURL)
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/product';
</style>
