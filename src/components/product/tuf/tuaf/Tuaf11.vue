<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf11-slide1.jpg" alt="tuf-tuaf11-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김진우"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">번짐을 통해<br>표현한 우주(Universe)</h2>
        <p class="introduce">
          우주는 무한한 가능성의 공간이라고 생각한다.<br>
          먹의 순수한 번짐은 작업의 시작을 알려줌과 동시에 앞으로의 작업에 대한 무한한 가능성을 의미한다.<br>
          우리가 일상에서 흔히 볼 수 있는 자연의 색감과 먹의 번짐으로 표현한 우주를 통해 자신에 대한 무한한 가능성과 편안하면서도 순수한 먹의 번짐을 감상해 주시길 바란다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>김진우 작가</b>는 단국대학교에서 동양화를 전공하고 있으며, 평소 자연물이나 사물을 먹으로 표현하는 것을 좋아하고, 먹에 대한 순수한 번짐이 작업을 하는 데 있어 작가를 매료시킨다.<br>
          이번 작품은 우주 공간을 연상하게 하는 먹의 번짐을 연출하여 우주와 자기 자신에 대한 무한한 가능성을 표현했다.
        </p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf11',
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
