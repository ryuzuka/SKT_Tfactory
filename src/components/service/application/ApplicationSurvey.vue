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

    if (!this.contactNumber) {
      this.$router.push('/sev/application?store_id=' + this.storeId + '&classId=' + this.classId)
      return
    }

    this.checkProgramBook()
    if (this.bookId) {
      this.getProgramBookInfo()
    } else {
      this.getSurveyQuestions()
    }
  },
  methods: {
    checkProgramBook () {
      STORE.getProgramTimeTable(this.storeId, this.classId).then(result => {
        this.scheduleId = result['SCHEDULE_LIST'][0].PROGRAM_SCHEDULE_ID
      })
    },
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

        let number = this.programBookInfo['USER_PHONE_NUMBER']
        this.firstNum = number.substr(0, 3)
        this.lastNum = number.substring(3)
        this.attendeeNum = this.programBookInfo['ATTENDEE_NUM']

        if (this.bookId) {
          this.attendeeNum = parseInt(sessionStorage.getItem('attendeeNum'))
          this.contactNumber = sessionStorage.getItem('contactNumber')
        }

        this.questionList = this.programBookInfo['BASIC_SURVEY']
        this.questionList.forEach(question => {
          if (question.QUESTION_TYPE === 'essay') {
            question.ANSWER = question.RESPONSE
          } else {
            if (question.QUESTION_TYPE === 'choice') {
              question.ANSWER = parseInt(question.RESPONSE)
            } else if (question.QUESTION_TYPE === 'multiple_choice') {
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
        let bookInfo = {
          'PROGRAM_SCHEDULE_ID': parseInt(this.scheduleId),
          'USER_NAME': this.$cookies.get('MY_INFO').NAME,
          'USER_PHONE_NUMBER': this.contactNumber,
          'ATTENDEE_NUM': this.attendeeNum,
          'BASIC_SURVEY_RESPONSE': surveyResponse
        }
        if (this.bookId) {
          // 수정
          bookInfo['BOOK_ID'] = parseInt(this.bookId)
          STORE.modifyProgram(bookInfo).then(result => {
            this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
          }).catch(() => {
            this.alertError()
          })
        } else {
          // 신청
          bookInfo['STORE_ID'] = parseInt(this.storeId)
          STORE.applyProgram(bookInfo).then(result => {
            this.$router.push('/sev/applicationComplete?&bookId=' + result.BOOK_ID)
          }).catch(err => {
            if (err.response.data.RET_CODE === 18006) {
              this.alertAlreadyApply()
            } else {
              this.alertError()
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
    alertError () {
      this.$modal.show('dialog', {
        title: `오류가 발생했습니다.<br>문의 070-7470-0001`,
        buttons: [{
          title: '확인',
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'MyBookingList'})
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
