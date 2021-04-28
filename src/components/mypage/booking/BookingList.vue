<template src="../../../assets/html/mypage/booking/booking-list.html"></template>

<script>
import * as STORE from '../../../js/store.js'

/**
 * apply: '신청 완료',
 * ordered: '예약 완료',
 * canceled: '취소',
 * completed, end: '종료',
 * satisfaction_surveyed: '만족도 조사 완료',
 * canceled_by_operator: '취소(관리자)',
 * operator_assigned: '상담원 배정',
 * counseling: '상담중',
 * completed: '참석 완료',
 * no_show: '노쇼',
 * apply: '응모',
 * selected: '당첨',
 * not_selected: '미당첨'
 */

let BOOKING_STATUS = {
  'apply': 'apply', // 신청완료
  'ordered': 'success', // 예약 완료
  'operator_assigned': 'success', // 예약 완료 (상담원 배정 완료)
  'canceled': 'cancel', // 취소
  'canceled_by_operator': 'cancel', // 취소
  'completed': 'complete', // 종료
  'satisfaction_surveyed': 'complete', // 종료
  'end': 'complete', // 종료
  'counseling': 'counseling', // 상담중
  'no_show': 'not', // 미방문
  'standby': 'standby', // 대기
  'selected': 'selected', // 당첨
  'not_selected': 'not_selected' // 미당첨
}

export default {
  name: 'MyBookingList',
  data () {
    return {
      loading: null,
      isLoading: false,
      listData: [],
      lastIndex: 0,
      isMore: true
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
        if (result['BOOKING'].length < 10) {
          this.isMore = false
        }
      })
    },
    clickSatisfaction (bookId) {
      this.$router.push('/my/satisfaction?bookId=' + bookId)
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
