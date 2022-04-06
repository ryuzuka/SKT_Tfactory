<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class79-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.12 PL">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="12월의 덕콘 | PL"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 'PL'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          12월의 덕콘<i class="pipe"></i>PL
        </h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 'PL'입니다.
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
          <li style="margin-top:4px;"><span class="day">12.25</span> 저드&nbsp;&nbsp;&nbsp;페퍼톤스</li>
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
        <h3 class="subtit" style="margin-top: 40px;">PL 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class79-conts1.jpg" alt=""></div>
        <p>
          음악을 통해 PL은 낭만을 잊지 말자고 노래하며, 바쁘게 돌아가는 일상 속에서 잠시 쉬어 있었던 꿈과 사랑을 한 번 더 생각해보게 하는 음악을 만들어 냅니다.<br>
          모두가 좋아할만한 쉬운 멜로디와 R&B, 그리고 팝 음악을 기본으로 PL(피엘)은 2018년 7월 '새벽 2시'라는 곡을 발매하며 데뷔했습니다.<br>
          다음 해 발매된 'MALIBU'라는 곡이 온라인에서 큰 인기와 입소문을 얻었고, 이후 보다 적극적인 행보를 보이고 있습니다.
        </p>
        <p style="margin-top:22px;">
          2020년 EP [LA LA LAND]와 [TRUMAN SHOW]를 발매하고, 2021년 7월에는 EP [WALLFLOWER]를 발매했습니다. 그리고 스푼라디오 오리지널 콘텐츠<br>
          DJ로 활동하고 있으며, 이후에는 여러 드라마의 OST를 부름으로써 많은 사람들에게 이름을 알려가고 있습니다. 또한 단독 콘서트를 개최하는 동시에<br>
          매진이 되는 등 라이브 무대로도 그 영역을 넓혀가는 중입니다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 12월 26일(일) 오후 5시</li>
          <li>응모기간 : 12월 14일(화) ~ 12월 19일(일)</li>
          <li>당첨자 발표 : 12월 20일(월) 오후 3시</li>
          <li>장소 : T Factory 2층, 0 Stage</li>
          <li>당첨 인원 : 30명</li>
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
</style>
