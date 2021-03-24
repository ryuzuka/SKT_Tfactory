<template src="../../../assets/html/product/program/program16.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import * as NATIVE from '../../../js/native.js'

export default {
  name: 'Program16',
  data () {
    return {
      bookingAvailable: false,
      isLogin: '',
      mobileOS: null
    }
  },
  mounted () {
    this.mobileOS = this.$cookies.get('platform')

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
        let redirectURL = 'https://vstudio.brightbell.co.kr/event/'
        NATIVE.sysBrowserOpen(mobileOS, redirectURL)
      } else {
        // localStorage.setItem('previous_url', '/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
        let prevURL = window.location.pathname + '?classId=' + this.$route.query.classId
        localStorage.setItem('previous_url', prevURL)
        this.$router.push({'name': 'Login'})
      }
    },
    login () {
      let prevURL = window.location.pathname + '?classId=' + this.$route.query.classId
      localStorage.setItem('previous_url', prevURL)
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
