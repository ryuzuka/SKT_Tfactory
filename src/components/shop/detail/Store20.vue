<template src="../../../assets/html/shop/detail/details20.html"></template>

<script>
export default {
  name: 'Store20',
  data () {
    return {
      classId: null,
      isLogin: false
    }
  },
  created () {
    if (process.env.NODE_ENV === 'development') {
      this.classId = 94
    } else {
      this.classId = 55
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })
  },
  methods: {
    reserve () {
      if (this.isLogin) {
        this.$router.push('/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
      } else {
        localStorage.setItem('previous_url', this.$route.path + '?classId=' + this.classId)
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
@import 'src/assets/css/main';
</style>
