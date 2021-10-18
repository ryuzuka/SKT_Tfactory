<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class58-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.10 THAMA">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="10월의 덕콘 | THAMA"
          description="[T Factory X FLO 덕콘] 찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 'THAMA'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">10월의 덕콘<i class="pipe"></i>THAMA</h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 'THAMA'입니다.
        </p>
        <p class="desc type2">
          <em>10월의 덕콘</em>
          1<span>7</span>. 허성현(Huh!)<br>
          18. THAMA<br>
          19. 위아더나잇
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">T Factory x FLO 덕콘</h3>
        <div class="thumb"><img src="../../../assets/images/program/class34-conts1.jpg" alt="T Factory x FLO 입덕후콘서트"></div>
        <p>
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트를 소개합니다.<br>
          콘서트가 사라진 요즘, 홍대 인디문화 부흥과 일상의 작은 위로를 전하고자 T Factory에서 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다.<br>
          아티스트가 직접 낸 덕력고사를 통과한 팬들 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
        <ul style="margin-top: 22px;">
          <li>※ 본 콘서트는 코로나19 방역 수칙을 준수하여 진행됩니다.</li>
          <li>※ 사회적 거리두기 단계에 따라 비대면으로 전환될 수 있습니다.</li>
        </ul>
        <h3 class="subtit" style="margin-top: 40px;">THAMA 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class58-conts.jpg" alt=""></div>
        <p>
          2014년 8월 YG에서 주최하고 62개국 1,000여명이 참가한 빅뱅 태양의 ‘눈, 코, 입' 커버 콘테스트 &#60;눈, 코, 입(Eyes, Nose, Lips) COVER PROJECT BY YOU’&#62;에서 준우승을 차지했다.<br>
          개인 유튜브 ‘정민TV(JungminTV)’에 꾸준히 업로드한 커버 영상들로 구독자 약 15,000명을 달성하고 <br>
          본명 ‘jungmin’으로 싱글 [Island], EP [Things I Know]를 발매했다.
        </p>
        <p style="margin-top: 22px;">
          2016년부터 ‘따뜻한 마음’이라는 뜻의 ‘THAMA(따마)’라는 예명으로 활동을 시작했으며 2017년 방탄소년단, 엑소, 태연, 강다니엘 등의 곡을 작업한 실력파 프로듀서 팀 ‘Devine-Channel’에 합류했다.
        </p>
        <p style="margin-top: 22px;">
          2021년, 데뷔 이래 첫 번째 정규 앨범 [DON'T DIE COLORS]를 발매해 오래 전부터 따마가 원했던 R&B 음악을 담아냈으며, 시각적인 즐거움에만 기울어진 미디어와 여러 다른 요소들에 의해 음악이 소비되고 있는 흐름 속에서 오로지 자신만의 그루브와 바이브에만 집중한 앨범임을 보여주고 있다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 10월 23일(토) 오후 8시</li>
          <li>공식 인스타그램(@tfactory_sampler)에서 라이브로 진행</li>
          <li>※ 본 공연은 사회적 거리두기 연장으로 인하여, 비대면으로 전환되었습니다.</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자에게만 개별 연락이 갈 예정입니다.</li>
            <li>* 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
            <li>* 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
    <div class="btn-wrap sticky">
      <a href="#" @click.prevent="clickButton" class="btn-solid">덕콘 보러가기</a>
    </div>
    <program-button v-show="false"></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program58',
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
.texts-list li:nth-child(3):before {
  content: '' !important;
  margin-left: -20px;
}
</style>
