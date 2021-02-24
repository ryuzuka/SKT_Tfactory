<template src="../../assets/html/shop/pop-img-viewer.html"></template>

<script>
export default {
  name: 'ModalImgViewer',
  props: {
    data: Object
  },
  data () {
    return {
      imgViewerSwiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
    this.$refs.imgViewerSwiper.swiper.slideTo(this.data.activeIndex, 0)
  },
  created () {}
}
</script>

<style lang="scss">
  @import 'src/assets/css/shop';
</style>
