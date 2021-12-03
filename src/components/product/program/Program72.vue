<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class72-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.12 브로콜리너마저">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <!-- <kakao-share
          title="11월의 덕콘 | 아메바컬쳐(with SOLE, THAMA, Huh!, snzae)"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 '아메바컬쳐'입니다."
        ></kakao-share> -->

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          12월의 덕콘<i class="pipe"></i>브로콜리너마저
        </h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '브로콜리너마저'입니다.
        </p>
        <p class="desc type2" style="margin-top:24px">
          <em>12월의 덕콘 - 덕콘 연말정산</em>
          21년 3월에 시작하여 23팀과 함께한 덕콘.<br>
          2021년을 마무리하며,<br>
          더 풍성한 덕심저격 아티스트들과<br>
          다시보고 싶은 덕콘 아티스트들과 함께합니다.
        </p>
        <ul class="desc-list">
          <li><em>12월의 덕콘 라인업</em></li>
          <li><span class="day">12.4</span> 김오키새턴발라드&nbsp;&nbsp;&nbsp;아도이</li>
          <li><span class="day">12.5</span> 쏠&nbsp;&nbsp;&nbsp;따마&nbsp;&nbsp;&nbsp;선재&nbsp;&nbsp;&nbsp;허성현</li>
          <li style="margin-top:4px;"><span class="day">12.10</span> 크라잉넛&nbsp;&nbsp;&nbsp;불고기디스코</li>
          <li><span class="day">12.11</span> 최엘비&nbsp;&nbsp;&nbsp;브로콜리너마저</li>
          <li style="margin-top:4px;"><span class="day">12.18</span> 디핵&nbsp;&nbsp;&nbsp;던밀스</li>
          <li><span class="day">12.19</span> 한올&nbsp;&nbsp;&nbsp;후추스&nbsp;&nbsp;&nbsp;프롬</li>
          <li style="margin-top:4px;"><span class="day">12.25</span> 저드&nbsp;&nbsp;&nbsp;<strong>(아티스트비공개)*</strong></li>
          <li><span class="day">12.26</span> PL&nbsp;&nbsp;&nbsp;나상현씨밴드</li>
        </ul>
        <p class="texts-notice">
          12월 25일 크리스마스 선물처럼 함께할<br>
          다시보고 싶은 덕콘 1위 아티스트는?<br>
          지금 공식인스타그램에서 확인하세요.
        </p>
        <div class="btn-wrap" style="margin: 24px 0 18px;"><button @click="clickButton" class="btn-line big">공식 인스타그램 방문하기</button></div>
      </div>
      <div class="details-inner">
        <h3 class="subtit">T Factory x FLO 덕콘(THECON)</h3>
        <div class="thumb"><img src="../../../assets/images/program/class65-conts1.jpg" alt="T Factory x FLO 입덕후콘서트"></div>
        <p>
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트를 소개합니다.<br>
          콘서트가 사라진 요즘, 홍대 인디문화 부흥과 일상의 작은 위로를 전하고자 T Factory에서 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다.<br>
          아티스트가 직접 낸 덕력고사를 통과한 팬들 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
        <ul style="margin-top: 22px;">
          <li>※ 본 콘서트는 코로나19 방역 수칙을 준수하여 진행됩니다.</li>
          <li>※ 사회적 거리두기 단계에 따라 비대면으로 전환될 수 있습니다.</li>
        </ul>
        <h3 class="subtit" style="margin-top: 40px;">브로콜리너마저 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class72-conts1.jpg" alt=""></div>
        <p>
          많은 이들에게 ‘청춘을 노래하는 밴드’ 로 널리 알려진 밴드 브로콜리너마저는 2008년 데뷔 이후 1집 ’보편적인 노래’, 2집 ‘졸업’ 으로 많은 사랑을 받았으며 최근 3집 ‘속물들’ 을 발표하며 활발히 활동하고 있다.<br>
          이제는 ‘청춘’을 넘어서 ‘삶’ 을 이야기하는 밴드로서, 진솔한 메시지를 담은 울림이 있는 가사와 담백한 사운드로 대체 불가능한 감성을 꾸준히 선보이고 있다.<br>
          2010년과 2011년 연속으로 한국 대중음악상 모던록 노래 부분을 수상하였으며, ‘보편적인 노래’ 는 ‘시인들이 뽑은 가사가 아름다운 노래’ 로 꼽히기도 했다.<br>
          멤버는 덕원(베이스), 류지(드럼), 잔디(건반).
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 12월 11일(토) 오후 7시</li>
          <li>응모기간 : 12월 3일(금) ~ 12월 7일(화)</li>
          <li>당첨자 발표 : 12월 8일(수)</li>
          <li>장소 : T Factory 2층, 0 Stage</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
            <li>* 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
            <li>* 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
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
  name: 'Program72',
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
</style>
