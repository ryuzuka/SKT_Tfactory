<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf18-slide1.jpg" alt="tuf-tuaf18-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 반효경"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          언제나 곁에 있을게._<br>I ' ll always be there<br>for you.
        </h2>
        <p class="introduce">
          생의 모든 것을 지휘하고 정서적교감을 이루며 말이 통하지 않아도 서로의 마음을 알 수 있는 것. 해주는 것 밖에 없다고 생각했는데 우리는 너에게 너무 많은 것을 받고 있었다.<br>
          내가 너의 우주가 되어 줄테니 넌 내가 가장 사랑하는 별로 남아 주길 바란다.<br>
          너에게 나는 너무 작은 우주일지 모른다. 그러나 내 우주속에 별을 하나만 두겠다면 주저없이 너를 택하여 언제나 곁에 있겠다고 말한다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>반효경/ 알라코(allako) 작가</b>는 서울여자대학교 현대미술학과 재학생이며, 그림으로 부터 받는 ‘치유’의 능력을 주목하고 있으며 일상과 관련된 이야기를 만든다.<br>
          학부생으로 아직 많은 걸 배우고 있으며, 예술과 삶의 영역을 따로 정해두지 않으며 예술이 스며드는 삶을 살아가보려 한다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/hap_py.uu')">www.instagram.com/hap_py.uu</a>
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
  name: 'Tuaf18',
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
