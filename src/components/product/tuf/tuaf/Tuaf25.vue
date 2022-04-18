<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf25-slide1.jpg" alt="tuf-tuaf25-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 윤석원"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">가장 깊은 밤에<br>더 빛나는 별빛</h2>
        <p class="introduce">
          본 작품은 앨범 리스트 컨셉으로 구성한 시리즈 작이다.<br>
          가수 방탄소년단 MAP OF THE SOUL: PERSONA 앨범 중 “소우주“라는 곡에서 영감을 받았다.<br>
          노래 가사 중 “가장 깊은 밤에 더 빛나는 별빛”이라는 구절을 듣고 새벽에 그림을 그리다가 우연히 창밖을 보았는데 늦은 밤에도 여전히 잠들지 않는<br>
          사람들의 불빛이 노래 가사와 맞아 떨어지는 느낌을 받게 되어 위 작품을 그리게 되었다.
       </p>
      </div>
      <div class="details-header" style="padding: 0 20px 40px;">
        <div class="image">
          <img src="../../../../assets/images/program/tuf-tuaf25-cont1.jpg" alt="tuf-tuaf25-cont1">
        </div>
        <div class="art_desc">
          <h2 class="main-title" style="margin-top: 40px;">서로가 본 서로의 빛</h2>
          <p class="introduce">
            본 작품은 NEVERTHELESS 시리즈를 마무리하는 작품이다.<br>
            그림에서 우측 상단에 보이는 형태는 “꿈”이라는 추상적 단어를 형상화 시킨 것이다.<br>
            좌측 하단에 보이는 인물은 꿈을 찾는 우리이며 그것을 쫓아간다는 표현보다는 꿈이라는 것 또한 우리들을 찾고 있고 훗날 만나게 되는 날에는 내가 찾은 것이 아닌 서로가 서로를 찾고 있었다는 것을 전달하려 했다.
          </p>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          <b>윤석원 작가</b>는 계원예술대학교 공간연출학과에 재학중이다.
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
  name: 'Tuaf25',
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
