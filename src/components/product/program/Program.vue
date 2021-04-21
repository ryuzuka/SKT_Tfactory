<template>
  <div class="btn-wrap sticky">
    <a v-if="bookingType === 'basic'" @click.prevent="bookProgram" class="btn-solid">프로그램 예약</a>
    <template v-else-if="bookingType === 'select'">
      <a v-if="statusFlag === 'ONGOING'" href="#none" @click.prevent="bookProgram" class="btn-solid">콘서트 응모</a>
      <button v-else-if="statusFlag === 'OVER'" class="btn-solid disabled" disabled>콘서트 응모 마감</button>
      <button v-else-if="statusFlag === 'NOT_STARTED'" class="btn-solid disabled" disabled>COMING SOON</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProgramBottom',
  props: {
    classId: {
      type: String,
      default: ''
    },
    isLogin: {
      type: Boolean,
      default: false
    },
    isApply: {
      type: Boolean,
      default: false
    },
    bookingType: {
      type: String,
      default: ''
    },
    statusFlag: {
      type: String,
      default: 'NOT_STARTED'
    }
  },
  data () {
    return {}
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
          if (this.bookingType === 'basic') {
            this.$router.push('/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
          } else if (this.bookingType === 'select') {
            this.$router.push('/sev/application?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
          }
        }
      } else {
        if (this.bookingType === 'basic') {
          localStorage.setItem('previous_url', '/sev/booking/program/date/shop?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
        } else if (this.bookingType === 'select') {
          localStorage.setItem('previous_url', '/sev/application?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
        }
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
</style>
