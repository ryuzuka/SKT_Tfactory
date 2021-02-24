<template src="../../assets/html/service/consult-complete.html"></template>

<script>
import * as STORE from '../../js/store.js'

export default {
  name: 'ConsultComplete',
  data () {
    return {
      bookInfo: {
        'FIELD_BOOK': {
          'ZONE_NAME': ''
        }
      }
    }
  },
  created () {
    STORE.getOnSiteCounselingInfo(this.$route.query.BOOK_ID).then(result => {
      console.log(result)
      this.bookInfo = result
    })
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/service';
</style>
