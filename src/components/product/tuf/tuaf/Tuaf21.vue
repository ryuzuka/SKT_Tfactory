<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf21-slide1.jpg" alt="tuf-tuaf21-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 서우경"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          탐험
        </h2>
        <p class="introduce">
          미지의 공간을 탐험하며 나의 세계를 넓혀 나갈때 느껴지는 즐거움을 우주복을 입은 인물을 통해 표현하였다.<br>
          동화적인 감성을 한층 더 담아 낼수 있도록 디지털 페인팅기법으로 화려한 색상의 원단과 바느질 선들을 구현했다.<br>
          비현실적인 서사가 담긴 이미지를 바라보며 잠시나마 일상에서 벗어난 즐거움을 선사하고자 한다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>서우경 작가</b>는 일상에서 볼 수 있는 평범한 소재에 동화적인 서사를 담아 전달한다. 퀼팅 기법을 통해 작품에 서정적인 분위기를 부여하고, 관람의 흥미를 유발한다.
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
  name: 'Tuaf21',
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
