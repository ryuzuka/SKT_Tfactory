<template>
  <div class="wrap">
    <Header :title="$t('sev.survey-complete')"></Header>
    <booking-survey-complete></booking-survey-complete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingSurveyComplete from '../../components/service/booking/BookingSurveyComplete'

export default {
  name: 'page-booking-survey-complete',
  components: {
    Header,
    BookingSurveyComplete
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
