<template src="../../assets/html/pay/pay-fail.html"></template>

<script>
import Footer from '../../components/common/Footer'

export default {
  name: 'PayFail',
  components: {
    Footer
  },
  methods: {
    retryPayBtn () {
      console.log(localStorage.getItem('pay_url'))
      this.$router.push(localStorage.getItem('pay_url'))
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/pay';
</style>
