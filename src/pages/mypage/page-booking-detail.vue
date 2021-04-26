<template>
  <div class="wrap">
    <Header v-if="applicationType === 'basic'" type="back" :title="$t('my.booking-list-detail')"></Header> <!-- 21.03.30 수정 : 예약 상세 내역 -->
    <Header v-else-if="applicationType === 'select'" type="back" :title="$t('my.application-list-detail')"></Header> <!-- 21.03.30 추가 : 신청 상세 내역 -->
    <MyBookingDetail :booking-type="bookingType"></MyBookingDetail>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyBookingDetail from '../../components/mypage/booking/BookingDetail'

export default {
  name: 'page-booking',
  components: {
    Header,
    MyBookingDetail
  },
  data () {
    return {
      bookingType: this.$route.params.type,
      applicationType: 'basic'
    }
  },
  mounted () {
    this.$parent.$on('change-application-type', e => {
      if (e.type === 'select') {
        this.applicationType = 'select'
      }
    })
  }
}
</script>
