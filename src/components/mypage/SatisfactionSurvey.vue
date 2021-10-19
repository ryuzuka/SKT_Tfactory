<template src="../../assets/html/mypage/satisfaction-survey.html"></template>

<script>
import * as STORE from '../../js/store.js'

export default {
  name: 'Checkin',
  data () {
    return {
      bookId: parseInt(this.$route.query.bookId),
      star: 5,
      comment: '',
      programName: '',
      buttonDisabled: false
    }
  },
  mounted () {
    if (this.bookId && this.$cookies.get('USER_AUTH') !== null) {
      STORE.getPrgramBookInfo(this.bookId).then(result => {
        this.programName = result['PROGRAM_BOOK']['PROGRAM_CLASS_NAME']
      })
    } else {
      this.buttonDisabled = true
    }
  },
  methods: {
    confirmSubmit () {
      this.$modal.show('dialog', {
        title: '만족도 조사를 제출하시겠습니까?',
        buttons: [{
          title: '아니오',
          handler: () => {
            this.$modal.hide('dialog')
          }
        }, {
          title: '네',
          handler: () => {
            this.$modal.hide('dialog')
            this.submit()
          }
        }]
      })
    },
    submit () {
      STORE.surveySatisfaction(this.bookId, this.star, this.comment).then(() => {
        this.$router.push({'name': 'MyBookingList'})
      }).catch(() => {
        this.alertError()
      })
    },
    alertError () {
      this.$modal.show('dialog', {
        title: `오류가 발생했습니다.<br>문의 070-7470-0001`,
        buttons: [{
          title: '확인',
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push({'name': 'MyBookingList'})
          }
        }]
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
