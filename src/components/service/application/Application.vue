<template src="../../../assets/html/service/application/application.html"></template>

<script>
import Consult from '../Consult'
import ModalReadMap from '../booking/ModalReadMap'
import UiSelect from '../../../ui/UiSelect'

import * as STORE from '../../../js/store.js'

export default {
  name: 'Application',
  mixins: [Consult],
  components: {
    UiSelect
  },
  data () {
    return {
      storeId: this.$route.query.store_id,
      classId: this.$route.query.classId,
      storeInfo: {},
      storeImageUrl: '',
      programInfo: {},
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
    this.getProgramClass()
    this.checkProgramBook()
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
        this.$router.push('/sev/applicationSurvey?store_id=' + this.storeId + '&classId=' + this.classId)
      } else if (type === 'apply') {
        // 신청
        let applyInfo = {
          'STORE_ID': parseInt(this.storeId),
          'PROGRAM_SCHEDULE_ID': parseInt(this.scheduleId),
          'USER_NAME': this.$cookies.get('MY_INFO').NAME,
          'USER_PHONE_NUMBER': this.contactNumber,
          'ATTENDEE_NUM': this.attendeeNum,
          'BASIC_SURVEY_RESPONSE': []
        }
        STORE.applyProgram(applyInfo).then(result => {
          this.$router.push('/sev/applicationComplete?store_id=' + this.storeId + '&bookId=' + result.BOOK_ID)
        }).catch(err => {
          if (err.response.data.RET_CODE === 18006) {
            this.alertAlreadyApply()
          } else {
            this.alretError()
          }
        })
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
            this.$router.push(this.programInfo['PROGRAM_CLASS_LINK_URL'] + '?classId=' + this.classId)
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
