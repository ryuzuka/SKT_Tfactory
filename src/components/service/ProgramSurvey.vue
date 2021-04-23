<template src="../../assets/html/service/program-survey.html"></template>

<script>
import * as STORE from '../../js/store.js'
import _ from 'lodash'

export default {
  name: 'ProgramSurvey',
  data () {
    return {
      storeId: this.$route.query.store_id,
      classId: this.$route.query.classId,
      bookId: this.$route.query.bookId,
      type: this.$route.query.type,
      questionList: [],
      scheduleId: '',
      attendeeNum: 1,
      contactNumber: ''
    }
  },
  mounted () {
    if (this.type === 'select') {
      this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
      STORE.getProgramTimeTable(this.storeId, this.classId).then(result => {
        this.scheduleId = result['SCHEDULE_LIST'][0].PROGRAM_SCHEDULE_ID
      })
    } else if (this.type === 'basic') {
      this.scheduleId = sessionStorage.getItem('scheduleId')
    }
    this.contactNumber = sessionStorage.getItem('contactNumber')
    if (this.bookId) {
      // 수정
      this.getProgramBookInfo()
    } else {
      // 신청
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
    getProgramBookInfo () {
      STORE.getPrgramBookInfo(this.bookId).then(result => {
        this.programBookInfo = result['PROGRAM_BOOK']
        this.classId = this.programBookInfo['PROGRAM_CLASS_ID']

        this.contactNumber = sessionStorage.getItem('contactNumber')
        if (this.type === 'select') {
          this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
        }

        this.questionList = this.programBookInfo['BASIC_SURVEY']
        this.questionList.forEach(question => {
          if (question['QUESTION_TYPE'] === 'essay') {
            question.ANSWER = question.RESPONSE
          } else {
            if (question['QUESTION_TYPE'] === 'choice') {
              question.ANSWER = parseInt(question.RESPONSE)
            } else if (question['QUESTION_TYPE'] === 'multiple_choice') {
              question.ANSWER = JSON.parse(question.RESPONSE)
            }
          }
        })
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
      let isResponse = true
      _.forEach(surveyResponse, data => {
        if (!String(data.RESPONSE)) {
          isResponse = false
        }
      })
      if (!isResponse) {
        this.$modal.show('dialog', {
          title: '답변하지 않은 항목이 있습니다.',
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
          'BASIC_SURVEY_RESPONSE': surveyResponse
        }
        if (this.type === 'select') {
          info['ATTENDEE_NUM'] = this.attendeeNum
        }
        if (this.bookId) {
          // 수정
          info['BOOK_ID'] = parseInt(this.bookId)
          STORE.modifyProgram(info).then(result => {
            this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
          })
        } else {
          info['STORE_ID'] = parseInt(this.storeId)
          if (this.type === 'basic') {
            // 예약
            STORE.bookProgram(info).then(result => {
              this.$router.push('/sev/booking/program/complete?&BOOK_ID=' + result.BOOK_ID)
            }).catch(err => {
              if (err.response.data.RET_CODE === 18006) {
                this.alertAlreadyApply()
              } else {
                this.alretError()
              }
            })
          } else if (this.type === 'select') {
            // 응모
            STORE.applyProgram(info).then(result => {
              this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
            }).catch(err => {
              if (err.response.data.RET_CODE === 18006) {
                this.alertAlreadyApply()
              } else {
                this.alretError()
              }
            })
          }
        }
      }
    },
    alertAlreadyApply () {
      this.$modal.show('dialog', {
        title: `이미 신청하신 프로그램입니다.`,
        text: `신청 내용 수정은 [MENU > 예약/신청내역]<br>에서 가능합니다.`,
        buttons: [{
          title: '확인',
          handler: () => {
            this.$modal.hide('dialog')
          }
        }]
      })
    },
    alretError () {
      this.$modal.show('dialog', {
        title: `오류가 발생했습니다.<br>관리자에게 문의해주세요.`,
        buttons: [{
          title: '확인',
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
  @import 'src/assets/css/service';
</style>
