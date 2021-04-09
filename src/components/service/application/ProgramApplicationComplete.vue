<template src="../../../assets/html/service/application/program-application-complete.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'ProgramApplicationComplete',
  data () {
    return {
      bookId: this.$route.query.bookId,
      bookInfo: {}
    }
  },
  methods: {
  },
  created () {},
  mounted () {
    STORE.getPrgramBookInfo(this.bookId).then(result => {
      this.bookInfo = result['PROGRAM_BOOK']
      this.bookInfo.DATE = this.$moment(this.bookInfo.DATE).format('YYYY.MM.DD HH:mm')
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
