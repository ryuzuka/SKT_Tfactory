<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd swiper-top">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="thumb"><img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf26-slide1.jpg" alt=""></div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb"><img src="../../../../assets/images/program/tuf-tuaf26-slide2.jpg" alt=""></div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb"><img src="../../../../assets/images/program/tuf-tuaf26-slide3.jpg" alt=""></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 윤여송"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">페토의 역설 / Peto’s<br>Paradox (3연작)</h2>
        <p class="introduce">
          암을 설명하는 가설 중 하나인 '페토의 역설'에서는 암 위에 자라난 다른 암이 기존 종양의 에너지를 빼앗아 성장한다고 주장한다. 아이러니하게도 기존 암이 커지는 걸 다른 암이 막아주는 셈이다. 이에 영감을 받아 지구에 기생하는 가상의 세포 덩어리를 만들고, 그 것으로부터 에너지를 얻어 생활하는 인류의 모습을 그려냈다. 어쩌면 이 지구에게 있어 인간은 해롭고 성가시지만, 불편한 것을 없애주는 아주 약간은 고마운 존재일지도 모른다.
       </p>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf26-cont1.jpg" alt="tuf-tuaf26-cont1">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin-top: 40px;">생일 축하해! /<br>Happy Birthday!</h2>
          <p class="introduce">
            먼 미래, 우주 탐험이 자유로워진다면 엄청나게 다양한 친구들을 만들 수 있을 거에요. 보아하니 오늘은 누군가의 생일이로군요. 떠들썩한 파티 도중, 누군가가 아주 낡아 보이는 기계를 꺼내 들었어요. 폴라로이드 카메라? 작동을 할지 잘 모르겠는데... 우여곡절 끝에 카메라를 켜고 기록을 남깁니다. 찰칵! 다들 행복해 보이네요. 생일 축하해요!
          </p>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>윤여송 작가</b>는 홍익대학교 시각디자인과에서 쓰고 그리는 법을 배우고 있다.<br>
          있는 것을 기반으로 없는 세상을 만들고, 그 세상이 돌아가는 장면을 포착해 그린다.
        </p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tuaf26',
  components: {
    KakaoShare
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created () {
  },
  mounted () {
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
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
<style lang="scss" scoped>
.details{
  &-inner {
  padding: 40px 20px;
  }
  .introduce{
    margin-top: 0;
    line-height: 20px;
  }
}
.swiper-pagination-bullets {
  bottom: 16px;
}
</style>
