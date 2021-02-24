<template src="../../assets/html/mytag/certify.html"></template>
<script>
import * as USER from '../../js/user.js'
export default {
  name: 'MyTagCertify',
  data () {
    return {
      startCertify: false,
      certCode: '',
      mdn: '',
      certKey: '',
      encryptFlag: true,
      couponFlag: false,
      reissueFlag: false,
      isLogin: ''
    }
  },
  watch: {
    isLogin (loginFlag) {
      console.log(loginFlag)
      if (loginFlag) {
        if (localStorage.getItem('COUPON_FLAG') === 'y') {
          this.$router.push('/my/coupon')
        } else {
          this.$router.push('/main/mytag')
        }
      } else if (!loginFlag) {
        this.mdn = this.$route.params.mdn
        this.certKey = this.$route.query.CERT_KEY

        if (!this.reissueFlag) {
          this.certCode = this.$route.query.CERT_CODE
          this.certify()
        }

        this.mdn = this.$route.params.mdn
        this.certKey = this.$route.query.CERT_KEY

        if (this.reissueFlag) {
          this.clickCertifyStart()
          this.encryptFlag = false
        }
      }
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })

    if (this.$route.query.couponFlag === 'true') {
      this.couponFlag = true
    }

    if (this.$route.query.reissueFlag === 'true') {
      this.reissueFlag = true
    }
  },
  methods: {
    reissueButton () {
      this.$router.push('/mytag/reissue?couponFlag=' + this.couponFlag)
    },
    clickCertifyStart () {
      this.startCertify = true
      this.$parent.$emit('start-certify')
    },
    certify () {
      this.$cookies.remove('USER_AUTH')
      document.cookie = encodeURIComponent('MY_INFO') + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

      if (this.certCode === '') {
        this.$modal.show('dialog', {
          title: this.$t('mytag.please-certification'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
      }

      this.$loading.start()
      USER.signInMDN(this.mdn, this.certKey, this.certCode, this.encryptFlag).then(result => {
        this.$loading.stop()
        if (result.RET_CODE === 0) {
          this.$cookies.set('USER_AUTH', result)
          this.$store.getters.CONSTANTS.session_alive = true
        } else if (result.response.data.RET_CODE === 3002) {
          this.$modal.show('dialog', {
            title: this.$t('mytag.please-wrong-number'),
            buttons: [{
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$modal.hide('dialog')
              }
            }]
          })
        } else if (result.response.data.RET_CODE === 3004) {
          this.$modal.show('dialog', {
            title: this.$t('mytag.cert_key_expired'),
            buttons: [{
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$router.push('/mytag/reissue')
              }
            }]
          })
        } else if (result.response.data.RET_CODE === 3005) {
          console.log('here')
          this.$modal.show('dialog', {
            title: this.$t('mytag.cert_key_expired'),
            buttons: [{
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$router.push('/mytag/reissue')
              }
            }]
          })
        } else {
          this.$modal.show('dialog', {
            title: this.$t('mytag.certification-error'),
            buttons: [{
              title: this.$t('comm.confirm'),
              handler: () => {
                this.$router.push('/mytag/reissue')
              }
            }]
          })
        }
      }).catch(() => {
        this.$loading.stop()
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/mytag';
</style>
