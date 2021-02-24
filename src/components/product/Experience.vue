<template src="../../assets/html/product/experience.html"></template>

<script>
export default {
  name: 'Experience',
  components: {
  },
  data () {
    return {
      productSwiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      productData: []
    }
  },
  created () {
    // test
    this.productData = [{}, {}, {}]
    // this.productData = [{}]
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
