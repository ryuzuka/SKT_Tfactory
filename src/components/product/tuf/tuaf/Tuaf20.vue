<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf20-slide1.jpg" alt="tuf-tuaf20-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김지수"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          나를 위한 불꽃축제
        </h2>
        <p class="introduce">
          이 그림은 사람이 없는 한적한 뒷산 공원에서 피크닉 중에 먼 곳에서 하는 축제의 불꽃놀이를 보면서 축제를 즐기는 장면을 담았다.<br>
          축제라는 단어를 듣고 떠올리는 시끌벅적한, 복잡함 보다는 모두를 위한 축제였지만 ‘내가 있는 이 곳에서만은 나를 위해 쏘아 올린 불꽃축제’를 보여주고 싶었다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          SADI에서 communication design을 전공하고 있는<br>
          <b>김지수 작가</b>는 간직하고 싶은 순간과 그 순간의 감정을 여러 색감으로 아이패드를 사용하여 한 장의 그림으로 기록하고 있다.<br>
          장소와 시간에 따라 다채로워지는 하늘이 담겨있는 추억을 주로 표현하고 있다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/hap_py.uu">www.instagram.com/hap_py.uu</a>
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
  name: 'Tuaf20',
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
