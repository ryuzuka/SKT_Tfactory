<template src="../../../assets/html/product/program/program21.html"></template>

<script>
import * as STORE from '../../../js/store.js'
import _ from 'lodash'

export default {
  name: 'Program21',
  data () {
    return {
      isApply: false,
      mobileOS: this.$cookies.get('platform'),
      classId: this.$route.query.classId,
      storeId: '',
      programInfo: {},
      isLogin: false,
      statusFlag: 'NOT_STARTED'
    }
  },
  mounted () {
    let status = ''
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true

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

    STORE.getProgramClass(this.classId).then(result => {
      this.programInfo = result['PROGRAM_CLASS']
      this.storeId = this.programInfo['STORE_ID']
      this.statusFlag = this.programInfo['APPLY_PROGRESS']
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
      if (!this.isLogin) {
        let prevURL = window.location.pathname + '?classId=' + this.$route.query.classId
        localStorage.setItem('previous_url', prevURL)
        this.$router.push({name: 'Login'})
        return
      }

      if (this.isApply) {
        // 이미 신청하신 프로그램입니다.
        this.alertAlreadyApply()
      } else {
        // 프로그램 신청
        this.$router.push('/sev/program/application?store_id=' + this.storeId + '&classId=' + this.$route.query.classId)
      }
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/css/product';
</style>
