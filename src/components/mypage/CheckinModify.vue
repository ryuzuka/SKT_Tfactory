<template src="../../assets/html/mypage/checkin-modify.html"></template>

<script>
export default {
  name: 'CheckinModify',
  components: {},
  props: {},
  methods: {
    deletePhoto () {
      // 개인정보 수집 및 이용에 동의해 주세요.
      this.$modal.show('dialog', {
        title: this.$t('sso.delete-photo-confirm'),
        buttons: [{
          title: this.$t('comm.confirm'),
          handler: () => {
            this.$modal.hide('dialog')
          }
        }, {
          title: this.$t('comm.cancel'),
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
  @import '../../assets/css/sso';
</style>
