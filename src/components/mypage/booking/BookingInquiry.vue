<template src="../../../assets/html/mypage/booking/booking-inquiry.html"></template>

<script>
export default {
  name: 'MyBookingInquiry',
  data () {
    return {
      isTabActive: [true, false]
    }
  },
  methods: {
    clickTab (idx) {
      this.isTabActive = [false, false]
      this.isTabActive[idx] = true
    },
    clickButton (type) {
      console.log(type)
    },
    alertRequiredApplicant () {
      return new Promise(resolve => {
        // 신청자 이름을 입력해주세요.
        this.$modal.show('dialog', {
          title: this.$t('my.alert-required-applicant-name'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertRequiredBookingNumber () {
      return new Promise(resolve => {
        // 전화번호를 입력해주세요.
        this.$modal.show('dialog', {
          title: this.$t('my.alert-required-booking-number'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertRequiredPhoneNumber () {
      return new Promise(resolve => {
        // 전화번호를 입력해주세요.
        this.$modal.show('dialog', {
          title: this.$t('my.alert-required-phone-number'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertBookingListNone () {
      return new Promise(resolve => {
        // 예약 내역이 없습니다.
        this.$modal.show('dialog', {
          title: this.$t('my.booking-list-none'),
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
  @import 'src/assets/css/mypage';
</style>
