<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf13-slide1.jpg" alt="tuf-tuaf13-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김현호"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">나의 우주 : 토성</h2>
        <p class="introduce">
          토성을 실제로 본적이 있다.<br>
          고성능 망원경을 통해 본 토성의 고리는 10년이 지난 지금도 생생히 떠오른다.<br>
          지구 밖 우주의 모습과 신비로운 토성의 모습,<br>
          내가 보았던 나의 경이로웠던 우주이다<br>
          나의 우주에 초대하고 싶다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>며농/김현호 작가</b>는 다양한 이유로 여러 도형들은 각기 다른 이미지를 갖는다.<br>
          도형을 감정적으로 바라본 순간 나의 생각을 담기에 좋은 그릇이라는 것을 깨달았다.<br>
          이러한 도형들을 나만의 언어로 재해석해 내 생각을 상징하는 물체로 만드는 작업을 하고 있다.<br>
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
  name: 'Tuaf13',
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
</style>
