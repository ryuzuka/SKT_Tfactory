<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf14-slide1.jpg" alt="tuf-tuaf14-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 박소현"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">BONETANICAL</h2>
        <p class="introduce">
         BONETANICAL은 bone과 botanical art를 작가가 합성한 용어로, 뼈로 이루어진 식물을 담았다. 까마중, 대마, 겨우살이, 만드라고라, 네펜데스 등 30여 종의 오묘한 뼈 식물이 서로 뿌리내려 강하게 얽혀있는 모습을 포착했다.
       </p>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf14-cont1.jpg" alt="tuf-tuaf8-cont1">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin-top: 40px;">파리지옥</h2>
          <p class="introduce">
            불가사의한 파리지옥 골화. 손가락뼈 Phalanges와 대퇴골 Femur로 구성.
          </p>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          자연과 여러 물성의 만남을 실험하는 <b>박소현 디자이너</b>이자 일러스트레이터이다. 세밀화, 포토배싱을 통해 본인만의 우주를 섬세하게 구현, 정립해내고 있다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/__poso_">www.instagram.com/__poso_</a>
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
  name: 'Tuaf14',
  components: {
    KakaoShare
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
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
  .instagram{
    line-height: 24px;
    .sns{
      margin-right: 19px;
      font-weight: bold;
      color: #000;
    }
  }
}
</style>
