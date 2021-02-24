<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.survey')"></Header>
    <booking-survey></booking-survey>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingSurvey from '../../components/service/booking/BookingSurvey'

export default {
  name: 'page-booking-survey',
  components: {
    Header,
    BookingSurvey
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
