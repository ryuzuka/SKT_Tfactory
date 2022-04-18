<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img src="../../../../assets/images/program/tuf-tuaf15-slide1.jpg" alt="tuf-tuaf15-slide1">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 40px 20px;">
        <kakao-share
         title="T University Art Festival - PART1"
          description="대학생들의 작품으로 꾸며진 팝업 전시 - 박주홍"
        ></kakao-share>

        <em class="main-subtitle">작품소개</em>
        <h2 class="main-title" style="margin-top: 4px;">위잉위잉</h2>
        <p class="introduce">
          벌레들이 내 방에 들어온 순간 나만의 세상을 침범한 벌레들을 죽이며 양심의 가책을 느꼈고, 그 벌레 들에게 미안함을 전하기 위해 영정사진으로 기록하듯이 작업했다. 그렇게 기록된 그림들은 내 세상의 일부로 받아들여지며, 채워져 간다. 이 작품은 내 방의 침범자였던 벌레들을 나의 세상으로 끌어들이는 일련의 과정들 중 그 벌레들을 발견하고 잡기 직전 까지를 그려낸 것이다.
       </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">작가소개</h2>
        <p class="introduce" style="margin-bottom: 24px;">
          <b>박주홍 작가</b>는 숙명여자대학교 서양화과 휴학 중이며, Ad libitum전, emotion our전, 인천미술한마당 축제 2020, 2022, 인천환경미술제 아트 브릿지전 등 참가했다.
        </p>
        <div class="instagram">
          <span class="sns">작가 SNS</span>
          <a href="#" @click.prevent="snsLink('https://www.instagram.com/_hongsi_art')">www.instagram.com/_hongsi_art</a>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tuaf15',
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
    snsLink (snsUrl) {
      const mobileOS = this.$cookies.get('platform')
      if (mobileOS === 'A' || mobileOS === 'I') {
        NATIVE.sysBrowserOpen(mobileOS, snsUrl)
      } else {
        window.open(snsUrl, '_blank')
      }
    },
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
