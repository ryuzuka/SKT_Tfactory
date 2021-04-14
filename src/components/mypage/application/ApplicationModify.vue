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
      storeId: this.$route.query.store_id,
      bookId: this.$route.query.bookId,
      classId: '',
      storeImageUrl: '',
      storeInfo: {},
      programInfo: {},
      programBookInfo: {},
      firstNum: '010',
      lastNum: '',
      contactNumber: '',
      scheduleId: '',
      attendeeNum: 1,
      attendeeList: [{text: '1', value: 1}]
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })

    this.setStoreInfo()
    this.getProgramBookInfo()
  },
  watch: {
    firstNum (firstNum) {
      this.contactNumber = firstNum + this.lastNum
    },
    lastNum (lastNum) {
      this.contactNumber = this.firstNum + lastNum
    }
  },
  methods: {
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
    getProgramBookInfo () {
      STORE.getPrgramBookInfo(this.bookId).then(result => {
        this.programBookInfo = result['PROGRAM_BOOK']
        this.classId = this.programBookInfo['PROGRAM_CLASS_ID']

        let number = this.programBookInfo['USER_PHONE_NUMBER']
        this.firstNum = number.substr(0, 3)
        this.lastNum = number.substring(3)

        this.getProgramClass()
        this.checkProgramBook()
      })
    },
    getProgramClass () {
      STORE.getProgramClass(this.classId).then(result => {
        this.programInfo = result['PROGRAM_CLASS']
      })
    },
    checkProgramBook () {
      STORE.getProgramTimeTable(this.storeId, this.classId).then(result => {
        result = result['SCHEDULE_LIST'][0]
        this.scheduleId = result.PROGRAM_SCHEDULE_ID
        for (let i = 0; i < result['MAX_ATTENDEE_PER_APPLY']; ++i) {
          this.attendeeList[i] = {text: String(i + 1), value: i + 1}
        }
      })
      this.$nextTick(() => {
        this.attendeeNum = this.programBookInfo['ATTENDEE_NUM']
      })
    },
    alertRequiredAttendee () {
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: '참여인원을 선택해 주세요.',
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
    next (type) {
      if (!this.attendeeNum) {
        this.alertRequiredAttendee()
        return
      }
      if (this.lastNum.length < 7) {
        this.alertRequiredNumber()
        return
      }

      if (type === 'survey') {
        // 기초 설문
        sessionStorage.setItem('attendeeNum', this.attendeeNum)
        sessionStorage.setItem('contactNumber', this.contactNumber)
        this.$router.push('/sev/applicationSurvey?store_id=' + this.storeId + '&classId=' + this.classId + '&bookId=' + this.bookId)
      } else if (type === 'modify') {
        // 수정
        let applyInfo = {
          'BOOK_ID': parseInt(this.bookId),
          'PROGRAM_SCHEDULE_ID': parseInt(this.scheduleId),
          'USER_NAME': this.programBookInfo['USER_NAME'],
          'ATTENDEE_NUM': this.attendeeNum,
          'USER_PHONE_NUMBER': this.contactNumber,
          'BASIC_SURVEY_RESPONSE': []
        }
        STORE.modifyProgram(applyInfo).then(result => {
          this.$router.push('/sev/applicationComplete?store_id=' + this.storeId + ' &bookId=' + result.BOOK_ID)
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
