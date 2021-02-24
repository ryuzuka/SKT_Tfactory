<template src="../../assets/html/etc/member.html"></template>

<script>
import * as USER from '../../js/user.js'
export default {
  name: 'Member',
  data () {
    return {
      myInfo: {},
      USER_INFO_AGREEMENT_YN: false,
      MARKETING_AGREEMENT_YN: false
    }
  },
  created () {

  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive) {
        this.myInfo = this.$cookies.get('MY_INFO')
        this.USER_INFO_AGREEMENT_YN = this.myInfo.USER_INFO_AGREEMENT_YN
        this.MARKETING_AGREEMENT_YN = this.myInfo.MARKETING_AGREEMENT_YN
      }
    })
  },
  methods: {
    onAgree () {
      USER.updateAgreement(this.USER_INFO_AGREEMENT_YN, this.MARKETING_AGREEMENT_YN).then(() => {
        USER.updateMyInfo()
        this.$modal.show('dialog', {
          title: '동의 내역이 변경 되었습니다.',
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
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
  @import '../../assets/css/etc';
</style>
