<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf36-slide1.jpg" alt="tuf-tuaf36-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 지유신"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          Lonely Journey
        </h2>
        <p class="introduce">
          남들과는 다른, 평범한 깋을 택하지 않은 이들의 외로운 여정이 담긴 방이다. 외롭고, 답답하고, 어두워도 용기만은 잃지 않기를.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>지유신 작가</b>는 무의식의 것들을 의식적으로 그려낸다. 죽음, 분노, 공포등과 같은 직관적인 감정들에 대한 고찰을 표현한다. 그래서 그런지 그림을 그릴 때 고심하고, 계획적으로 그리지 않는다. 직관과 본능 그 자체로 예술이 될 수 있다 생각한다. 때문에 제가 그릴 수 없는 건 이 세상에 없다.
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
  name: 'Tuaf36',
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
