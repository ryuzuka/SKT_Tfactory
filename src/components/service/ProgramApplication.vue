<template src="../../assets/html/service/program-application.html"></template>

<script>
import Consult from './Consult'
import ModalReadMap from './booking/ModalReadMap'
import UiSelect from '../../ui/UiSelect'

import * as STORE from '../../js/store.js'
// import * as TID from '../../js/tid.js'
// import * as USER from '../../js/user.js'

export default {
  name: 'BookingDate',
  mixins: [Consult],
  components: {
    UiSelect
  },
  data () {
    return {
      storeID: 0,
      storeImageUrl: '',
      contactNumber: '',
      programTimeList: [{text: '날짜/시간을 선택해주세요.', value: 'value0', selected: true}],
      storeInfo: {},
      programInfo: {}
    }
  },
  mounted () {
    if (this.$route.query.store_id) {
      this.storeID = this.$route.query.store_id
      this.setStoreInfo()
    }

    this.getProgramClass(this.$route.query.classId)
  },
  methods: {
    setStoreInfo () {
      STORE.getStoreInfo(this.storeID).then(result => {
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
    next (type, bookID) {
      let url = '/sev/booking/' + type
      if (type === 'program') {
        url += '/complete?PROGRAM_BOOK_ID=' + bookID
        this.$router.push(url)
      } else if (type === 'experience') {
        url += '/complete'
      } else if (type === 'counseling') {
        url += '/survey'
        this.$router.push(url)
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
