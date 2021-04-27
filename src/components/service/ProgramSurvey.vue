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
      programType: this.$route.query.type,
      questionList: [],
      scheduleId: '',
      attendeeNum: '',
      contactNumber: ''
    }
  },
  mounted () {
    this.contactNumber = sessionStorage.getItem('contactNumber')
    if (!this.contactNumber) {
      this.$router.push('/sev/booking/program/date/shop?store_id=' + this.storeId + '&classId=' + this.classId)
      return
    }

    if (this.programType === 'select') {
      this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
      STORE.getProgramTimeTable(this.storeId, this.classId).then(result => {
        this.scheduleId = result['SCHEDULE_LIST'][0].PROGRAM_SCHEDULE_ID
      })
    } else if (this.programType === 'basic') {
      this.scheduleId = sessionStorage.getItem('scheduleId')
    }
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
        if (this.programType === 'select') {
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

        return
      }

      let bookInfo = {
        'PROGRAM_SCHEDULE_ID': parseInt(this.scheduleId),
        'USER_NAME': this.$cookies.get('MY_INFO').NAME,
        'USER_PHONE_NUMBER': this.contactNumber,
        'BASIC_SURVEY_RESPONSE': surveyResponse
      }

      if (this.bookId) {
        /** 수정 **/
        bookInfo['BOOK_ID'] = parseInt(this.bookId)
        if (this.programType === 'select') {
          bookInfo['ATTENDEE_NUM'] = this.attendeeNum
        }
        STORE.modifyProgram(bookInfo).then(result => {
          this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
        }).catch(() => {
          this.alretError()
        })
      } else {
        /** 신청 **/
        bookInfo['STORE_ID'] = parseInt(this.storeId)
        if (this.programType === 'basic') {
          // 예약
          STORE.bookProgram(bookInfo).then(result => {
            this.$router.push('/sev/booking/program/complete?&BOOK_ID=' + result.BOOK_ID)
          }).catch(() => {
            this.alretError()
          })
        } else if (this.programType === 'select') {
          // 응모
          bookInfo['ATTENDEE_NUM'] = this.attendeeNum
          STORE.applyProgram(bookInfo).then(result => {
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
        title: `오류가 발생했습니다.<br>문의 070-7470-0001`,
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
