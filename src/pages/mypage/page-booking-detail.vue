<template>
  <div class="wrap">
    <Header type="back" :title="$t('my.booking-list-detail')"></Header>
    <MyBookingDetail :booking-type="bookingType"></MyBookingDetail>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyBookingDetail from '../../components/mypage/booking/BookingDetail'

export default {
  name: 'page-booking',
  components: {
    Header,
    MyBookingDetail
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
