<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf23-slide1.jpg" alt="tuf-tuaf23-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 심유리"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          나의 우주(나의 머릿속)
        </h2>
        <p class="introduce">
          나의 우주, 나의 머릿속을 펼쳐보았다.<br>
          알록달록하면서 정신 사납고, 조금은 이중적인 내면 세계를 표현했다.<br>
          머릿속에 떠다니는 글자들도 볼 수 있다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>심유리 작가(0_odd)</b>는 ' 젊지만 조금은 이상한 작품을 만들어 냄 ' 을 뜻한다.<br>
          눈이 휘둥그레지는 표정을 나타내기도 한다.<br>
          장르의 제한 없이 다양한 작업을 하는 것이 특징이다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/0_odd_">www.instagram.com/0_odd_uu</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf23',
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
