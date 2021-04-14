<template src="../../../assets/html/product/program/program11.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import _ from 'lodash'

export default {
  name: 'Program11',
  data () {
    return {
      programClass: null,
      classId: this.$route.query.classId,
      storeId: '',
      programInfo: {},
      isLogin: false,
      statusFlag: 'NOT_STARTED',
      bookingType: '',
      isApply: false
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true

        let status = ''
        STORE.getProgramClassBook(this.classId).then(result => {
          if (result['PROGRAM_CLASS'].length > 0) {
            _.forEach(result['PROGRAM_CLASS'], (value, index) => {
              status = value['STATUS']
            })
          }
          if (status === 'apply') {
            this.isApply = true
          }
        })
      }
    })

    STORE.getProgramClass(this.$route.query.classId).then(result => {
      this.programClass = result['PROGRAM_CLASS']
      this.statusFlag = result['PROGRAM_CLASS']['APPLY_PROGRESS']
      this.bookingType = result['PROGRAM_CLASS']['BOOKING_TYPE']
    })
  },
  methods: {
    alertAlreadyApply () {
      this.$modal.show('dialog', {
        title: `이미 신청하신 프로그램입니다.`,
        text: `신청 내용 수정은 [MENU > 예약/신청내역]<br>에서 가능합니다.`,
        buttons: [{
          title: '확인',
          handler: () => {
            this.$modal.hide('dialog')
          }
        }]
      })
    },
    bookProgram () {
      if (this.isLogin) {
        if (this.isApply) {
          // 이미 신청하신 프로그램입니다.
          this.alertAlreadyApply()
        } else {
          if (this.programClass['BOOKING_TYPE'] === 'basic') {
            this.$router.push('/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
          } else {
            this.$router.push('/sev/application?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
          }
        }
      } else {
        localStorage.setItem('previous_url', '/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
