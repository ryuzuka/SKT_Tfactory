<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf31-slide1.jpg" alt="tuf-tuaf31-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 이진주"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px; font-family: 'Noto Sans KR';">
          메‘찰나의’ (그순간<br>찰나의 기록 시리즈 중)
        </h2>
        <p class="introduce">
          새롭게 지나가던 길, 우연치 않게 마주했다. 무심코 지나칠 수도 있었던 그 찰나를 잡았다. 그리고 기록했다. 자연스럽게 내 시선은 머문다. 아무것도 하지 않았지만 존재 자체로 내 발걸음 을 멈추게 만들었다. 그들이 이룬 공간은 나의 우주였다. 인위적으로 만들고 싶어도 만들어 낼 수 없는 공간이다. 향으로도 손끝으로도 존재 를 확인한다. 존재 자체로 아름답다. 순간의 기록을 놓치지 않음에 감사하다. 그들의 축제에 초대 되었다 감사하게도.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>이진주 작가(Leepearl)</b>는 따뜻함으로 비롯된 행복을 통해 자신의 기록을 찾아나간다. 재료의 제한을 두지 않고 여러 방향으로 작업을 해나가려고 하고 있다. 쉽게 마주하는 자연과 빛. 그 속에서 당연하게 여겨지는 행복에 의미를 담아 기쁨을 찾아가는 과정을 걸어가고 있다. 일상에 감사한, 소소해서 더 행복한, 아무렇지 않을 수도 있는 내 삶에 좀 더 집중할 수 있는 작업을 하고자 한다.
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
  name: 'Tuaf31',
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
}
</style>
