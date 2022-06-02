<template src="../../assets/html/etc/qrcode.html"></template>

<script>
export default {
  name: 'Qrcode',
  data () {
    return {}
  },
  methods: {
    goMain () {
      sessionStorage.setItem('isQrCode', 'true')
      this.$router.push('/main/store')
    }
  },
  created () {
    if (this.$store.state.isMobile) {
      this.goMain()
    }
  },
  mounted () {}
}
</script>

<style lang="scss">
  @import '../../assets/css/etc';
</style>
