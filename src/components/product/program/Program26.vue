<template src="../../../assets/html/product/program/program26.html"></template>

<script>
import _ from 'lodash'

import * as STORE from '../../../js/store'

export default {
  name: 'Program26',
  data () {
    return {
      classId: this.$route.query.classId,
      bookingAvailable: false,
      isLogin: false,
      isApply: false
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true

        let status = ''
        STORE.getProgramClassBook(this.classId).then(result => {
          if (result['PROGRAM_CLASS'].length === 0) return

          _.forEach(result['PROGRAM_CLASS'], program => {
            status = program['STATUS']
          })
          if (status === 'apply') {
            this.isApply = true
          }
        })
      }
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
          this.$router.push('/sev/application?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
        }
      } else {
        localStorage.setItem('previous_url', '/sev/application?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
