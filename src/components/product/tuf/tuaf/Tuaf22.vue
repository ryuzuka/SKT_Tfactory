<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf22-slide1.jpg" alt="tuf-tuaf22-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 손현주"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px; font-family: 'Noto Sans KR';">
          “우린, 매일이 축제”
        </h2>
        <p class="introduce">
          소소한 일상을 축제로 만드는 것은<br>
          반드시 특별한 이벤트를 필요로 하기보다는<br>
          삶을 대하는 우리들의 태도에서 비롯된다.<br>
          축하해, 너의 오늘을-<br>
          매일이 축제일 너의 매일을 응원하는 마음을 담았다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>손현주 작가</b>는 사랑하는 것들을 그린다.<br>
          그것은 어느 누군가가 되기도 하고<br>
          어느날은 꽃, 바람, 책, 음악, 그리움이 되기도 한다.<br>
          그런 마음들을 남기고 싶어 그림을 그린다.
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
  name: 'Tuaf22',
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
