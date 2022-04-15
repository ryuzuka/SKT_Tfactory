<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf16-slide1.jpg" alt="tuf-tuaf16-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 박준민"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">맞닿은 시간</h2>
        <p class="introduce">
          작가가 가장 존경하는 화가 이중섭과 함께 콜라보를 했다면 이런 느낌이었을까 상상하며 선을 그어보았다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>박준민 작가</b>는 미국 뉴욕의 쿠퍼 유니온(The Cooper Union)에서 회화와 디자인을 전공하고 있다. 뒤늦게 미술의 길에 들어선 작가에게 가장 중요했던 신앙생활은 초기 작품들에 많은 영향을 주었다. 대학 입학 후 유학생활이 길어지면서 차차 가족과 고향, 나의 땅과 뿌리에 관련된 작품을 만들었다. 현재는 이 모든 것과 더불어 인간과 정신세계의 주제를 다루는 작품활동을 많이 하고 있다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/melody_p_art">www.instagram.com/melody_p_art</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf16',
  components: {
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
