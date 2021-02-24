<template src="../../assets/html/mypage/coupon-detail.html"></template>

<script>
export default {
  name: 'MyCouponDetail',
  props: {
    url: String
  },
  mounted () {
    console.log(this.$props)
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
