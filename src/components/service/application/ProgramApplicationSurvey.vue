<template src="../../../assets/html/service/application/program-application-survey.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'ProgramApplicationSurvey',
  data () {
    return {
      storeId: '',
      classId: this.$route.query.classId,
      questionList: [],
      scheduleId: '',
      attendeeNum: 1,
      contactNumber: ''
    }
  },
  mounted () {
    this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
    this.contactNumber = sessionStorage.getItem('contactNumber')

    this.getProgramClass()
  },
  methods: {
    getProgramClass () {
      STORE.getProgramClass(this.classId).then(result => {
        result = result['PROGRAM_CLASS']

        this.storeId = result['STORE_ID']
        this.questionList = result['SURVEY_QUESTIONS']
        this.questionList.forEach(question => {
          question.ANSWER = []
        })

        this.checkProgramBook()
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
      let applyInfo = {
        'STORE_ID': this.storeId,
        'USER_NAME': this.$cookies.get('MY_INFO').NAME,
        'PROGRAM_SCHEDULE_ID': this.scheduleId,
        'ATTENDEE_NUM': this.attendeeNum,
        'USER_PHONE_NUMBER': this.contactNumber,
        'BASIC_SURVEY_RESPONSE': surveyResponse
      }
      STORE.applyProgram(applyInfo).then(result => {
        this.$router.push('/sev/program/applicationComplete?&bookId=' + result.BOOK_ID)
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
