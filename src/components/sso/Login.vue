<template src="../../assets/html/sso/login.html"></template>
<script>
import * as TID from '../../js/tid.js'
import * as USER from '../../js/user.js'
import * as NATIVE from '../../js/native.js'

export default {
  name: 'Login',
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.$router.push(localStorage.getItem('previous_url'))
      }
    })

    if (Object.keys(this.$route.query).length !== 0) {
      this.$loading.stop()
      localStorage.setItem('t_token', this.$route.query.id_token)
      USER.signInTID(this.$route.query.id_token).then(result => {
        this.$loading.stop()
        if (result.RET_CODE === 0) {
          this.$cookies.set('USER_AUTH', result)
          this.$store.getters.CONSTANTS.session_alive = true
          this.$router.push(localStorage.getItem('previous_url'))
        }

        if (result.RET_CODE === 11003) {
          // 휴면
          this.$router.push('/sso/inactive')
        }
      })
    }
  },
  methods: {
    loginFailedModal (RET_CODE) {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-cancel-booking-failed') + ' ' + RET_CODE,
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'Main'})
          }
        }]
      })
    },
    _tidLoginRedirect () {
      let callback = window.location.href
      let mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidLogin_native(mobileOS, callback)
      } else {
        TID.tidLoginRedirect(callback)
      }
    },
    _tidJoinRedirect () {
      let callback = window.location.href
      let mobileOS = this.$cookies.get('platform')

      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidJoinMember_native(mobileOS, callback)
      } else {
        TID.tidJoinRedirect(callback)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/sso';
</style>
