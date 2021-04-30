<template src="../../../assets/html/product/program/program30.html"></template>

<script>

export default {
  name: 'Program30',
  components: {
  },
  data () {
    return {
      classId: this.$route.query.classId,
      isLogin: false
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
