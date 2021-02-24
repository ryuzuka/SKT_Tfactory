<template src="../../../assets/html/service/booking/booking-complete.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'BookingComplete',
  props: {
    bookingType: String
  },
  data () {
    return {
      bookingInfo: {},
      modifyFlag: ''
    }
  },
  mounted () {
    if (this.$route.query.BOOK_ID) {
      STORE.getBookingInfo(this.$route.query.BOOK_ID).then(result => {
        result.BOOK_INFO.DATE = this.$moment(result.BOOK_INFO.DATE).format('YYYY.MM.DD HH:mm')
        this.bookingInfo = result.BOOK_INFO
      })
      this.surveyComplete = this.$store.getters.CONSTANTS.COUNSELING_COMPLETE
    }

    if (this.$route.query.PROGRAM_BOOK_ID) {
      STORE.getPrgramBookInfo(this.$route.query.PROGRAM_BOOK_ID).then(result => {
        result.PROGRAM_BOOK.DATE = this.$moment(result.PROGRAM_BOOK.DATE).format('YYYY.MM.DD HH:mm')
        this.bookingInfo = result.PROGRAM_BOOK
      })
    }

    if (this.$route.query.MODIFY_FLAG === 'true') {
      this.modifyFlag = true
    } else {
      this.modifyFlag = false
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
