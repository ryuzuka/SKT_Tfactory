<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf35-slide1.jpg" alt="tuf-tuaf35-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 조영인"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          피어나는 우리의 우주
        </h2>
        <p class="introduce">
          비록 삶이 깜깜하더라도 너의 말이 별이 되어 뚫린 상처 안을 채워준다. 이제 나의 우주는 찬란하다. 나의 세상이 아니라 너와 나, 우리의 세상이 되었을 때 우주는 꽃피운다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>조영인 작가</b>는 하늘과 같이 소중하다'라는 뜻을 가진 '반'과 '아'티스트를 합친 '반아'로 그림을 그리고 있다. 노래와 이야기를 그리고 있으며, 작가는 이 그림을 보는 모두에게 따뜻한 위로가 전달되어 오늘의 하루가 소중해서 내일도 기대가 되기를 바란다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="www.instagram.com/van_a_illustration">www.instagram.com/van_a_illustration</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'

export default {
  name: 'Tuaf35',
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
