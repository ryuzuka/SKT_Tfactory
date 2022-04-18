<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf32-slide1.jpg" alt="tuf-tuaf32-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 정민성"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          Love is drowning me
        </h2>
        <p class="introduce">
          사랑은 물에 빠지는것 같은 느낌을 줍니다. 물속에서 헤엄을 치면 중력을 못 느끼는것 처럼 기분이 좋아지지만, 그것이 도를 넘어 수면(사랑)위로 올라가지 못하고 그곳에 지체되면 고통을 느끼는 것처럼,<br>사랑을 하면서 행복 할때도 있지만, 서로 간의 서로를 배려하지못하면 상처, 고통을 줄수도 있다는 것을 표현했다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          대부분의 사람들은 익숙한 것에 적응 되어있으며, 그것이 당연한것 이라고 생각하고 있다. 하지만 저는 익숙한 것, 평범한 것에서 특별한 무언가를 찾는 것을 추구한다. (기존의 것에서 조금만 수정하여 특별함을 주는 것.) 작가는 ‘사랑’을 가지고 작품을 제작한다. ‘사랑’은 대부분 밝은<br> 면 만 보고 싶어하면 밝고 행복한 것 이라고 생각하지만 ‘사랑’ 이라는 단어는 항상 이별,고통, 그리고 슬픔이 따라오기 마련이다.<br><b>정민성 작가</b>는 작품을 통해 사랑을 표현한 것 같지만 사랑 뒷면에 있는 감정들을 색감과 디자인를 통해 사람들에게 알려주려 한다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/mmmmmmmmmmsc')">www.instagram.com<br>/mmmmmmmmmmsc</a>
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
  name: 'Tuaf32',
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
    display: flex;
    line-height: 24px;
    .sns{
      margin-right: 19px;
      font-weight: bold;
      color: #000;
    }
  }
}
</style>
