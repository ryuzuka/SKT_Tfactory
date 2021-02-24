<template src="../../../assets/html/product/program/program3.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'Program3',
  data () {
    return {
      bookingAvailable: false,
      isLogin: ''
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
        this.$router.push('/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID +
            '&classId=' + this.$route.query.classId)
      } else {
        localStorage.setItem('previous_url', '/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
