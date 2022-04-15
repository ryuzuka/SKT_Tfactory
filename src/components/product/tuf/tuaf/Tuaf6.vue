<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf6-slide1.jpg" alt="tuf-tuaf6-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김미효"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">다이버(Diver)</h2>
        <p class="introduce">
          욕실 내부를 배경으로 욕조 속으로 빠져들고 있는 인물의 모습이다. 내부의 전반 적인 색상은 초록색의 계열로 안정감을 주도록 했다. 욕조 속의 물은 거울에 비친, 바닷속으 로 빠져드는 매개체로 신비로운 느낌이길 원해 보라색의 계열을 사용했다. 작품 속의 인물은 욕조 속으로 빠졌으나, 거울에 비친 모습은 바닷 속이다. 이는 더 넓은 세계를 꿈꾸는 염원을 담고 있다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          작가는 계원예술대학교 순수미술과 재학 1998년생 <b>김미효</b>이다.<br>
          "나를 둘러싸고 있는 세계는 극히 일부이다. 그러나 그 <br>일부 속에서 열심히 항해하고 있다. 항해의 여정 중, 꿈<br>꾸는 모든 것을 그린다. 그리는 모든 것은 세계의 일부가 된다. "
        </p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf6',
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
}
</style>
