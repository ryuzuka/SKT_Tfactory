<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class84-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.12 PL">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="[T Factory X T1] LoL Class"
          description="[원포인트레슨] 프로게이머 팀 코치에게 배우는 LoL"
        ></kakao-share>

        <em class="flag-solid7">GAME CLASS</em>
        <h2 class="details-tit">[T Factory X T1] LoL Class</h2>
        <div class="tags">
          <span class="flag-basic">게임</span>
        </div>
        <p class="desc type2">[원포인트레슨] 프로게이머 팀 코치에게 배우는 LOL</p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          T1 구단의 가장 인기있는 종목인 LOL! <br>
          LOL을 새롭게 시작하신분이나 실력이 늘지 않아 고민이신분 있으신가요?<br>
          프로게이머 팀 코치 출신 크루와 함께 LoL을 즐긴 후 실전 인게임 피드백까지 받아보세요!
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <p>현재 수준에 맞게 코스를 선택하세요.</p>
        <ol class="step-list">
          <li class="step-list-li" style="display:flex;">
            <span>입문 :</span><span style="margin-left:3px;">LOL을 처음 시작하시는 분을 위한 LOL에 대한 전반적인 설명과 이론 강의</span>
          </li>
          <li class="step-list-li" style="display:flex;">
            <span>중급 :</span><span style="margin-left:3px;">LOL을 더 잘하고 싶은 분들을 위한 LOL 꿀팁 강의 (CS잘먹는법 + 상황에 맞는 룬, 아이템 선택방법 등)</span>
          </li>
        </ol>
        <h3 class="subtit">추천 대상</h3>
        <ol class="step-list">
          <li style="display:flex;">
            게임을 좋아하는 누구나 (듀오 환영)
          </li>
          <li>
            <span style="margin-left:-1px;">게임내용을 분석 후 어떤 부분이 문제였는지 객관적인 판단이 필요한 분</span>
          </li>
          <li>
            <span style="margin-left:-1px;">난 잘한다고 생각하는데 왜 티어가 안오르는지 궁금하신 분</span>
          </li>
        </ol>
        <h3 class="subtit">클래스 신청 자격</h3>
        <p>
          레벨 30이상인 고객님에 한하여 참여 가능합니다.<br>※ 클래스 시작 이전에 확인하여 레벨이 맞지 않는 경우 클래스 참여에 제한이 있습니다.
        </p>
        <h3 class="subtit">일정 및 장소</h3>
        <p>
          주 2회, T Factory 2층 T1 Zone
        </p>
        <h3 class="subtit">{{ $t('prd.leader-introduction')}}</h3>
        <div class="thumb"><img src="../../../assets/images/program/class84-conts1.jpg" alt=""></div>
        <div class="profile">
          <span>
            <em>GAME SPECIALIST</em>
            Arca<br>
            김영진
          </span>
        </div>
        <ul class="texts-list">
          <li>전 BBQ Olivers 코치</li>
          <li>서라벌게이밍 코치</li>
          <li>SANDBOX#3 코치</li>
        </ul>
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
  name: 'Program84',
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

<style lang="scss" scoped>
@import 'src/assets/css/product';
.texts-list li:before {
  content: '-' !important;
  margin-left: -9px;
}
.step-list>li:before {
    margin: 2px 6px 0 -22px;
}

.step-list li{display: flex;}
.step-list-li span:first-child{white-space: nowrap;}
.step-list-li span:nth-child(2):before {margin-top: 0;}
</style>
