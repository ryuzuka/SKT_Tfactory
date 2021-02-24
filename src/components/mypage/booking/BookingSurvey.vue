<template src="../../../assets/html/service/booking/booking-survey.html"></template>

<script>
import BookingSurvey from '../../service/booking/BookingSurvey'

export default {
  name: 'BookingSurvey',
  mixins: [BookingSurvey],
  data () {
    return {
      isModify: true
    }
  },
  methods: {
    clickComplete () {
      this.$router.push('/my/booking/counseling/complete')
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
