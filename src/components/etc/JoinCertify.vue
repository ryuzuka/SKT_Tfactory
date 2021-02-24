<template src="../../assets/html/etc/join-certify.html"></template>
<script>
import ModalCombineInfo from './ModalCombineInfo'
import * as USER from '../../js/user.js'

export default {
  name: 'JoinCertify',
  data () {
    return {
      certCode: '',
      certKey: '',
      mdn: '',
      mdnUserYn: '',
      auth: {}
    }
  },
  mounted () {
    this.mdn = this.$route.query.mdn
    this.certKey = this.$route.query.cert_key

    if (this.$route.query.user) {
      this.mdnUserYn = this.$route.query.user
    }
  },
  methods: {
    certify () {
      if (this.certCode === '' || this.certCode.length !== 6) {
        this.checkCertCode()
        return
      }
      USER.signUpTID(this.certKey, this.certCode).then(result => {
        this.auth = result

        if (result === 3002) {
          this.wrongCertCode()
          return
        }

        if (this.mdnUserYn === 'true') {
          this.combineInfo()
        } else if (this.mdnUserYn === 'false') {
          this.$cookies.set('USER_AUTH', this.auth)
          this.$store.getters.CONSTANTS.session_alive = true
          this.$router.push(localStorage.getItem('previous_url'))
        } else {
          USER.checkMDNUser(this.$route.query.mdn).then(response => {
            if (response.USER_YN) {
              this.combineInfo()
            } else {
              this.$cookies.set('USER_AUTH', this.auth)
              this.$store.getters.CONSTANTS.session_alive = true
              this.$router.push(localStorage.getItem('previous_url'))
            }
          })
        }
      })
    },
    checkCertCode () {
      this.$modal.show('dialog', {
        title: this.$t('mytag.please-certification'),
        buttons: [{
          title: this.$t('comm.confirm'),
          handler: () => {
            this.$modal.hide('dialog')
          }
        }]
      })
    },
    wrongCertCode () {
      this.$modal.show('dialog', {
        title: this.$t('mytag.please-wrong-number'),
        buttons: [{
          title: this.$t('comm.confirm'),
          handler: () => {
            this.$modal.hide('dialog')
          }
        }]
      })
    },
    combineInfo () {
      // 통합 정보를 확인해 주세요.
      this.$modal.show(ModalCombineInfo, {}, {}, {
        'complete-combine': e => {
          if (e.isAgree) {
            this.$modal.show('dialog', {
              title: this.$t('etc.complete-combine-member'),
              buttons: [{
                title: this.$t('comm.confirm'),
                handler: () => {
                  this.$modal.hide('dialog')
                  this.$cookies.set('USER_AUTH', this.auth)
                  this.$store.getters.CONSTANTS.session_alive = true
                  this.$router.push(localStorage.getItem('previous_url'))
                }
              }]
            })
          } else {
            this.$modal.show('dialog', {
              title: this.$t('etc.bio-face-info-agree'),
              buttons: [{
                title: this.$t('comm.confirm'),
                handler: () => {
                  this.$modal.hide('dialog')
                  this.combineInfo()
                }
              }]
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/etc';
</style>
