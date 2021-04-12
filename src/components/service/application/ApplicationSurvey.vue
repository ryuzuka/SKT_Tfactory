<template src="../../../assets/html/service/application/application-survey.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'ApplicationSurvey',
  data () {
    return {
      storeId: this.$route.query.store_id,
      classId: this.$route.query.classId,
      bookId: this.$route.query.bookId,
      questionList: [],
      scheduleId: '',
      attendeeNum: 1,
      contactNumber: ''
    }
  },
  mounted () {
    this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
    this.contactNumber = sessionStorage.getItem('contactNumber')

    this.getSurveyQuestions()
    this.checkProgramBook()
  },
  methods: {
    getSurveyQuestions () {
      STORE.getQuestions(this.classId, 'program').then(result => {
        this.questionList = result['QUESTIONS']
        this.questionList.forEach(question => {
          question.ANSWER = []
        })
      })
    },
    checkProgramBook () {
      STORE.getProgramTimeTable(this.storeId, this.classId).then(result => {
        this.scheduleId = result['SCHEDULE_LIST'][0].PROGRAM_SCHEDULE_ID
      })
    },
    clickApplicationButton () {
      let BASIC_SURVEY_RESPONSE = []
      let over200Flag = false

      if (this.questionList) {
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
            'RESPONSE': typeof (question.ANSWER) === 'object' ? JSON.stringify(question.ANSWER) : question.ANSWER
          }
          BASIC_SURVEY_RESPONSE.push(answer)
        })
      }

      if (!over200Flag) {
        this.$store.state.constants.COUNSELING.BASIC_SURVEY_RESPONSE = BASIC_SURVEY_RESPONSE
        this.applyProgram(BASIC_SURVEY_RESPONSE)
      }
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
    },
    applyProgram (surveyResponse) {
      // 신청
      let info = {
        'PROGRAM_SCHEDULE_ID': parseInt(this.scheduleId),
        'USER_NAME': this.$cookies.get('MY_INFO').NAME,
        'USER_PHONE_NUMBER': this.contactNumber,
        'ATTENDEE_NUM': this.attendeeNum,
        'BASIC_SURVEY_RESPONSE': surveyResponse
      }
      if (this.bookId) {
        // 수정
        info['BOOK_ID'] = parseInt(this.bookId)
        STORE.modifyProgram(info).then(result => {
          this.bookId = result['BOOK_ID']
          this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
        })
      } else {
        // 신청
        info['STORE_ID'] = parseInt(this.storeId)
        STORE.applyProgram(info).then(result => {
          this.bookId = result['BOOK_ID']
          this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
