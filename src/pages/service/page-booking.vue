<template>
  <div class="wrap service">
    <Header type="back" :title="pageTitle"></Header>
    <!--<Gnb></Gnb>--> <!-- 08.21 삭제 -->
    <booking :booking-type="bookingType"></booking>
    <bottom></bottom> <!-- 04.09 bottom 추가 -->

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
// import Gnb from '../../components/common/Gnb'  // 08.21 삭제
import Booking from '../../components/service/booking/Booking'
import Bottom from '../../components/common/Bottom' // 04.09 bottom 추가

export default {
  name: 'page-booking-counseling',
  components: {
    Header,
    // Gnb,  // 08.21 삭제
    Booking,
    Bottom
  },
  computed: {
    pageTitle () {
      if (this.bookingType === 'program') {
        return this.$t('sev.booking-program')
      } else if (this.bookingType === 'experience') {
        return this.$t('sev.booking-experience')
      } else if (this.bookingType === 'counseling') {
        return this.$t('sev.booking-counseling')
      }
    }
  },
  data () {
    return {
      bookingType: this.$route.params.type
    }
  },
  created () {
  }
}
</script>
