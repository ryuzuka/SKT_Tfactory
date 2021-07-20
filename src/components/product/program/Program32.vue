<template src="../../../assets/html/product/program/program32.html"></template>

<script>
import KakaoShare from '../../common/KakaoShare'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program32',
  components: {
    KakaoShare
  },
  data () {
    return {
      classId: this.$route.query.classId
    }
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      }
    })
  },
  methods: {
    clickButton () {
      let mobileOS = this.mobileOS
      let redirectURL = 'https://www.youtube.com/watch?v=qh4cZtE7CU8&t=105s'
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.sysBrowserOpen(mobileOS, redirectURL)
      } else {
        window.open(redirectURL)
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
