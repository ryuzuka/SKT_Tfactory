<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf33-slide1.jpg" alt="tuf-tuaf33-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 정세윤"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">질서</h2>
        <p class="introduce">
          차가운 쇳덩어리들 속 아름다운 생명들이 꽃핀다. 완전함을 향해 기존의 순응하던 질서를 벗어난다. 새로운 기준이 생겨난다. 피어난 생명들이 화려한 즐거움의 혁명을 일으킨다.
       </p>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf33-cont1.jpg" alt="tuf-tuaf33-cont1">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin-top: 40px;">파란만장(波瀾萬丈)></h2>
          <p class="introduce">
            불안함과 두려움으로 점철되었던 20대 초반의 자화상. 오로지 바로서기 위해 그는 마음이 부서져가는 외로움을 견뎌내야만 했다.
          </p>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>정세윤 작가</b>는 서울시립대에서 시각디자인 학사 과정을 공부하고 있다. 주로 3D그래픽을 활용한 일러스트레이션을 작업한다.
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
  name: 'Tuaf33',
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
