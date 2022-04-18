<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd swiper-top">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="thumb"><img src="../../../../assets/images/program/tuf-tuaf3-slide1.jpg" alt=""></div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb"><img src="../../../../assets/images/program/tuf-tuaf3-slide2.jpg" alt=""></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김경준"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">0키마우스</h2>
        <p class="introduce" style="margin-bottom: 20px;">
          나의 우주에서는 서로의 얼굴을 인식하지 못한다.br>
          오직 신발만이 잔재한다.
        </p>
        <p class="introduce">
        얼굴을 신고 개인의 캐릭터를 들여다본다.<br>
        나 그리고 당신은 어떤 이면의 캐릭터로 살아가는지 질문한다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>김경준 작가</b>는 신발이라는 매체를 통해 삶과 얼굴에 대해 고찰한다.<br>
          작가는 '신발'이란, 함께 주름지며 투영되는 삶을 반증하는 또 하나의 얼굴이라고 말한다.<br>
          대중적이고 유쾌한 이미지로 신발과 얼굴, 그리고 삶이라는 주제에 대해 말한다.<br>
          당신은 어떤 얼굴을 신고 있는가?
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/kyeong_jun_')">www.instagram.com/kyeong_jun_</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tuaf3',
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
  },
  methods: {
    snsLink (snsUrl) {
      const mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.sysBrowserOpen(mobileOS, snsUrl)
      } else {
        window.open(snsUrl, '_blank')
      }
    },
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
  .instagram{
    line-height: 24px;
    .sns{
      margin-right: 19px;
      font-weight: bold;
      color: #000;
    }
  }
}
.swiper-pagination-bullets {
  bottom: 16px;
}
</style>
