<template>
  <div class="wrap">
    <Header :title="$t('my.modify-complete')"></Header> <!-- 06.05 수정: type 삭제 -->
    <my-booking-complete :is-login="isLogin" :booking-type="bookingType"></my-booking-complete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyBookingComplete from '../../components/mypage/booking/BookingComplete'

export default {
  name: 'page-complete',
  components: {
    Header,
    MyBookingComplete
  },
  data () {
    return {
      isLogin: false,
      bookingType: this.$route.params.type
    }
  },
  created () {
  }
}
</script>
