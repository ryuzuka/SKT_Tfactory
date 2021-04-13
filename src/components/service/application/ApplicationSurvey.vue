<template src="../../../assets/html/service/application/application-survey.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import _ from 'lodash'

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

    this.checkProgramBook()
    if (this.bookId) {
      this.getProgramBookInfo()
    } else {
      this.getSurveyQuestions()
    }
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
    getProgramBookInfo () {
      STORE.getPrgramBookInfo(this.bookId).then(result => {
        this.programBookInfo = result['PROGRAM_BOOK']
        this.classId = this.programBookInfo['PROGRAM_CLASS_ID']

        let number = this.programBookInfo['USER_PHONE_NUMBER']
        this.firstNum = number.substr(0, 3)
        this.lastNum = number.substring(3)
        this.attendeeNum = this.programBookInfo['ATTENDEE_NUM']

        this.questionList = this.programBookInfo['BASIC_SURVEY']
        this.questionList.forEach(question => {
          if (question.QUESTION_TYPE === 'essay') {
            question.ANSWER = question.RESPONSE
          } else {
            question.ANSWER = parseInt(question.RESPONSE)
          }
        })

        this.checkProgramBook()
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
    applyProgram (surveyResponse) {
      let response = ''
      _.forEach(surveyResponse, data => {
        response = data.RESPONSE
      })
      if (response === '') {
        this.$modal.show('dialog', {
          title: '기초설문 응답 내용이 없습니다.',
          buttons: [{
            title: this.$t('comm.yes'),
            handler: () => {
              this.$modal.hide('dialog')
            }
          }]
        })
      } else {
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
            this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
          })
        } else {
          // 신청
          info['STORE_ID'] = parseInt(this.storeId)
          STORE.applyProgram(info).then(result => {
            this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
