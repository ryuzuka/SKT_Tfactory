<template src="../../assets/html/etc/leave.html"></template>

<script>
import * as USER from '../../js/user.js'

export default {
  name: 'Leave',
  data () {
    return {
      isAgree: false
    }
  },
  methods: {
    withdrawal () {
      if (!this.isAgree) {
        this.$modal.show('dialog', {
          title: this.$t('etc.leave-agree-alert'),
          buttons: [
            {
              title: this.$t('comm.confirm')
            }
          ]
        })
      } else {
        USER.requestWithDraw().then(result => {
          if (result === 0) {
            this.$cookies.remove('USER_AUTH')
            document.cookie = encodeURIComponent('MY_INFO') + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            this.$router.push('/leave/complete')
            // window.location.href = window.location.origin
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/etc';
</style>
