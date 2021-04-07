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
      lastNum: ''
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
    clickReadMap () {
      this.$modal.show(ModalReadMap, {}, {
        type: 'full'
      }, {})
    },
    next () {
      if (!this.lastNum) {
        this.alertRequiredNumber()
      } else {
        // 기초 설문
        sessionStorage.setItem('attendeeNum', this.attendeeNum)
        sessionStorage.setItem('contactNumber', this.firstNum + this.lastNum)
        this.$router.push('/sev/booking/program/survey?&classId=' + this.$route.query.classId)
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
