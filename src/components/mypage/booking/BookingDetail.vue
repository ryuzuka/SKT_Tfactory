<template src="../../../assets/html/mypage/booking/booking-detail.html"></template>

<script>
import * as STORE from '../../../js/store.js'

/**
 * apply: 신청완료
 * success: 예약완료, 접수대기(상담원 배정중 - field, field_buy)
 * operator_assigned: 접수완료(상담원 배정 완료)
 * complete: 참여완료
 * cancel: 취소
 * canceled_by_operator: 취소(관리자)
 * counseling: 상담중
 * not: 미방문
 * selected: 당첨
 * not_selected: 미당첨
 * end: 종료
 */

export default {
  name: 'MyBookingDetail',
  props: {
    bookingType: {
      type: String
    }
  },
  data () {
    return {
      status: this.$route.params.status,
      bookingDetail: {
        USER_PHONE_NUMBER: ''
      },
      programType: ''
    }
  },
  created () {
    STORE.getBookingInfo(this.$route.query.BOOK_ID).then(result => {
      this.bookingDetail = result.BOOK_INFO
      this.programType = this.bookingDetail.BOOKING_TYPE
      if (parseInt(result.BOOK_INFO['PROGRAM_CLASS_ID']) === 36) { // Xbox 컨트롤러 TO-GO
        this.bookingDetail.DATE = this.$moment(this.bookingDetail.DATE).format('YYYY.MM.DD')
      } else {
        this.bookingDetail.DATE = this.$moment(this.bookingDetail.DATE).format('YYYY.MM.DD HH:mm')
      }
      if (!this.bookingDetail.OPERATOR_IMAGE_URL) {
        this.bookingDetail.OPERATOR_IMAGE_URL = require('@/assets/images/service/icon_T.png')
      }
      if (!this.bookingDetail.ATTENDEE_NUM) {
        this.bookingDetail.ATTENDEE_NUM = 1
      }
      this.$store.getters.CONSTANTS.COUNSELING_MODIFY.BOOK_ID = result.BOOK_INFO.BOOK_ID
      this.$parent.$emit('change-application-type', {type: this.bookingDetail['BOOKING_TYPE']})
    })
  },
  methods: {
    showCancelSuccessDialog () {
      this.$modal.show('dialog', {
        title: '취소가 완료되었습니다.',
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'MyBookingList'})
          }
        }]
      })
    },
    showCancelFailedDialog (RET_CODE) {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-cancel-booking-failed') + ' ' + RET_CODE,
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'MyBookingList'})
          }
        }]
      })
    },
    showCancelFailedWithOverTime () {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-cancel-booking-overtime'),
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'MyBookingList'})
          }
        }]
      })
    },
    clickCancel () {
      this.$modal.show('dialog', {
        title: '취소하시겠습니까?',
        buttons: [{
          title: this.$t('comm.yes'),
          handler: () => {
            this.$modal.hide('dialog')

            if (this.$route.params.type === 'counseling') {
              STORE.cancelCounseling(this.$route.query.BOOK_ID).then(result => {
                if (result.RET_CODE === 0) {
                  this.showCancelSuccessDialog()
                }
              }).catch((err) => {
                if (err.response.data.RET_CODE === 14000) {
                  this.showCancelFailedWithOverTime()
                } else {
                  this.showCancelFailedDialog(err.response.data.RET_CODE)
                }
              })
            } else if (this.$route.params.type === 'program') {
              STORE.cancelProgram(this.bookingDetail.BOOK_ID).then(result => {
                if (result.RET_CODE === 0) {
                  this.showCancelSuccessDialog()
                }
              }).catch((err) => {
                if (err.response.data.RET_CODE === 14000) {
                  this.showCancelFailedWithOverTime()
                } else {
                  this.showCancelFailedDialog(err.response.data.RET_CODE)
                }
              })
            } else {
              STORE.cancelOnSiteCounseling(this.$route.query.BOOK_ID).then(() => {
                this.$router.push({'name': 'MyBookingList'})
              })
            }
          }
        }, {
          title: this.$t('comm.no')
        }]
      })
    }
  },
  filters: {
    mdnFilter (data) {
      if (data) {
        let mdn = data.replace(/[^0-9]/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3').replace('--', '-')
        return mdn
      } else return ''
    },
    mdnFilterForBooking (data) {
      let mdn = data.substring(7, 11)
      return mdn
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
