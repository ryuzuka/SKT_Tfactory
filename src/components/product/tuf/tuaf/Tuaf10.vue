<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf10-slide1.jpg" alt="tuf-tuaf10-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김지구"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">1-2PM</h2>
        <p class="introduce">
          흘러가는 시간 속에서 영원한 것이란 없다. 매 시간, 매 초를 지나 찬란한 순간들은 모두 언젠가 끝이 나지만 그 기억들은 마음 한 켠에 자리 잡아 영원으로 존재한다. 지금 피부에 닿는 이 물결도 결국 스쳐 흘러가겠지만 언젠가 이 물결의 향기와 촉감을 기억한다면, 언제든 감각 끝으로 마주할 수 있다. 나의 마음 안에서 모든 흐름 속 감각들이 맞물리며, 그 끝엔 나 자신만의 하나뿐인 거대한 우주로 자리잡는다.
       </p>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf10-cont1.jpg" alt="tuf-tuaf10-cont1">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin: 40px 0 0;">2-3PM</h2>
        </div>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf10-cont2.jpg" alt="tuf-tuaf10-cont2">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin: 40px 0 0;">5-6PM</h2>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>작가 김지구</b>는 안온한 상태의 자연과 인류의 공존을 그려낸다.<br>
          시공간의 제약을 넘어 시각물로 제시된 자연은 오래 고민하지 않아도 직관적으로 받아들이고 이해할 수 있는 아름다움을 전한다. 그 속에 인간은 자연을 파괴하며 휴식을 즐기는 것이 아닌 그저 동화되어 공존하는 존재로 등장한다. 내재된 특정한 이야기가 전제되어 있다기보다는, 그저 이 거대한 나의 우주 속 자연과 인류가 공존하는 화면을 마주하며 펴안한 감정으로 잠시 나의 지구를 들여다보길 바랄 뿐이다
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/kimzigoo_archive">www.instagram.com/kimzigoo_archive</a>
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
  name: 'Tuaf10',
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
