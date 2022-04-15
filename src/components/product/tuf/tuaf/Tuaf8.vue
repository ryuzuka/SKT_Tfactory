<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf8-slide1.jpg" alt="tuf-tuaf8-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 김서영"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">맥주 축제</h2>
        <p class="introduce">
          내려 앉아있지만 붕 떠있는 식탁 위 축제가 열렸다.<br>
          축제는 중력을 없애 식탁을 우주로 만들어 버렸다.<br>
          우주에서 맥주와 과일들은 산산 조각이 나서 별이 되어 부서진다.<br>
          실존하는 현실은 정적인 모습으로, 그 순간 느낀 감각은 그림자로 표현했다.
       </p>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf8-cont1.jpg" alt="tuf-tuaf8-cont1">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin-top: 40px;">꽃 병</h2>
          <p class="introduce">
            마음까지 다 담아버린 꽃병엔 그림자까지 가득 차버렸다
          </p>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>김서영 작가</b>는 우리가 평소에 감각적으로는 느낄 수 있지만 시각적으로 분명하게 마주하지 못했던 것들을 마주하는 그 순간의 색을 강조하고 표현함으로써 보는 사람으로 하여금 감각을 일깨워줄 수 있는 작업들을 하고 있다. 서울에서 태어나 자라면서 다양한 예술을 접하면서, 자연스럽게 꿈꾸며 목표했던 한국예술종합학교에서 멀티미디어영상과를 전공하고 있다. 전시 경력으로는 에코락 갤러리에서 주최한 &lt;프런티어 프로젝트 2019전&gt;, 사이아트 갤러리에서 주최한 &lt;어두움이 덮은 ( )&gt;, &lt;Beyond Behind&gt;등이 있다. 종합 예술가를 목표로 현재에는 일러스트와 애니메이션과 디자인 등 다방면으로 폭넓은 작업을 진행하면서 활동하고 있다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/whyyyyyoung">www.instagram.com/whyyyyyoung</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf8',
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
