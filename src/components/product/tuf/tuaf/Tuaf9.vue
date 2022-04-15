<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf9-slide1.jpg" alt="tuf-tuaf9-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김우진"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">생각하는 건 당신 혼자</h2>
        <p class="introduce">
          여기까지 우리는 생각했다. 생각. 생각이란 독자적인 나만의 세상이다.<br>
          그 누구도 간섭하기 어렵고 오로지 ‘나’라는 주체가 허락한 것들만 존재한다.<br>
          멋지고 아름다운 일들을 꿈꾸며 생각하고 이루어 내보자.
          그저 생각에 그친다면 심지 않은 꽃에 불과하다.<br>
          기름진 열매 속 우리의 꿈이 마르기 전에 땅에 심고 피워 내길 바란다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          서울예술대학교 시각디자인과 재학중인 <b>김우진 작가</b>는 주로 펜을 사용하여 일러스트를 그리고 있으며 평소에 했던 상상이나 꿨던 꿈을 주제로 그림을 그린다.<br>
          일러스트와 더불어 글도 함께 쓰고 있어, 함께 본다면 더 깊은 감상에 도움을 줄 수 있으며,<br>
          일러스트를 보는 사람들로 하여금 자신들의 내면을 다시 바라보고 솔직해지길 바란다고 한다.
        </p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf9',
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
