<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class99-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2022.2 안녕하신가영">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="2월의 덕콘 | 안녕하신가영"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 ‘안녕하신가영'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          2월의 덕콘<i class="pipe"></i>안녕하신가영
        </h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">아티스트</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '안녕하신가영'입니다.
        </p>
      </div>
      <div class="details-inner" style="padding-bottom:40px;">
        <h3 class="subtit">2월의 덕콘!</h3>
        <p>
          2월에도 다양한 장르의 특별한 아티스트들과<br>
          함께합니다.<br>
          아티스트가 낸 덕력고사 풀고<br>
          콘서트 초청의 기회를 잡으세요!
        </p>
        <ul class="desc-list" style="margin-top:12px;">
          <li><em style="font-weight:500;">2월의 덕콘 라인업</em></li>
          <li style="margin-top:4px;"><span class="day" style="width:36px;">2.11</span> 안녕하신가영</li>
          <li><span class="day" style="width:36px;">2.25</span> 데자부그룹</li>
          <ul class="texts-list" style="margin-top:0; margin-left:44px;">
          <li>Khundi Panda (쿤디판다)</li>
          <li>으네 (UNE)</li>
          <li>Son Simba (손 심바)</li>
          <li>Viann (비앙)</li>
          <li>최엘비 (CHOILB)</li>
        </ul>
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
        <h3 class="subtit" style="margin-top: 40px;">안녕하신가영 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class99-conts1.jpg" alt=""></div>
        <p>오늘도, 안녕하신가영?</p>
        <p style="margin-top: 22px;">
           &ensp;마치 오래 알고 지낸 사람처럼 자연스럽게 안부를 물어오는, 안부형 뮤지션 '안녕하신가영'.<br>
           &ensp;‘좋아서 하는 밴드’에서 베이시스트로 활동을 시작한 백가영은 4년간의 밴드 생활을 마무리하고, ‘안녕하신가영’이란 이름으로 솔로 활동을 시작했다.<br>
           &ensp;대중적인 멜로디, 섬세한 가사로 ‘인디와 메이저의 훌륭한 공존’이라는 평을 받으며 인디씬의 대표 여성 싱어송라이터로 자리 잡았다.<br>
           &ensp;어쩌면 모두가 비슷한 일상 속에 형식적인 안부를 서로 묻지만, 정작 소홀했던 스스로에게 진심으로 안부를 전하는 노래를 들려준다
        </p>
        <h3 class="subtit" style="margin-top: 40px;">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 2월 11일(금) 오후 7시</li>
          <li>응모기간 : 2월 4일(금) ~ 2월 8일(화)</li>
          <li>당첨자 발표 : 2월 9일(수)</li>
          <li>장소 : T Factory 2층, 0 Stage</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
            <li style="margin-top: 4px;">* 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
            <li style="margin-top: 4px;">* 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
            <li style="margin-top: 4px;">* 덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
          </ul>
        </div>
        <div class="notice" style="margin-top:24px;">
          <h4 class="subtit">방역패스 안내사항</h4>
          <ul class="texts-info">
            <li style="display:flex;">1. 백신 접종 완료자 :<span style="margin-left:4px;">COOV / 카카오톡 /<br>네이버 동의 증명서 / 예방접종 스티커</span></li>
            <li>2. PCR 음성 확인서 (48시간 이내)</li>
            <li>3. 만 18세 이하 청소년</li>
            <li>4. 확진 후 완치자 (격리해제 확인서)</li>
            <li>5. 백신접종 예외자 (보건소 발급소견서)</li>
          </ul>
          <p class="texts-notice" style="margin-top:20px;">본 클래스/투어/덕콘은 방역수칙 준수를 위해<br>방역패스 인증자에 한해 참여가 가능합니다.</p>
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
  name: 'Program99',
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
</style>
<style lang="scss" scoped>
  .texts-list li:before {
    content: '-' !important;
    margin-left: -9px;
  }
  .texts-info li:nth-of-type(n+2) {
      margin-top: 0px;
  }
</style>
