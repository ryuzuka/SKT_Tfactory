<template src="../../../assets/html/mypage/booking/booking-list.html"></template>

<script>
import * as STORE from '../../../js/store.js'

/**
 * success: 예약성공 ORDERED 상담요청
 * cancel: 예약취소 CANCELED 취소
 * complete: 완료 COMPLETED 상담완료
 * end: 설문조사 등록 완료 SATISFACTION_SURVEYED 후기작성완료
 * not: 미방문 NO_SHOW 미방문
 * standby: 대기접수
 * apply: 예약 완료: 신청완료
 * 대기
 * 당첨
 * 미당첨
 */

let BOOKING_STATUS = {
  'ordered': 'success', // 예약 완료
  'operator_assigned': 'success', // 예약 완료
  'apply': 'apply', // 신청완료
  'canceled': 'cancel', // 취소
  'completed': 'complete', // 종료
  'end': 'complete', // 종료
  'counseling': 'counseling', // 상담중
  'no_show': 'not', // 미방문
  '대기': 'standby', // 대기
  '당첨': '당첨', // 당첨
  '미당첨': '미당첨', // 미당첨
  'canceled_by_operator': 'cancel' // 취소
}

export default {
  name: 'MyBookingList',
  data () {
    return {
      loading: null,
      isLoading: false,
      listData: [],
      lastIndex: 0
    }
  },
  methods: {
    clickInquiry () {
    },
    clickMore () {
      this.getBookingList()
    },
    getBookingList () {
      STORE.getMyBookingList(this.lastIndex).then(result => {
        result['BOOKING'].forEach((booking) => {
          booking.type = booking.TYPE
          let STATUS = booking['STATUS']
          booking.status = BOOKING_STATUS[STATUS.toString()]
          booking.date = this.$moment(booking.DATE).format('YYYY.MM.DD HH:mm')
          this.lastIndex = booking.BOOK_ID
        })
        this.listData = this.listData.concat(result['BOOKING'])
      })
    }
  },
  mounted () {
    if (!this.$cookies.get('USER_AUTH')) {
      localStorage.setItem('previous_url', '/my/booking/list')
      this.$router.push({name: 'Login'})
    } else {
      this.getBookingList()
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
