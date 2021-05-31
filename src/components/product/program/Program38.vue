<template src="../../../assets/html/product/program/program38.html"></template>

<script>
export default {
  name: 'Program38',
  components: {},
  data () {
    return {
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
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
