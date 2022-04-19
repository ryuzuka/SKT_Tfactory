<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf12-slide1.jpg" alt="tuf-tuaf12-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김하늘"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">Our Pink Universe</h2>
        <p class="introduce">
          우주는 무겁고 우리는 너무 가볍다. 이 작품은 수많은 시련의 작업을 거치고 곧 졸업을 눈 앞에 둔 우리들의 희망찬 미래를 의미한다. 핑크빛 우주의 심연 속으로 빨려 들어가는 우리는 어디론가 휩쓸리는 듯하지만, 이 또한 드넓고 아름다운 미래를 향해 수영하는 과정일 것이다. 고요하고 장엄한 우주의 붉은 빛들은 새로운 세상을 맞이할 우리의 미래에 따뜻한 희망을 전달한다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>김하늘 작가</b>는 2018년 덕성여자대학교를 입학하여 현재 본교 4학년 재학 중이다. 주로 패션 일러스트와 앨범 아트 위주의 작업을 진행한다.
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
  name: 'Tuaf12',
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
