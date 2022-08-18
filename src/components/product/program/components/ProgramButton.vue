<template>
  <div v-if="bookingAvailable && visible" class="btn-wrap sticky">
    <a href="#" v-if="bookingType === 'basic'" @click.prevent="bookProgram" class="btn-solid">프로그램 예약</a>
    <template v-else-if="bookingType === 'select'">
      <a v-if="applyProgress === 'ONGOING'" href="#none" @click.prevent="bookProgram" class="btn-solid" :class="{'disabled': !checkAgree}">프로그램 신청</a>
      <button v-else-if="applyProgress === 'OVER'" class="btn-solid disabled" disabled>프로그램 신청 마감</button>
      <button v-else-if="applyProgress === 'NOT_STARTED'" class="btn-solid disabled" disabled>오픈 예정</button>
    </template>
  </div>
</template>

<script>
import * as STORE from '../../../../js/store'
import _ from 'lodash'

export default {
  name: 'ProgramButton',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
	  checkAgree: {
      type: Boolean,
		  default: true
	  }
  },
  data () {
    return {
      classId: this.$route.query.classId,
      isLogin: false,
      isApply: false,
      bookingType: '',
      bookingAvailable: true,
      applyProgress: ''
    }
  },
  created () {
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

    if (this.classId) {
      STORE.getProgramClass(this.classId).then(result => {
        if (!result['PROGRAM_CLASS']) return

        this.bookingAvailable = result['PROGRAM_CLASS']['PROGRAM_CLASS_BOOKING_YN'] === 1 ? Boolean(true) : Boolean(false)
        this.bookingType = result['PROGRAM_CLASS']['BOOKING_TYPE']
        this.applyProgress = result['PROGRAM_CLASS']['APPLY_PROGRESS']

        this.$EventBus.$emit('get-class-info', result['PROGRAM_CLASS'])
      })
    }
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
      if (this.checkAgree === false) return

      if (this.isLogin) {
        if (this.isApply) {
          this.alertAlreadyApply()
        } else {
          let path = ''
          if (this.bookingType === 'select') { // 프로그램 신청
            path = '/sev/application'
          } else if (this.bookingType === 'basic') { // 프로그램 예약
            path = '/sev/booking/program/date/shop'
          }
          this.$router.push(path + '?store_id=' + process.env.FLAGSHIP_STORE_ID + '&classId=' + this.classId)
        }
      } else {
        localStorage.setItem('previous_url', this.$route.path + '?classId=' + this.classId)
        this.$router.push({'name': 'Login'})
      }
    }
  }
}
</script>

<style lang="scss">
</style>
