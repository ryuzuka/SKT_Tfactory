<template src="../../assets/html/service/consult.html"></template>

<script>
import UiSelect from '../../ui/UiSelect'
import * as STORE from '../../js/store.js'
export default {
  name: 'Consult',
  components: {
    UiSelect
  },
  data () {
    return {
      contactNumber: ''
    }
  },
  methods: {
    consultBtnClicked () {
      if (!this.contactNumber || this.contactNumber.length !== 8) {
        this.alertContactNumber()
        return
      }

      this.requestConsult()
    },
    requestConsult () {
      let bookInfo = {
        POC_DEVICE_ID: process.env.POC_DEVICE_ID,
        PAGE_NAME: '모바일 현장호출',
        MDN: '010' + this.contactNumber,
        ADDITIONAL_INFO: this.$store.getters.CONSTANTS.ON_SITE_COUNSELING_DETAIL
      }

      STORE.bookOnSiteCounseling(bookInfo).then(result => {
        if (result.RET_CODE === 0) {
          this.$router.push('/sev/consult/complete?BOOK_ID=' + result.BOOK_ID)
        }
      })
    },
    alertContactNumber () {
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-contact-number'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/service';
</style>
