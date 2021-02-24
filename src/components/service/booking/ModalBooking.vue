<template src="../../../assets/html/service/pop_booking.html"></template>

<script>
export default {
  name: 'PopBooking',
  data () {
    return {
      isLogin: false
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  },
  methods: {
    clickMenu (service) {
      if (service === 'counseling') {
        if (!this.isLogin) {
          localStorage.setItem('previous_url', this.$router.currentRoute.path)
          this.$router.push({name: 'Login'})
          return
        }
      }
      this.$router.push('/sev/booking/' + service)
    },
    clickMyBookingList () {
      this.$router.push({'name': 'MyBookingList'})
    }
  }
}
</script>
