<template ref="mainLogin" src="../../assets/html/main/main-login.html"></template>

<script>
import * as TID from '../../js/tid.js'
import * as NATIVE from '../../js/native.js'

export default {
  name: 'MainLogin',
  methods: {
    _tidLoginRedirect () {
      let callback = window.location.origin + '/main/store'
      let mobileOS = this.$cookies.get('platform')

      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidLogin_native(mobileOS, callback)
      } else {
        TID.tidLoginRedirect(callback)
      }
    },
    _tidJoinRedirect () {
      let callback = window.location.origin + '/main/store'
      let mobileOS = this.$cookies.get('platform')

      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidJoinMember_native(mobileOS, callback)
      } else {
        TID.tidJoinRedirect(callback)
      }
    },
    skipLogin () {
      this.$router.push({name: 'Main'})
    }
  }
}

</script>

<style lang="scss">
  @import '../../assets/css/sso';
</style>
