<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf34-slide1.jpg" alt="tuf-tuaf34-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 정유빈"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          나는 이미 우주속에<br>살고 있는지 몰라
        </h2>
        <p class="introduce">
          팬데믹이라는 낯선 현실 속에서 마스크로 무장하고 거리두기를 했던 시간들이 있다. 꽁꽁 감싸서 턱 막히던 숨, 모일 수 없었던 생각과 몸, 언제 끝날지 모르던 일상들은 어둡고 아무것도 알 수 었었다. 어쩌면 나는 이미 어지러운 우주 속에 살고 있었는지도 모른다. 끝없이 펼쳐지는 우주 속을 벗어날 수 있을까? 여전히 바이러스가 없는 평범한 평행우주를 기다리고 있다는 이야기를 일러스트에 담아냈다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>정유빈 작가</b>는 한국예술종합학교에 재학중인 디자이너이며, 재미있고 어려운 현상을 시각적으로 선명히 드러내는 것을 좋아한다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/i_ko_ikoko')">www.instagram.com/i_ko_ikoko</a>
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
  name: 'Tuaf34',
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
</style>
