<template>
  <div class="wrap service">
    <Header v-if="bookingType === 'program'"         type="back" :title="$t('sev.booking-program')"></Header>
    <Header v-else-if="bookingType === 'experience'" type="back" :title="$t('sev.booking-experience')"></Header>
    <Header v-else                                   type="back" :title="$t('sev.booking-counseling')"></Header>
    <div class="contents">
      <ul class="tabs-page">
        <li class="active">
          <a v-if="bookingType === 'program'" href="#">{{ $t('sev.tab-program') }}</a>
          <a v-else-if="bookingType === 'experience'" href="#">{{ $t('sev.tab-experience') }}</a>
          <a v-else-if="bookingType === 'counseling'" href="#">{{ $t('sev.tab-counseling') }}</a>
        </li>
        <li>
          <a href="#">{{ $t('sev.near-shop') }}</a>
        </li>
      </ul>

      <p v-if="bookingType === 'program'" class="no-content">{{ $t('sev.program-list-none') }}</p>
      <p v-else-if="bookingType === 'experience'" class="no-content">{{ $t('sev.experience-list-none') }}</p>
      <p v-else-if="bookingType === 'counseling'" class="no-content">{{ $t('sev.counseling-list-none') }}</p>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Booking from '../../components/service/booking/Booking'

export default {
  name: 'page-booking-counseling',
  components: {
    Header,
    Booking
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

<style lang="scss">
  @import 'src/assets/css/service';
</style>
