<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.booking-date')"></Header>
    <booking-date
      :booking-type="bookingType"
      :select-type="selectType"
      :selected-service="selectedService"
    ></booking-date>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingDate from '../../components/service/booking/BookingDate'

export default {
  name: 'page-booking',
  components: {
    Header,
    BookingDate
  },
  data () {
    return {
      bookingType: this.$route.params.type,
      selectType: this.$route.params.selectType,
      selectedService: this.$route.params.selectedService
    }
  },
  created () {
  }
}
</script>
