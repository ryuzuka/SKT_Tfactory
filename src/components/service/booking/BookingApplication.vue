<template src="../../../assets/html/service/booking/booking-application.html"></template>

<script>
import Consult from '../Consult'
import ModalReadMap from './ModalReadMap'
import UiSelect from '../../../ui/UiSelect'

import * as STORE from '../../../js/store.js'

export default {
  name: 'BookingApplication',
  mixins: [Consult],
  components: {
    UiSelect
  },
  data () {
    return {
      storeId: process.env.FLAGSHIP_STORE_ID,
      classId: this.$route.query.classId,
      userId: '',
      storeInfo: {},
      storeImageUrl: '',
      programInfo: {},
      attendeeNum: 1,
      firstNum: '010',
      lastNum: '',
      testData: {
        'RET_CODE': 0,
        'PROGRAM_CLASS': {
          'PROGRAM_CLASS_ID': 33,
          'STORE_ID': 23241,
          'PROGRAM_ID': 21,
          'TYPE': 'special',
          'PROGRAM_NAME': 'test02',
          'PROGRAM_CLASS_NAME': '콘서트(수정2)',
          'PROGRAM_CLASS_CATEGORY': 'class category',
          'PROGRAM_CLASS_THUMBNAIL_IMAGE_URL': 'https://dev-tshop-public-image.s3.ap-northeast-2.amazonaws.com/gYRDcy4aYLl0_1615781849932',
          'PROGRAM_CLASS_THUMBNAIL_TILE': 'thumbnail title',
          'PROGRAM_CLASS_THUMBNAIL_SUBTITLE': 'thumbnail subtitle',
          'PROGRAM_CLASS_SCHEDULE_GUIDE': 'schedule intro',
          'ORDER': 1616043137447,
          'PROGRAM_CLASS_TAGS': null,
          'PROGRAM_CLASS_LINK_URL': 'https://m.tfactory.co.kr/main/program',
          'PROGRAM_CLASS_BOOKING_YN': 1,
          'PROGRAM_CLASS_CAN_BE_USED_TIME': 1,
          'PROGRAM_TUTOR_ID': 18,
          'BOOKING_TYPE': 'select',
          'PROGRAM_TUTOR_NAME': 'NOBODY',
          'PROGRAM_TUTOR_IMAGE_URL': null,
          'PROGRAM_TUTOR_DESCRIPTION': '강사 없음',
          'SURVEY_YN': true,
          'SURVEY_QUESTIONS': [
            {
              'BASIC_SURVEY_QUESTION_ID': 1052,
              'QUESTION_TYPE': 'choice',
              'QUESTION': '스누피의 영원한 친구이신가요?',
              'CHOICE': [
                '네',
                '아니요',
                '몰라요'
              ]
            },
            {
              'BASIC_SURVEY_QUESTION_ID': 1053,
              'QUESTION_TYPE': 'essay',
              'QUESTION': '스누피 최애 캐릭터는?',
              'CHOICE': []
            }
          ],
          'APPLY_PROGRESS': 'OVER'
        }
      }
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
        this.programInfo = this.testData.PROGRAM_CLASS
        console.log(this.programInfo.SURVEY_QUESTIONS)
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
    apply () {
      //
    },
    next (type) {
      sessionStorage.setItem('attendeeNum', this.attendeeNum)
      sessionStorage.setItem('contactNumber', this.firstNum + this.lastNum)

      if (!this.lastNum) {
        this.alertRequiredNumber()
      } else {
        if (type === 'survey') {
          // 기초 설문
          sessionStorage.setItem('surveyQuestions', JSON.stringify(this.programInfo.SURVEY_QUESTIONS))
          this.$router.push('/sev/booking/program/applicationSurvey?&classId=' + this.$route.query.classId)
        } else if (type === 'apply') {
          // 신청
          this.apply()
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
