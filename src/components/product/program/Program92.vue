<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class92-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.1 너드커넥션">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="1월의 덕콘 | 너드커넥션"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 '너드커넥션'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          1월의 덕콘<i class="pipe"></i>너드커넥션
        </h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '너드커넥션'입니다.
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">1월의 덕콘</h3>
        <p>
          22년을 여는 1월의 덕콘도<br>
          다양한 아티스트와 함께합니다.<br>
          라인업에 최애아티스트가 있다면<br>
          눈앞에서 직관하며 응원할 수 있는<br>
          덕콘을 놓치지마세요!
        </p>
        <ul class="desc-list" style="margin-top:32px;">
          <li><em style="font-weight:500;">1월의 덕콘 라인업</em></li>
          <li style="margin-top:4px;"><span class="day" style="width:36px;">1.7</span> 모브닝</li>
          <li><span class="day" style="width:36px;">1.8</span> 터치드</li>
          <li style="margin-top:4px;"><span class="day" style="width:36px;">1.14</span> 안녕바다</li>
          <li><span class="day" style="width:36px;">1.15</span> W24</li>
          <li style="margin-top:4px;"><span class="day" style="width:36px;">1.21</span> 언오피셜보이</li>
          <li><span class="day" style="width:36px;">1.22</span> 너드커넥션</li>
          <li><span class="day" style="width:36px;">1.23</span> 데이브레이크</li>
        </ul>
      </div>
      <div class="details-inner">
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
        <h3 class="subtit" style="margin-top: 40px;">너드커넥션 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class92-conts1.jpg" alt=""></div>
        <p>
          ‘너드커넥션(Nerd Connection)’은 '자신만의 세계에 깊게 몰두한 사람들이 음악을 매개로 연결되어 하나가 되어가는 과정'이라는 의미를 가지고 있습니다.<br>
          “어지러운 세상, 따뜻한 음악”이라는 표어 아래, 그들은 염세적이고 다소 어두운 것들과 그럼에도 아름답게 남는 것들에 대해 노래합니다. 기승전결이 뚜렷한 멜로디와 깊이있는 가사가 어우러진 음악을 통해 너드커넥션만의 밴드 세계관을 구축하고 있습니다.<br>
          2018년 데뷔 직전 탄탄한 실력을 인정받아<br>
          ‘EMERGENZA 세계밴드대회 2018 KOREA’에서 우승을 거머쥐며 독일 ‘Taubertal Festival 2018’ 무대에서 한국 대표로 공연했습니다.<br>
          이후 Mnet 시즌 6에 출연하여 대중들에게도 눈도장을 찍었으며 2021년 보컬 서영주가 JTBC에 출연하며 대중적인 인기를 구가하는 밴드가 되었습니다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 1월 22일(토) 오후 7시</li>
          <li>응모기간 : 1월 10일(월) ~ 1월 16일(일)</li>
          <li>당첨자 발표 : 1월 17일(월) </li>
          <li>장소 : T Factory 2층, 0 Stage</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
            <li>* 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
            <li>* 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
            <li>* 덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
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
  name: 'Program76',
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
