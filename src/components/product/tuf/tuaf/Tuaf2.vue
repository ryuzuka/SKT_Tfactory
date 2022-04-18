<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf2-slide1.jpg" alt="tuf-tuaf2-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 강태린"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">얼음 행성</h2>
        <p class="introduce">
          얼음으로 뒤덮인 한 외계 행성의 모습이다. 얼음 안에서 잠자고 있는 생물들과 깨어나 활동하는 생물들이 공존한다. 그 가운데 행성에 불시착한 외계인은 추위로부터 몸을 보호하기 위해 자신의 몸을 끌어안다가 팔이 길어졌다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>강태린 작가</b>는 우주에 대한 상상을 발랄한 일러스트레이션으로 표현하는 비주얼 아티스트이다. 강렬하고 다양한 색감을 사용하여 일러스트레이션 속 세계가 생동감 있게 움직이도록 표현하고자 노력한다. 상상력의 긍정적인 힘과 살아 움직이는 생물들이 주는 에너지를 사랑한다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/l._taerin_.l">www.instagram.com/l._taerin_.l</a>
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
  name: 'Tuaf2',
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
