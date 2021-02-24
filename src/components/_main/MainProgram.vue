<template src="../../assets/html/main/main-program.html"></template>

<script>
import * as STORE from '../../js/store.js'

export default {
  name: 'MainProgram',
  data () {
    return {
      programSwiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      expSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      programClassList: [],
      mainBannerKor: ['iPhone12 \'TMI\'', '아이폰/아이패드로 한 곡 뚝!딱!', '덕후 크루와 한판 승부!'],
      mainBannerUrl: []
    }
  },
  methods: {
    goStoreInfo () {
      this.$router.push('/shop/detail?store_id=' + process.env.FLAGSHIP_STORE_ID)
    }
  },
  mounted () {
    STORE.getProgramClassList().then(result => {
      result.CLASSES.forEach((program) => {
        program.PROGRAM_CLASS_TAGS = program.PROGRAM_CLASS_TAGS.split(',')
        this.mainBannerKor.forEach((banner, bannerIndex) => {
          if (banner === program.PROGRAM_CLASS_NAME) {
            this.mainBannerUrl[bannerIndex] = program.PROGRAM_CLASS_LINK_URL + '?classId=' + program.PROGRAM_CLASS_ID
          }
        })
      })
      this.programClassList = result.CLASSES
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/main';
</style>
