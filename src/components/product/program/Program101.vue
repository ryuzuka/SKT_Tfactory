<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class101-slide1.jpg" alt="T Factory X FLO 덕후콘">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="3월의 덕콘"
          description="찐덕들만 초청하여 진행하는 덕콘."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">3월의 덕콘</h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">아티스트</span>
        </div>
      </div>
      <div class="details-inner" style="padding-bottom:40px;">
        <h3 class="subtit">3월의 덕콘</h3>
        <p>
          3월의 덕콘도 다양한 아티스트와 함께합니다.<br>
          라인업에 최애아티스트가 있다면<br>
          눈앞에서 직관하며 응원할 수 있는<br>
          덕콘을 놓치지마세요!
        </p>
        <ul class="desc-list" style="margin-top:12px;">
          <li><em style="font-weight:500;">3월의 덕콘 라인업</em></li>
          <li style="margin-top:4px;"><span class="day" style="width:inherit; margin-right:16px">3.11</span>잭킹콩</li>
          <li><span class="day" style="width:inherit; margin-right:16px">3.25</span>솔루션스</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 30px 20px 32px;">
        <h3 class="subtit">T Factory x FLO 덕콘(THECON)</h3>
        <div class="thumb"><img src="../../../assets/images/program/class86-conts1.jpg" alt="T Factory x FLO 입덕후콘서트"></div>
        <p>
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트를 소개합니다.<br>
          콘서트가 사라진 요즘, 홍대 인디문화 부흥과 일상의 작은 위로를 전하고자 T Factory에서 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다.<br>
          아티스트가 직접 낸 덕력고사를 통과한 팬들 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
        <ul style="margin-top: 22px;">
          <li>※ 본 콘서트는 코로나19 방역 수칙을 준수하여 진행됩니다.</li>
          <li>※ 사회적 거리두기 단계에 따라 비대면으로 전환될 수 있습니다.</li>
        </ul>
        <h3 class="subtit" style="margin-top: 40px;">3월의 덕콘 라인업</h3>
        <program-lineup
            :class-id-list="['150', '151']"
        ></program-lineup>
      </div>
    </div>
    <!-- //details -->

	  <!-- button set -->
	  <program-button style="display: none"></program-button>
	  <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import ProgramLineup from './components/ProgramLineup'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program101',
  components: {
    KakaoShare,
    ProgramLineup,
	  ProgramButton
  },
  data () {
    return {
      isProgramNull: false
    }
  },
  created () {
  },
  mounted () {
    this.$on('program-null', e => {
      this.isProgramNull = true
    })
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
  .texts-list li:nth-child(2):before {
    content: '-' !important;
    margin-left: -9px;
  }
</style>
