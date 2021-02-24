<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.survey')"></Header>
    <booking-survey></booking-survey>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import BookingSurvey from '../../components/mypage/booking/BookingSurvey'

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
