<template src="../../../assets/html/mypage/booking/booking-detail.html"></template>

<script>
import * as STORE from '../../../js/store.js'

/**
 * success: 신청완료
 * cancel: 취소
 * complete: 종료
 * standby: 대기
 * not: 미방문
 * end: 종료 & 설문조사 등록 완료
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
      }
    }
  },
  created () {
    STORE.getBookingInfo(this.$route.query.BOOK_ID).then(result => {
      this.bookingDetail = result.BOOK_INFO
      this.bookingDetail.DATE = this.$moment(this.bookingDetail.DATE).format('YYYY.MM.DD HH:mm')
      if (!this.bookingDetail.OPERATOR_IMAGE_URL) {
        this.bookingDetail.OPERATOR_IMAGE_URL = require('@/assets/images/service/icon_T.png')
      }
      this.$store.getters.CONSTANTS.COUNSELING_MODIFY.BOOK_ID = result.BOOK_INFO.BOOK_ID
    })
  },
  methods: {
    showCancelSuccessDialog () {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-cancel-booking-complete'),
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
        title: this.$t('my.alert-cancel-booking'),
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
                console.log(err.response.data)
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
    },
    clickInquiry () {
      // TODO - 설문조사
      console.log('설문조사')
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
