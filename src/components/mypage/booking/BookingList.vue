<template src="../../../assets/html/mypage/booking/booking-list.html"></template>

<script>
/**
   * success: 예약성공 ORDERED 상담요청
   * cancel: 예약취소 CANCELED 취소
   * complete: 완료 COMPLETED 상담완료
   * end: 설문조사 등록 완료 SATISFACTION_SURVEYED 후기작성완료
   * not: 미방문 NO_SHOW 미방문
   * standby: 대기접수
   */
import * as STORE from '../../../js/store.js'
import * as TID from '../../../js/tid.js'
import * as USER from '../../../js/user.js'

let BOOKING_STATUS = {
  'ordered': 'success',
  'operator_assigned': 'success',
  'counseling': 'counseling',
  'canceled': 'cancel',
  'completed': 'complete',
  'satisfaction_surveyed': 'end',
  'no_show': 'not'
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
        result.BOOKING.forEach((booking) => {
          booking.type = booking.TYPE
          let STATUS = booking.STATUS
          booking.status = BOOKING_STATUS[STATUS.toString()]
          booking.date = this.$moment(booking.DATE).format('YYYY.MM.DD HH:mm')
          this.lastIndex = booking.BOOK_ID
        })
        this.listData = this.listData.concat(result.BOOKING)
      })
    }
  },
  mounted () {
    /** ******* T world 예약 관련 ******* */
    /** ************** */
    if (this.$route.query.sso_login_id) {
      // localStorage.setItem('SERVICE_NAME', this.$route.query.service_name)
      sessionStorage.setItem('SVC_NUM', this.$route.query.svc_num)
      let callback = window.location.origin + window.location.pathname
      TID.loginRedirectSso(this.$route.query.sso_login_id, callback)
    }

    if (this.$route.query.id_token) {
      USER.signInOrUpTID(this.$route.query).then(result => {
        if (result.RET_CODE === 0) {
          this.$cookies.set('USER_AUTH', result)
        } else {
          this.$router.push({name: 'Error500'})
        }
      })
    }
    /** ************** */
    /** ************** */
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
