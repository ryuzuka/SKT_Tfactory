<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class95-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.1 데이브레이크">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding-bottom:36px">
        <kakao-share
          title="메타버스에서 나의 아티스트를 만나다 | 언오피셜보이 X ifland 팬미팅"
          description="덕콘만으로는 부족했던 찐팬들을 위해 ifland 팬미팅을 준비했어요."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          메타버스에서<br>
          나의 아티스트를 만나다<i class="pipe"></i><br>
          언오피셜보이 X ifland 팬미팅
        </h2>
        <div class="tags">
          <span class="flag-basic">팬미팅</span>
          <span class="flag-basic">쌍방향소통</span>
          <span class="flag-basic">아티스트</span>
        </div>
        <p class="desc type2">
          <em>[ifland X FLO 덕콘]</em>
          덕콘만으로는 부족했던 찐팬들을 위해 ifland 팬미팅을 준비했어요.
        </p>
      </div>
      <div class="details-inner" style="padding-top:36px">
        <h3 class="subtit">1월의 덕콘 - Special Event</h3>
        <p>
          덕콘 라이브만으로는 아쉬웠던 찐펜들을 위해 덕콘이<br>
          깜짝 선물을 준비했습니다. <br>
          메타버스 플랫폼 ifland에서 진행되는 팬미팅을 통해 무대 뒷얘기 부터 그동안 아티스트에게 궁금했던 점들을 물어보세요.
        </p>
        <p>그리고 아티스트와 똑닮은 아바타와 함께 사진도 찍고, 춤추며 색다른 추억을 만들어요.</p>
        <div class="btn-wrap" style="margin: 24px 0 16px;"><button @click="clickButton('instagram')" class="btn-line big">공식 인스타그램 방문하기</button></div>
      </div>
      <div class="details-inner" style="padding-top:30px">
        <h3 class="subtit">언오피셜보이 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class95-conts1.jpg" alt=""></div>
        <p>
          "unofficialboyy (언오피셜보이)"는 현재 98년생 만 23세의 나이로 올해 2021년 한 해 동안 정규 2집 [그물, 덫, 발사대기, 포획] 과 정규 3집 [이수린ackermann]그리고 팀 D.O.G. 컴필레이션 앨범 [drugonline gate] 을 발매하고, 쇼미더머니 10 까지 출연하여 준수한 성적을 거두는 등 활발한 활동을 보이며 장르팬들과 대중들에게 많은 인상을 남겼다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 2022년 1월 21일(금) 오후 9시</li>
        </ul>
        <ul class="texts-info">
          <li style="margin-top:8px;">* ifland 주소는 추후 공지 예정</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 팬미팅으로 선착순 입장으로 진행되며, 정원 마감 시 입장이 제한될 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
    <program-button></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program95',
  components: {
    KakaoShare,
    ProgramButton
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
.texts-list li:before {
  content: '-' !important;
  margin-left: -9px;
}
.texts-info li:nth-of-type(n+2) {
    margin-top: 0px;
}
</style>
