<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.booking-info')"></Header>
    <booking-info :booking-type="bookingType" :is-login="isLogin"></booking-info>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingInfo from '../../components/service/booking/BookingInfo'

export default {
  name: 'page-booking',
  components: {
    Header,
    BookingInfo
  },
  data () {
    return {
      bookingType: this.$route.params.type,
      isLogin: false
    }
  },
  created () {
    // test
    this.isLogin = false
  }
}
</script>
