<template src="../../../assets/html/service/booking/booking-survey.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'BookingSurvey',
  data () {
    return {
      isModify: false,
      questionList: []
    }
  },
  methods: {
    clickComplete () {
      let BASIC_SURVEY_RESPONSE = []
      let over200Flag = false

      this.questionList.forEach(question => {
        if (JSON.stringify(question.ANSWER).length > 202) {
          over200Flag = true
          this.canNotWriteOver200Error()
        }

        if (question.ANSWER.length === 0) {
          question.ANSWER = ''
        }
        let answer = {
          'BASIC_SURVEY_QUESTION_ID': question.BASIC_SURVEY_QUESTION_ID,
          'RESPONSE': JSON.stringify(question.ANSWER)
        }
        BASIC_SURVEY_RESPONSE.push(answer)
      })

      if (!over200Flag) {
        this.$store.state.constants.COUNSELING.BASIC_SURVEY_RESPONSE = BASIC_SURVEY_RESPONSE
        this.bookCounseling()
      }
    },
    bookCounseling () {
      let bookingInfo = this.$store.getters.CONSTANTS.COUNSELING
      bookingInfo.USER_NAME = this.$cookies.get('MY_INFO').NAME
      bookingInfo.USER_PHONE_NUMBER = '010' + this.$store.getters.CONSTANTS.COUNSELING.MDN
      bookingInfo.POC_CODE = 'POC_TPA'
      // bookingInfo.FROM_SERVICE = localStorage.getItem('SERVICE_NAME')

      if (this.$store.state.constants.COUNSELING_MODIFY.MODIFY_FLAG) {
        bookingInfo.BOOK_ID = this.$store.state.constants.COUNSELING_MODIFY.BOOK_ID
        STORE.modifyCounseling(bookingInfo).then((result) => {
          this.$router.push('/sev/booking/counseling/complete?BOOK_ID=' + result.BOOK_ID + '&MODIFY_FLAG=true')
        }).catch((err) => {
          if (err.response.data.RET_CODE === 14002) {
            this.showBookingFailedWithOverBook()
          } else {
            this.showBookingFailedDialog(err.response.data.RET_CODE)
          }
        })
      } else {
        STORE.bookCounseling(bookingInfo).then((result) => {
          this.$router.push('/sev/booking/counseling/complete?BOOK_ID=' + result.BOOK_ID)
        }).catch((err) => {
          if (err.response.data.RET_CODE === 14002) {
            this.showBookingFailedWithOverBook()
          } else {
            this.showBookingFailedDialog(err.response.data.RET_CODE)
          }
        })
      }
    },
    showBookingFailedDialog (RET_CODE) {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-cancel-booking-failed') + ' ' + RET_CODE,
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'Main'})
          }
        }]
      })
    },
    showBookingFailedWithOverBook () {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-booking-failed-overbook'),
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'Main'})
          }
        }]
      })
    },
    canNotWriteOver200Error () {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-booking-failed-200'),
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
          }
        }]
      })
    }
  },
  mounted () {
    STORE.getQuestions(this.$store.state.constants.COUNSELING.COUNSELING_ID).then(result => {
      this.questionList = result.QUESTIONS
      this.questionList.forEach(question => {
        question.ANSWER = []
      })
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
