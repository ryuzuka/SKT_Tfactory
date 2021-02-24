<template src="../../assets/html/mypage/checkin.html"></template>

<script>
import * as NATIVE from '../../js/native.js'
export default {
  name: 'Checkin',
  methods: {
    registPhoto () {
      let callback = window.location.origin + '/main/store'
      NATIVE.faceRegistOpen(callback, this.$cookies.get('platform'))
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/sso';
</style>
