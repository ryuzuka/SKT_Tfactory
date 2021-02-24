<template>
  <div class="wrap">
    <Header type="back" :title="$t('my.booking-inquiry')"></Header>
    <MyBookingInquiry></MyBookingInquiry>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyBookingInquiry from '../../components/mypage/booking/BookingInquiry'

export default {
  name: 'page-inquiry',
  components: {
    Header,
    MyBookingInquiry
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
