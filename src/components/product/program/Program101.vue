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
            :class-id-list="['142', '143']"
        ></program-lineup>
        <ul class="list-program wide" style="margin-top: 12px;">
          <li>
            <a href="./program102">
              <div class="thumb">
                <img src="../../../assets/images/program/class101-conts1.jpg" alt="">
                </div>
              <div class="info">
                <span class="flag-solid8">모집중</span>
                <p class="tit"><em>잭킹콩</em></p>
                <p class="subtext">3월 11일(금)</p>
              </div>
            </a>
          </li>
          <li>
            <a href="./program103">
              <div class="thumb">
                <img src="../../../assets/images/program/class101-conts2.jpg" alt="">
                </div>
              <div class="info">
                <span class="flag-solid8">모집중</span>
                <p class="tit"><em>솔루션스</em></p>
                <p class="subtext">3월 25일(토)</p>
              </div>
            </a>
          </li>
        </ul>
        <div class="notice" style="margin-top:40px;">
          <h4 class="subtit">방역패스 안내사항</h4>
          <ul class="texts-info">
            <li style="display:flex;">1. 백신 접종 완료자 :<span style="margin-left:4px;">COOV / 카카오톡 /<br>네이버 동의 증명서 / 예방접종 스티커</span></li>
            <li style="margin-top:0;">2. PCR 음성 확인서 (48시간 이내)</li>
            <li style="margin-top:0;">3. 만 18세 이하 청소년</li>
            <li style="margin-top:0;">4. 확진 후 완치자 (격리해제 확인서)</li>
            <li style="margin-top:0;">5. 백신접종 예외자 (보건소 발급소견서)</li>
          </ul>
          <p class="texts-notice" style="margin-top:20px;">본 클래스/투어/덕콘은 방역수칙 준수를 위해<br>방역패스 인증자에 한해 참여가 가능합니다.</p>
          <p class="texts-notice" style="margin-top:8px;">덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</p>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramLineup from './components/ProgramLineup'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program101',
  components: {
    KakaoShare,
    ProgramLineup
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
