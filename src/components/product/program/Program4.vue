<template src="../../../assets/html/product/program/program4.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import _ from 'lodash'

export default {
  name: 'Program4',
  data () {
    return {
      mobileOS: this.$cookies.get('platform'),
      userId: this.$cookies.get('MY_INFO').USER_ID,
      classId: this.$route.query.classId,
      programInfo: {},
      isLogin: ''
    }
  },
  created () {
    this.programInfo.PROGRAM_CLASS_BOOKING_YN = true
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
        STORE.getProgramClassBook(this.classId).then(result => {
          if (_.find(result.PROGRAM_CLASS, {USER_ID: this.userId})) {
            this.isApply = true
          }
        })
        //
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })

    STORE.getProgramClass(this.classId).then(result => {
      if (!result.PROGRAM_CLASS) return
      //
      this.programInfo = result.PROGRAM_CLASS
      this.programInfo.APPLY_PROGRESS = 'ONGOING'
    })
  },
  methods: {
    alertAlreadyApply () {
      this.$modal.show('dialog', {
        title: `이미 신청하신 프로그램입니다.
                <div class="dialog-c-text">신청 내용 수정은 [MENU > 예약/신청내역]<br>에서 가능합니다.</div>`,
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
          // 프로그램 신청
          this.$router.push('/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
        }
      } else {
        localStorage.setItem('previous_url', '/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.$route.query.classId)
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang='scss'>
  @import 'src/assets/css/product';
</style>
