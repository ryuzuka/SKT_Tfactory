<template src="../../../assets/html/product/program/program20.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import * as NATIVE from '../../../js/native.js'

export default {
  name: 'Program20',
  data () {
    return {
      bookingAvailable: false,
      isLogin: '',
      mobileOS: null,
      expired: false,
      commingSoon: false,
      entryDate: [20210407, 20210413]
    }
  },
  created () {
    let date = parseInt(this.$moment().format('YYYYMMDD'))
    if (date > this.entryDate[1]) {
      this.expired = true
    }
    if (date < this.entryDate[0]) {
      this.commingSoon = true
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
        let redirectURL = ''
        NATIVE.sysBrowserOpen(this.mobileOS, redirectURL)
      } else {
        let prevURL = window.location.pathname + '?classId=' + this.$route.query.classId
        localStorage.setItem('previous_url', prevURL)
        this.$router.push({name: 'Login'})
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
