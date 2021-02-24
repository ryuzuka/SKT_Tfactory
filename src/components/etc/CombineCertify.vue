<template src="../../assets/html/etc/combine-certify.html"></template>
<script>
import ModalCombineInfo from './ModalCombineInfo'
import * as USER from '../../js/user.js'

export default {
  name: 'CombineCertify',
  data () {
    return {
      certKey: '',
      certCode: '',
      mdn: '',
      userYn: false
    }
  },
  mounted () {
    this.certKey = this.$route.query.cert_key
    this.mdn = this.$route.query.mdn
    USER.checkMDNUser(this.mdn).then(result => {
      this.userYn = result.USER_YN
    })
  },
  methods: {
    certify () {
      if (this.certCode === '' || this.certCode.length !== 6) {
        this.checkCertCode()
        return
      }
      USER.occupyMDN(this.certKey, this.certCode).then(result => {
        if (result.RET_CODE === 0) {
          if (this.userYn) {
            this.combineInfo()
          } else {
            window.location.href = '/lineinfo'
          }
        }
      }).catch(() => {
        this.wrongCertCode()
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
    changeExistentInfo () {
      // 기존 등록된 얼굴 인식 로그인 정보가 존재합니다.
      this.$modal.show('dialog', {
        title: '기존 등록된 얼굴 인식 로그인 정보가 존재합니다.<br>새로운 얼굴 인식 로그인 정보<br>(010-12**-23**)로 변경하시겠습니까?',
        buttons: [{
          title: this.$t('comm.no'),
          handler: () => {
            this.$modal.hide('dialog')
          }
        }, {
          title: this.$t('comm.to-change'),
          handler: () => {
            this.$modal.hide('dialog')

            // 변경되었습니다.
            this.$modal.show('dialog', {
              title: this.$t('comm.been-changed'),
              buttons: [{
                title: this.$t('comm.confirm'),
                handler: () => {
                  this.$modal.hide('dialog')
                  this.combineInfo()
                }
              }]
            })
          }
        }]
      })
    },
    combineInfo () {
      this.$modal.show(ModalCombineInfo, {}, {}, {
        'complete-combine': e => {
          if (e.isAgree) {
            this.$modal.show('dialog', {
              title: this.$t('etc.complete-combine-member'),
              buttons: [{
                title: this.$t('comm.confirm'),
                handler: () => {
                  this.$modal.hide('dialog')
                  window.location.href = '/lineinfo'
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
