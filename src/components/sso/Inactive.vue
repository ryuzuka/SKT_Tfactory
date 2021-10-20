<template src="../../assets/html/sso/inactive.html"></template>

<script>
export default {
  name: 'Inactive',
  methods: {
    unlockInactive () {
      window.location.href = process.env.DT_WEB + 'sso/pass-number?inactive=1'
    },
    moveToMain () {
      this.$modal.show('dialog', {
        title: '휴면 계정을 해제해야 다시 T Factory 서비스 이용이 가능합니다.<br><br>다음에 하시겠습니까?',
        buttons: [
          {
            title: '취소',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: '확인',
            handler: () => {
              this.$router.push('/main/store')
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/sso';
</style>
