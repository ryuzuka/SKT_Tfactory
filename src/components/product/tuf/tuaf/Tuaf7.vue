<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf7-slide1.jpg" alt="tuf-tuaf7-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김민정"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">mine</h2>
        <p class="introduce">
          일상 속 학교 생활을 하며 매 순간 양자택일을 해야 하는 상황이 생기는데 어떠한 선택이 맞는 것인지, 머리 속에서 생각들이 끊임없이 충돌하고 고민하며 끝내 어떠한 선택을 고를지 올바른 정답을 추구하고자 하는 본인의 모습이 표현되어 있다.
       </p>
      </div>
      <div class="details-inner" style="padding: 40px 20px 60px;">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>김민정 작가</b>는 독특한 색채 배열과 자유분방한 선들을 통해 방대한 시각 이미지를 풀어내고자 하며, 일상 속에서 흔하게 보이는 오브제들을 그래피티적이고 회화적인 표현으로 재탄생시켜 본인만의 개성적인 시선을 보여주고 있다.
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
  name: 'Tuaf7',
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
