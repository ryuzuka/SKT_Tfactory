<template src="../../../assets/html/service/application/program-application-survey.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'ProgramApplicationSurvey',
  data () {
    return {
      storeId: this.$route.query.store_id,
      classId: this.$route.query.classId,
      questionList: [],
      contactNumber: '',
      attendeeNum: 1,
      scheduleId: '',
      bookId: ''
    }
  },
  mounted () {
    this.scheduleId = sessionStorage.getItem('scheduleId')
    this.contactNumber = sessionStorage.getItem('contactNumber')
    this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
    this.questionList = JSON.parse(sessionStorage.getItem('surveyQuestions'))
    this.questionList.forEach(question => {
      question.ANSWER = []
    })

    // STORE.getQuestions(this.$store.state.constants.COUNSELING.COUNSELING_ID).then(result => {
    //   this.questionList = result.QUESTIONS
    //   this.questionList.forEach(question => {
    //     question.ANSWER = []
    //   })
    // })
  },
  methods: {
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
    },
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
        this.applyProgram(BASIC_SURVEY_RESPONSE)
      }
    },
    applyProgram (surveyResponse) {
      // 신청
      let applyInfo = {
        'STORE_ID': parseInt(this.storeId),
        'USER_NAME': this.$cookies.get('MY_INFO').NAME,
        'PROGRAM_SCHEDULE_ID': this.scheduleId,
        'ATTENDEE_NUM': this.attendeeNum,
        'USER_PHONE_NUMBER': this.contactNumber,
        'BASIC_SURVEY_RESPONSE': surveyResponse
      }
      STORE.applyProgram(applyInfo).then(result => {
        this.bookId = result.BOOK_ID
        this.$router.push('/sev/program/applicationComplete?&store_id=' + this.storeId + 'classId=' + this.$route.query.classId + '&bookId=' + this.bookId)
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
