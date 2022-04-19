<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/tuf-tuaf30-slide1.jpg" alt="tuf-tuaf30-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART2"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 이재은"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">
          네가 빛나는 건 너무나<br>자연스러운 일이다.
        </h2>
        <p class="introduce">
          온 우주 속 내가 아무리 작은 존재여도, 온전히 나로서 존재할 때 빛이 남을 표현했다. 사랑하는, 혹은 사랑했던 그대를 부르고 있지만 사실은 사랑하는, 사랑했던, 사랑하고 싶은 나를 노래하고 있다. 나의 우주. 내 우주는 너무 작지만, 나는 꽉 찬 존재가 되고 싶으니까. 나의 우주는 온통 너니까. 네가, 그리고 내가 빛나는 건 너무나 자연스러운 일이다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce">
          벅찬 글자의 나열, 벅찬 그림의 호흡에 청춘의 감정과 인생을 담았다. 문학과 미술은 강한 시너지를 불러온다. 그림에 한 층 더 몰입할 수 있도록, 나의 그림은 문학적 제목과 하나의 몸을 이룬다. 이 세상의 주인공이 내가 아니더라도, 그대가 주인공이 되는 그림을 그리고자 한다. 청춘의 사랑과 감정을 그리는 아티스트 <b>이재은(Lees) 작가</b>이다.
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
  name: 'Tuaf30',
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
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
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
