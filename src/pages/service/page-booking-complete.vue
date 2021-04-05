<template>
  <div class="wrap">
    <Header :title="$t('sev.booking-complete')"></Header> <!-- 06.05 수정: type 삭제 -->
    <booking-complete :booking-type="bookingType"></booking-complete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingComplete from '../../components/service/booking/BookingComplete'

export default {
  name: 'page-booking-complete',
  components: {
    Header,
    BookingComplete
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
