<template src="../../assets/html/etc/combine.html"></template>

<script>
import * as USER from '../../js/user.js'

export default {
  name: 'Combine',
  data () {
    return {
      number: '010'
    }
  },
  methods: {
    sendCertifyNumber () {
      let regexp = /^[0-9]*$/

      if (this.number.length !== 11 || !regexp.test(this.number)) {
        this.checkMDNAlert()
        return
      }
      USER.requestMDNCheck(this.number, false).then(result => {
        if (result.RET_CODE === 0) {
          this.$router.push('/combine/certify?mdn=' + this.number + '&cert_key=' + result.CERT_KEY)
        } else {
          // FIXME: error
        }
      })
    },
    checkMDNAlert () {
      this.$modal.show('dialog', {
        title: this.$t('mytag.please-input-mobile-number'),
        buttons: [{
          title: this.$t('comm.confirm'),
          handler: () => {
            this.$modal.hide('dialog')
          }
        }]
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/etc';
</style>
