<template>
  <div class="wrap">
    <Header type="back" title="프로그램 신청"></Header>
    <booking-application></booking-application>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingApplication from '../../components/service/booking/BookingApplication'

export default {
  name: 'page-program-application',
  components: {
    Header,
    BookingApplication
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
