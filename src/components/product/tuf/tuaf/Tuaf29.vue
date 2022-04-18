<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf29-slide1.jpg" alt="tuf-tuaf29-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 이세현"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          사랑받기
        </h2>
        <p class="introduce">
          딱히 무언가를 하지 않아도 사랑받는 사람의 모습이다.<br> 그 사람은 나일 수도, 당신일 수도 있다. 항상 딱히 무언가를 하지 않아도 무조건적인 사랑을 받고 있는 ‘나’와 그 사랑을 주는 존재. 그 존재는 무엇이 되었든 나의 세상, 나의 우주가 된다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>이세현 작가</b>는 아득바득 살아가는 현실 속에서 사람들이 흘리고 다니는 사랑을 줍는다. 평소 그림 속에 ‘아이’라는 이름의 흰색 캐릭터를 등장시켜 아이스러움, 생명, 사랑과 나(I)를 담아 사람들과 소통하려 한다. 작가는 자신이 줍게 된 사랑들로 각자 나를 사랑하고 보듬는 데에 도움이 되었으면 하고 바란다.
        </p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf29',
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
  padding: 40px 20px 60px;
  }
  .introduce{
    margin-top: 0;
    line-height: 20px;
  }
}
</style>
