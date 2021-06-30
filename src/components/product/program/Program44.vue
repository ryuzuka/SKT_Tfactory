<template src="../../../assets/html/product/program/program44.html"></template>

<script>
import ProgramLineup from './components/ProgramLineup'

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
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/product';
</style>
