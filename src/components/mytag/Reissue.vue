<template src="../../assets/html/mytag/reissue.html"></template>
<script>

import _ from 'lodash'
import * as USER from '../../js/user.js'

export default {
  name: 'MyTagReissue',
  data () {
    return {
      number: '010',
      termsModel: [[false, false, false, false], false],
      checkAll: [false],
      couponFlag: false
    }
  },
  methods: {
    changeTermsCheck (index, type) {
      if (type === 'all') {
        this.termsModel[index] = this.termsModel[index].map(() => {
          if (this.checkAll[index]) {
            return true
          } else {
            return false
          }
        })
      } else {
        let isCheck = true
        _.forEach(this.termsModel[index], val => {
          if (val === false) {
            isCheck = false
            this.checkAll[index] = false
          }
        })
        if (isCheck) {
          this.checkAll[index] = true
        }
      }
      this.$forceUpdate()
    },
    sendCertifyNumber () {
      if (!this.couponFlag) {
        if (!(this.termsModel[0][0] && this.termsModel[0][1] && this.termsModel[1])) {
          this.$modal.show('dialog', {
            title: '필수 약관에 동의해주세요.',
            buttons: [{
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$modal.hide('dialog')
              }
            }]
          })
          return
        }
      }

      if (this.number.length !== 11) {
        this.$modal.show('dialog', {
          title: this.$t('mytag.please-input-mobile-number'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
        return
      }

      USER.requestSMS(this.number).then(result => {
        this.$router.push('/mytag/certify/' + this.number + '?CERT_KEY=' + result.CERT_KEY + '&reissueFlag=true&couponFlag=' + this.couponFlag)
      })
    }
  },
  mounted () {
    console.log('reissue')
    this.$loading.stop()
    if (this.$route.query.couponFlag === 'true') {
      this.couponFlag = true
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/mytag';
</style>
