<template src="../../assets/html/mytag/mms.html"></template>
<script>
import * as MYTAG from '../../js/mytag.js'
export default {
  name: 'MyTagMms',
  data () {
    return {
      birth: '',
      fullBirth: ''
    }
  },
  methods: {
    certify () {
      if (this.birth.length !== 6) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.please-input-birth-date'),
          buttons: [
            {
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
        return
      }

      if (parseInt(this.birth.slice(0, 2)) > 30) {
        this.fullBirth = '19' + this.birth
      } else {
        this.fullBirth = '20' + this.birth
      }

      this.$loading.start()
      MYTAG.afterMarketings(this.$route.params.mdn, this.fullBirth).then(result => {
        this.$loading.stop()
        localStorage.setItem('AFTER_MARKETING', JSON.stringify(result))
        this.$router.push('/mytag/additional')
      }).catch((err) => {
        this.$loading.stop()
        if (err.response.data.RET_CODE === 3044) {
          this.$modal.show('dialog', {
            title: this.$t('mytag.no-self-kiosk-history'),
            buttons: [
              {
                title: this.$t('comm.confirm'),
                handler: () => {
                  this.$modal.hide('dialog')
                }
              }
            ]
          })
        } else {
          this.$modal.show('dialog', {
            title: this.$t('mytag.please-check-birth-date'),
            buttons: [
              {
                title: this.$t('comm.confirm'),
                handler: () => {
                  this.$modal.hide('dialog')
                }
              }
            ]
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/mytag';
</style>
