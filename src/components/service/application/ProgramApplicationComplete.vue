<template src="../../../assets/html/service/application/program-application-complete.html"></template>

<script>
import * as STORE from '../../../js/store.js'

export default {
  name: 'ProgramApplicationComplete',
  data () {
    return {
      storeId: this.$route.query.store_id,
      classId: this.$route.query.classId,
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
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
