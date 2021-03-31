<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.application-booking-list')"></Header>
    <MyBookingList></MyBookingList>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyBookingList from '../../components/mypage/booking/BookingList'

export default {
  name: 'page-booking',
  components: {
    Header,
    MyBookingList
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
