<template src="../../../assets/html/product/program/program2.html"></template>

<script>
import _ from 'lodash'

import * as STORE from '../../../js/store'
import Program from './Program'

export default {
  name: 'Program2',
  components: {
    Program
  },
  data () {
    return {
      classId: this.$route.query.classId,
      bookingType: '',
      statusFlag: '',
      isLogin: false,
      isApply: false
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })

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

    STORE.getProgramClass(this.classId).then(result => {
      if (!result['PROGRAM_CLASS']) return

      this.bookingType = result['PROGRAM_CLASS']['BOOKING_TYPE']
      this.statusFlag = result['PROGRAM_CLASS']['APPLY_PROGRESS']
    })
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/product';
</style>
