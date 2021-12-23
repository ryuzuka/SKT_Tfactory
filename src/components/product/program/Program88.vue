<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class88-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.1 터치드">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="1월의 덕콘 | 터치드"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 '터치드'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          1월의 덕콘<i class="pipe"></i>터치드
        </h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '터치드'입니다.
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
        <h3 class="subtit" style="margin-top: 40px;">터치드 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class88-conts1.jpg" alt=""></div>
        <p>
          ‘강렬함과 감동의 밴드', ‘새로운 시대를 여는 사운드', ‘2021 주목해야 할 슈퍼루키’<br>
          대한민국의 혼성 5인조 밴드로 멤버 모두 서울예술대학교 실용음악과 동문 출신이다. 강렬한 카리스마와 섬세한 감성이 공존하는 음악을 한다. 특정 장르에 국한되지 않고 다양한 매력을 대중들에게 보여주고 있다.<br>
          2020년 제 31회 유재하 음악경연대회에서 &#60;Blue&#62;라는 곡으로 우승하며 대상을 수상했다. 본 회차는 역사상 처음 밴드형태의 팀 출전을 허용했는데, 터치드가 밴드 타이틀 최초로 대상을 거머쥔 것이다. 이후 경기콘텐츠진흥원 인디스땅스/화성시 Rising Star 4U/평택 전국밴드경연대회에서 연달아 우승하고 현대자동차 CF음악에도 참여하는 등, 대중성과 실력을 검증받았다. 데뷔 싱글로 &#60;새벽별&#62;을 발표하였으며, 현재 EP ‘Purple’ 발매 후 활발한 활동을 이어가는 중이다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 1월 8일(토) 오후 7시</li>
          <li>응모기간 : 12월 27일(월) ~ 1월 2일(일)</li>
          <li>당첨자 발표 : 1월 3일(월) 오후 3시</li>
          <li>장소 : T Factory 2층, 0 Stage</li>
          <li>당첨 인원 : 30명</li>
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
