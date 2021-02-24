<template src="../../assets/html/main/main-appdown.html"></template>

<script>
export default {
  name: 'MainAppDown',
  methods: {
    redirectMain () {
      this.$router.push({name: 'Main'})
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/sso';
</style>
