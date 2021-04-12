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

    this.setStoreInfo()
    this.getProgramClass()
    this.checkProgramBook()
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
      if (this.lastNum.length < 7) {
        this.alertRequiredNumber()
        return
      }

      if (type === 'survey') {
        // 기초 설문
        sessionStorage.setItem('attendeeNum', this.attendeeNum)
        sessionStorage.setItem('contactNumber', this.contactNumber)
        this.$router.push('/sev/applicationSurvey?classId=' + this.classId)
      } else if (type === 'apply') {
        // 신청
        let applyInfo = {
          'STORE_ID': this.storeId,
          'USER_NAME': this.$cookies.get('MY_INFO').NAME,
          'PROGRAM_SCHEDULE_ID': this.scheduleId,
          'ATTENDEE_NUM': this.attendeeNum,
          'USER_PHONE_NUMBER': this.contactNumber
        }
        STORE.applyProgram(applyInfo).then(result => {
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
