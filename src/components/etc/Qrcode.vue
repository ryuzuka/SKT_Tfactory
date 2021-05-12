<template src="../../assets/html/etc/qrcode.html"></template>

<script>
export default {
  name: 'Qrcode',
  data () {
    return {}
  },
  methods: {
    clickView () {
      sessionStorage.setItem('isQrGuide', 'true')
      this.$router.push('/')
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss">
  @import '../../assets/css/etc';
</style>
