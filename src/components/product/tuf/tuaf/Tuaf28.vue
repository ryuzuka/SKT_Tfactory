<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf28-slide1.jpg" alt="tuf-tuaf28-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 이상우 x 조은서"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          muzu – 우주돌
        </h2>
        <p class="introduce">
          사무실을 들어섰을 때, 모습을 바꾼 그가 나타났다. 검은 모자와 조끼 차림의 배달원 같은 모습으로 있어서 처음에는 못 알아봤지만, 옅은 회색의 눈동자를 보자마자 그임을 알 수 있었다. 웬걸, 나를 보자마자 다급한 목소리로 어깨를 붙잡고, 손에 무언가를 쥐여준다. 다시 모험을 시작하려는 소년의 목소리가 들린다. ‘지켜줘’. 그 한마디가<br> 누군가에게는 움츠러든 어깨를 펴고, 가슴을 뛰게 만든다. 나에게, 돌은 안중에도 없다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>이상우 x 조은서. 작가</b>는 무주(muzu)라는 세계관에 기반해 조그맣고 다양한 오브제를 만든다. 사람들은 오브제에 입혀진 이야기를 읽고 저마다의 방식으로 무주를 상상하고 탐험하게 된다.
        </p>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tuaf28',
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
