<template src="../../../assets/html/mypage/application/application-modify.html"></template>

<script>
import Consult from '../../service/Consult'
import ModalReadMap from '../../service/booking/ModalReadMap'
import UiSelect from '../../../ui/UiSelect'

import * as STORE from '../../../js/store.js'

export default {
  name: 'ApplicationModify',
  mixins: [Consult],
  components: {
    UiSelect
  },
  data () {
    return {
      storeId: '',
      bookId: this.$route.query.bookId,
      classId: '',
      storeImageUrl: '',
      storeInfo: {},
      programInfo: {},
      programBookInfo: {},
      attendeeNum: 1,
      firstNum: '010',
      lastNum: '',
      contactNumber: '',
      scheduleId: ''
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })

    this.getProgramBookInfo()
  },
  watch: {
    firstNum (firstNum) {
      this.contactNumber = this.mdnFilter(firstNum + this.lastNum)
    },
    lastNum (lastNum) {
      this.contactNumber = this.mdnFilter(this.firstNum + lastNum)
    }
  },
  methods: {
    getProgramBookInfo () {
      STORE.getPrgramBookInfo(this.bookId).then(result => {
        this.programBookInfo = result['PROGRAM_BOOK']
        this.classId = this.programBookInfo['PROGRAM_CLASS_ID']
        this.attendeeNum = this.programBookInfo['ATTENDEE_NUM']
        let number = this.programBookInfo['USER_PHONE_NUMBER']
        this.firstNum = number.substr(0, 3)
        this.lastNum = number.substring(3)

        this.getProgramClass()
      })
    },
    getProgramClass () {
      STORE.getProgramClass(this.classId).then(result => {
        this.programInfo = result['PROGRAM_CLASS']

        this.storeId = this.programInfo['STORE_ID']
        this.questionList = this.programInfo['SURVEY_QUESTIONS']
        this.questionList.forEach(question => {
          question.ANSWER = []
        })

        this.setStoreInfo()
        this.checkProgramBook()
      })
    },
    setStoreInfo () {
      STORE.getStoreInfo(this.storeId).then(result => {
        this.storeInfo = result['STORE']
        if (this.storeInfo.IMAGES) {
          this.storeImageUrl = 'url(' + JSON.parse(this.storeInfo.IMAGES)[0] + ')'
        } else {
          this.storeImageUrl = 'url(' + require(`@/assets/images/dummy/@img_shop.jpg`) + ')'
        }
      })
    },
    checkProgramBook () {
      STORE.getProgramTimeTable(this.storeId, this.classId).then(result => {
        this.scheduleId = result['SCHEDULE_LIST'][0].PROGRAM_SCHEDULE_ID
      })
    },
    alertRequiredNumber () {
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-contact-number'),
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
    clickReadMap () {
      this.$modal.show(ModalReadMap, {}, {
        type: 'full'
      }, {})
    },
    mdnFilter (data) {
      let mdn = data.replace(/[^0-9]/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3').replace('--', '-')
      return mdn
    },
    next (type) {
      if (this.lastNum.length < 8) {
        this.alertRequiredNumber()
        return
      }

      if (type === 'survey') {
        // 기초 설문
        sessionStorage.setItem('attendeeNum', this.attendeeNum)
        sessionStorage.setItem('contactNumber', this.contactNumber)
        this.$router.push('/sev/applicationSurvey?classId=' + this.classId)
      } else {
        // 신청
        let applyInfo = {
          'BOOK_ID': this.bookId,
          'PROGRAM_SCHEDULE_ID': this.scheduleId,
          'USER_NAME': this.programBookInfo['USER_NAME'],
          'ATTENDEE_NUM': this.attendeeNum,
          'USER_PHONE_NUMBER': this.contactNumber
        }
        STORE.modifyProgram(applyInfo).then(result => {
          this.$router.push('/sev/program/applicationComplete?&bookId=' + result.BOOK_ID)
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
