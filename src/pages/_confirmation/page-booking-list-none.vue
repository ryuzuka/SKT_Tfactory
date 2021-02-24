<template>
  <!--=================================================   확인용   =================================================-->
  <div class="wrap">
    <Header type="back" :title="$t('my.booking-service-list')"></Header>
    <div class="contents my-booking" ref="contents">
      <p class="no-content">{{ $t('my.booking-list-none') }}</p>
    </div>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyBookingList from '../../components/mypage/booking/BookingList'

export default {
  name: 'page-my-booking-list-none',
  components: {
    Header,
    MyBookingList
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
