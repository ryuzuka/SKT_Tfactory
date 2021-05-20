<template src="../../../assets/html/product/program/program34.html"></template>

<script>
export default {
  name: 'Program34',
  components: {
  },
  data () {
    return {
      classId: this.$route.query.classId,
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
