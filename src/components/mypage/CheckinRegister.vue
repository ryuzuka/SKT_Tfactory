<template src="../../assets/html/mypage/checkin-register.html"></template>

<script>
export default {
  name: 'CheckinRegister',
  components: {},
  props: {},
  methods: {
    agreePhoto () {
      this.$modal.show('dialog', {
        // 간편 인증 생체정보 수집 동의에 동의해주세요.
        title: this.$t('sso.quick-checkin-registration-alert'),
        buttons: [
          {
            title: this.$t('comm.confirm'),
            handler: () => {
              this.$modal.hide('dialog')

              // ’T Factory’가 카메라에 접근하려고 합니다.<br>사진 및 비디오를 촬영하는데 사용됩니다.
              this.$modal.show('dialog', {
                title: this.$t('sso.agree-photo-confirm'),
                buttons: [
                  {
                    title: this.$t('comm.not-allow'),
                    class: 'btn-line',
                    handler: () => {
                      this.$modal.hide('dialog')
                    }
                  },
                  {
                    title: this.$t('comm.confirm'),
                    handler: () => {
                      this.$modal.hide('dialog')
                    }
                  }
                ]
              })
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
