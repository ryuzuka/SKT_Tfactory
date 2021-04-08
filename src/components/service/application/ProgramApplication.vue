<template src="../../../assets/html/service/application/program-application.html"></template>

<script>
import Consult from '../Consult'
import ModalReadMap from '../booking/ModalReadMap'
import UiSelect from '../../../ui/UiSelect'

import * as STORE from '../../../js/store.js'

export default {
  name: 'ProgramApplication',
  mixins: [Consult],
  components: {
    UiSelect
  },
  data () {
    return {
      storeId: this.$route.query.storeId,
      classId: this.$route.query.classId,
      userId: '',
      storeInfo: {},
      storeImageUrl: '',
      programInfo: {},
      attendeeNum: 1,
      firstNum: '010',
      lastNum: '',
      contactNumber: ''
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })

    this.setStoreInfo(this.storeId)
    this.getProgramClass(this.classId)
    //
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
    setStoreInfo (storeId) {
      STORE.getStoreInfo(storeId).then(result => {
        this.storeInfo = result.STORE
        if (this.storeInfo.IMAGES) {
          this.storeImageUrl = 'url(' + JSON.parse(this.storeInfo.IMAGES)[0] + ')'
        } else {
          this.storeImageUrl = 'url(' + require('@/assets/images/dummy/@img_shop.jpg') + ')'
        }
      })
    },
    getProgramClass (classId) {
      STORE.getProgramClass(classId).then(result => {
        this.programInfo = result.PROGRAM_CLASS
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
      sessionStorage.setItem('attendeeNum', this.attendeeNum)
      sessionStorage.setItem('contactNumber', this.firstNum + this.lastNum)
      //
      if (!this.lastNum) {
        this.alertRequiredNumber()
      } else {
        if (type === 'apply') {
          /** ************************ TODO ************************ **/
          // 신청
          // let applyInfo = {
          //   'PROGRAM_SCHEDULE_ID': 80,
          //   'STORE_ID': parseInt(this.storeId),
          //   'USER_NAME': this.$cookies.get('MY_INFO').NAME,
          //   'USER_PHONE_NUMBER': this.contactNumber
          // }
          // STORE.applyProgram(applyInfo).then(result => {
          //   console.log(result)
          // })
          this.$router.push('/sev/program/applicationComplete?&classId=' + this.$route.query.classId)
          //
        } else if (type === 'survey') {
          // 기초 설문
          sessionStorage.setItem('surveyQuestions', JSON.stringify(this.programInfo.SURVEY_QUESTIONS))
          this.$router.push('/sev/program/applicationSurvey?&classId=' + this.classId)
        }
      }
    }
  },
  filters: {
    mdnFilter (data) {
      let mdn = data.replace(/[^0-9]/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3').replace('--', '-')
      return mdn
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
