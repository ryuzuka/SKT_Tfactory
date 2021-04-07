<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.survey')"></Header>
    <Booking-application-survey></Booking-application-survey>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingApplicationSurvey from '../../components/service/booking/BookingApplicationSurvey'

export default {
  name: 'page-booking-application-survey',
  components: {
    Header,
    BookingApplicationSurvey
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
