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
      this.storeId = this.$route.query.store_id
    }

    if (this.$route.query.book_id && this.$props.bookingType === 'program') {
      this.setUserInfo()
      STORE.getPrgramBookInfo(this.$route.query.book_id).then(result => {
        this.bookInfo = result.PROGRAM_BOOK
        this.classId = this.bookInfo.PROGRAM_CLASS_ID
        this.modifyScheduleId = this.bookInfo.PROGRAM_SCHEDULE_ID
        this.scheduleId = this.bookInfo.PROGRAM_SCHEDULE_ID
        this.contactNumber = this.bookInfo['USER_PHONE_NUMBER'].replace(/010/g, '')

        this.getProgramClass(this.classId)
      })
    }
    this.$on('set-program-time-table', () => {
      this.selectedDate = this.$moment(this.bookInfo.DATE).format('YYYY.MM.DD')
      this.selectedProgram = this.scheduleId
      this.changeProgramDate(this.selectedDate)
    })
  },
  methods: {}
}
</script>

<style lang="scss">
@import 'src/assets/css/service';
</style>
