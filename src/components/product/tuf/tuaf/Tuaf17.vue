<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf17-slide1.jpg" alt="tuf-tuaf17-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 박지원"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">자상상</h2>
        <p class="introduce">
          우주는 무한한 미지의 공간이다.<br>
          우리는 모두 자신만의 우주를 갖고 있다. 우리는 그곳에서 끊임없이 생각을 연쇄적으로 만들어낸다.<br>
          평소에는 차마 입 밖으로 꺼낼 수 없었던 두렵고, 어설프고, 웃기고, 유쾌한 생각이 '나'로부터 확장된다.<br>
          그 상상들은 다시 우주 한가운데에 자리 잡은 '나'에게로 돌아와, '나'가 누구인지를 뒷받침하는 자화상의 배경이 된다.<br>
          자-상상해보자. '나'의 우주는 과연 어떤 것을 담고 있는가?
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>박지원 작가</b>는 디자인을 공부하고 있으며, 동시에 드로잉으로 표현할 수 있는 소재를 탐색 중이다.<br>신비한 경험을 안겨주고자 비둘기와 인간의 합성물과, 미지의 세계를 소재로 한 이야기를 그리는 것을 즐긴다.<br>이상하고도 엉뚱한 메시지를 전달하는 것에 초점을 두고, 디지털 일러스트 작업을 이어가고 있다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/p._.john')">www.instagram.com/p._.john</a>
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
  name: 'Tuaf17',
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
    line-height: 24px;
    .sns{
      margin-right: 19px;
      font-weight: bold;
      color: #000;
    }
  }
}
</style>
