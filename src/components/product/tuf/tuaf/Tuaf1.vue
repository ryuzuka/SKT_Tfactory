<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf1-slide1.jpg" alt="tuf-tuaf1-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 강민주"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">강돌맹이 이야기</h2>
        <p class="introduce">
          강민주(姜玟珠)는 진주, 옥돌, 구슬이라는 아름다운 이름을 갖고 있지만 평범한 사람이다.<br>
          오히려 이리저리 치이고, 사람들의 시선을 피해다니는 모습은 돌맹이와 다름없다.<br>
          그래서 그는 바다로 도망쳤다.<br>
          강민주를 제한하는 글자, 숫자는 분해되고 부유한다, 동시에 강민주는 아무도 없는 바다속에서 '무(無)'의 상태로 돌아간다.<br>
          돌맹이는 이제야 빛을 받아 진주처럼 반짝인다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce"><b>강민주 작가</b>는 홍익대학교 디자인컨버전스학부에 재학중인 학생이다.</p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tuaf1',
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
  padding:40px 20px;
  }
  .introduce{
    margin-top: 0;
    line-height: 20px;
  }
}
</style>
