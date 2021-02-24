<template src="../../assets/html/sso/kiosk.html"></template>

<script>
import * as TID from '../../js/tid.js'
import * as USER from '../../js/user.js'

/**
 * 삭제된 페이지
 */

export default {
  name: 'Kiosk',
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        USER.confirmOneTimeCert(this.$cookies.get('CERT_KEY'), this.$cookies.get('USER_AUTH').ACCESS_TOKEN)
          .then(result => {
            if (result.status === 200) {
              this.$router.push({name: 'Success'})
            } else {
              this.$router.push({name: 'Error500'})
            }
          })
      }
    })

    if (Object.keys(this.$route.query).length !== 0) {
      if (this.$route.query.cert_key !== undefined) {
        this.$cookies.set('CERT_KEY', this.$route.query.cert_key)
      }

      if (this.$route.query.id_token !== undefined) {
        USER.signInOrUpTID(this.$route.query).then(result => {
          if (result.RET_CODE === 0) {
            this.$cookies.set('USER_AUTH', result)
            USER.confirmOneTimeCert(this.$cookies.get('CERT_KEY'), result.ACCESS_TOKEN).then(result => {
              if (result.status === 200) {
                this.$router.push({name: 'Success'})
              }
            })
          } else {
            this.$router.push({name: 'Error500'})
          }
        })
      }
    }
  },
  methods: {
    tidLoginRedirect () {
      let callback = window.location.origin + window.location.pathname
      TID.tidLoginRedirect(callback)
    },
    tidJoinRedirect () {
      let callback = window.location.origin + window.location.pathname
      TID.tidJoinRedirect(callback)
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/sso';
</style>
