<template src="../../../assets/html/product/program/program44.html"></template>

<script>
import ProgramLineup from './components/ProgramLineup'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program44',
  components: {ProgramLineup},
  data () {
    return {}
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
      const redirectURL = 'https://www.instagram.com/tfactory_sampler/'
      const mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.sysBrowserOpen(mobileOS, redirectURL)
      } else {
        window.open(redirectURL, '_blank')
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/product';
</style>
