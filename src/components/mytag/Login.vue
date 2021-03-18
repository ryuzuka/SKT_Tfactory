<template src="../../assets/html/mytag/login.html"></template>
<script>
import * as TID from '../../js/tid.js'
import * as USER from '../../js/user.js'
import * as NATIVE from '../../js/native.js'

export default {
  name: 'MyTagLogin',
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.$router.push('/main/mytag')
      }
    })

    if (Object.keys(this.$route.query).length !== 0) {
      this.$loading.stop()
      localStorage.setItem('t_token', this.$route.query.id_token)
      USER.signInTID(this.$route.query.id_token).then(result => {
        this.$loading.stop()

        if (result.RET_CODE === 0) {
          // 이미 T Factory 회원 (O)
          this.$cookies.set('USER_AUTH', result)
          this.$store.getters.CONSTANTS.session_alive = true
          this.$router.push(localStorage.getItem('previous_url'))
        } else if (result.RET_CODE === 1) {
          // T Factory 최초 - 자사
          this.$router.push('/join?line_list=' + JSON.stringify(result.LINE_LIST))
        } else if (result.RET_CODE === 2) {
          // T Factory 최초 - 타사
          this.$router.push('/join/number')
        }
      }).catch((err) => {
        this.$loading.stop()
        this.loginFailedModal(err.response.data.RET_CODE)
      })
    }
  },
  methods: {
    _tidLoginRedirect () {
      localStorage.setItem('previous_url', '/main/mytag')
      let callback = window.location.origin + '/mytag/login'
      let mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidLogin_native(mobileOS, callback)
      } else {
        TID.tidLoginRedirect(callback)
      }
    },
    _tidJoinRedirect () {
      let callback = window.location.origin + '/mytag/login'
      let mobileOS = this.$cookies.get('platform')

      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.tidJoinMember_native(mobileOS, callback)
      } else {
        TID.tidJoinRedirect(callback)
      }
    },
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
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/mytag';
</style>
