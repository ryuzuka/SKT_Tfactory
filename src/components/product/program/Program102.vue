<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class102-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2022.3 잭킹콩">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="3월의 덕콘 | 잭킹콩"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 ‘잭킹콩'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          3월의 덕콘<i class="pipe"></i>잭킹콩
        </h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">아티스트</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '잭킹콩'입니다.
        </p>
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
        <h3 class="subtit" style="margin-top: 40px;">잭킹콩 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class102-conts1.jpg" alt=""></div>
        <p>
           팀 이름 ‘잭킹콩(JACKINGCONG)’은 추구하는 음악의 리듬을 표현하다가 우연히 ‘잭 킹 콩’이란 소리를 캐치해 팀 이름으로 정하게 되었다. 음악을 들어보면 발랄하고 가볍다고 생각했던 그 이름에 무게가 더해진다. 자신들만의 호흡을 밀도 있게 끌어올리며 음악의 형태를 안정적으로 꾸려간다. 이들을 설명할 수 있는 장르 이름은 몇 개가 있지만, 그보다는 좀 더 현재의 시점에서 자신들만의 방법으로 음악을 풀어내고 있다.
        </p>
        <h3 class="subtit" style="margin-top: 40px;">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 3월 11일(금) 오후 7시</li>
          <li>응모기간 : 2월 28일(월) ~ 3월 6일(일)</li>
          <li>당첨자 발표 : 3월 7일(월)</li>
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
  name: 'Program102',
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
