<template src="../../../assets/html/service/booking/booking.html"></template>

<script>
import Header from '../../common/Header'
import Shop from '../../shop/Shop'
import ModalShop from './ModalShop'

import * as STORE from '../../../js/store.js'

export default {
  name: 'Booking',
  components: {
    Shop
  },
  mixins: [Header],
  props: {
    bookingType: {
      type: String
    }
  },
  data () {
    return {
      listData: [],
      isTabActive: [true, false],
      selectType: 'service',
      selectedService: 999,
      searchText: ''
    }
  },
  methods: {
    clickTab (index) {
      this.selectType = index === 0 ? 'service' : 'shop' // 서비스 선택 or 매장선택
      this.isTabActive = [false, false]
      this.isTabActive[index] = true
    },
    clickMore () {},
    clickList (item) {
      // counseling > 날짜/시간 선택 후 매장 선택
      // else > findMap 먼저 호출
      this.selectedService = item.COUNSELING_ID
      if (this.bookingType === 'counseling') {
        this.$router.push('/sev/booking/' + this.bookingType + '/date/' + this.selectType + '?selectedService=' + this.selectedService)
      } else {
        this.openFindMap(item.NAME)
      }
    },
    openFindMap (counselingType) {
      this.$getLocation().then(coordinates => {
        let location = {
          'lat': coordinates.lat,
          'long': coordinates.lng
        }
        this.$cookies.set('geolocation', JSON.stringify(location))
      })
      this.$modal.show(ModalShop, {
        bookingType: this.bookingType,
        selectType: this.selectType,
        isFilter: false,
        selectedService: this.selectedService,
        selectedCounseling: counselingType
      }, {
        type: 'full'
      }, {
      })
    }
  },
  created () {
    /* 상담 예약 */
    if (this.bookingType === 'counseling') {
      STORE.getCounselingList().then(result => {
        this.listData = result.COUNSELING_LIST
      })
    }
    /* TODO: 체험존 예약 */
    if (this.bookingType === 'experience') {
      let temp = {
        'NAME': '체험존',
        'DESCRIPTION': '#TBD #TBD #TBD',
        'COUNSELING_ID': 99999
      }
      this.listData = [temp]
    }
    /* TODO: 프로그램 예약 */
    if (this.bookingType === 'program') {
      let temp = {
        'NAME': '프로그램',
        'DESCRIPTION': '#TBD #TBD #TBD',
        'COUNSELING_ID': 99999
      }
      this.listData = [temp]
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/service';
@import 'src/assets/css/shop';  // 04.09 css 추가
</style>
