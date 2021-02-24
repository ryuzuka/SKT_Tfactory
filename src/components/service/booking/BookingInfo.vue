<template src="../../../assets/html/service/booking/booking-info.html"></template>

<script>
import UiSelect from '../../../ui/UiSelect'
import Consult from '../Consult'

export default {
  name: 'BookingInfo',
  mixins: [Consult],
  components: {
    UiSelect
  },
  props: {
    bookingType: String
  },
  data () {
    return {
      isModify: false,
      userInfo: {},
      applicantSameFlag: false,
      participantName: '',
      participantMDN: ''
    }
  },
  methods: {
    clickModify () {
      this.isModify = !this.isModify ? Boolean(true) : Boolean(false)
      this.isCertificationAgree = false
      this.isTimeout = true
      this.contactNumber = ''
      this.certificationNumber = ''
      this.clearTimer()
    },
    async clickComplete () {
      // test

      await this.alertPersonalCertification() //    본인 인증 완료 후 다시 신청해주세요.
      this.isModify = true
      this.$nextTick(() => {
        this.$refs.certification.focus()
      })

      await this.alertRequiredStudent() //          수강생 이름을 입력해주세요.
      this.$refs.student.focus()

      await this.alertRequiredApplicant() //        신청자 이름을 입력해주세요. (비로그인)
      if (this.$refs.applicant) {
        this.$refs.applicant.focus()
      }

      this.$router.push('/sev/booking/' + this.bookingType + '/complete')
    },
    applicantSame () {
      if (!this.applicantSameFlag === true) {
        this.participantName = this.userInfo.NAME
        this.participantMDN = this.userInfo.MDN
      } else {
        this.participantName = null
        this.participantMDN = null
      }
    },
    alertPersonalCertification () {
      return new Promise(resolve => {
        // 본인 인증 완료 후 다시 신청해주세요.
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-personal-certification'),
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
    alertRequiredStudent () {
      return new Promise(resolve => {
        // 수강생 이름을 입력해주세요.
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-required-student'),
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
    }
  },
  mounted () {
    this.userInfo = this.$cookies.get('MY_INFO')
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
