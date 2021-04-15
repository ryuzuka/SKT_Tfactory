<template src="../../../assets/html/mypage/booking/booking-modify.html"></template>

<script>
import BookingDate from '../../service/booking/BookingDate'
import BookingInfo from '../../service/booking/BookingInfo'
import * as STORE from '../../../js/store.js'

export default {
  name: 'MyBookingModify',
  mixins: [BookingDate, BookingInfo],
  data () {
    return {
      storeInfo: {},
      bookInfo: {},
      bookingModify: true
    }
  },
  mounted () {
    if (this.$route.query.store_id) {
      this.storeID = this.$route.query.store_id
    }

    if (this.$route.query.book_id && this.$props.bookingType === 'program') {
      STORE.getPrgramBookInfo(this.$route.query.book_id).then(result => {
        this.bookInfo = result.PROGRAM_BOOK
        this.modifyScheduleId = this.bookInfo.PROGRAM_SCHEDULE_ID
        // this.selectedService = this.bookInfo.PROGRAM_ID
        this.getProgramClass(this.bookInfo.PROGRAM_CLASS_ID)
        this.contactNumber = this.bookInfo['USER_PHONE_NUMBER'].replace(/010/g, '')
      })
    }
    this.setUserInfo()
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/service';
</style>
