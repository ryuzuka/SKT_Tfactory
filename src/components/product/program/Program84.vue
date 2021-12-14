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
          title="메타버스에서 나의 아티스트를 만나다 | 던밀스 X ifland 팬미팅"
          description="덕콘만으로는 부족했던 찐팬들을 위해 ifland 팬미팅을 준비했어요."
        ></kakao-share>

        <em class="flag-solid7">MEDIA CLASS</em>
        <h2 class="details-tit">인기 게임 정복하기</h2>
        <div class="tags">
          <span class="flag-basic">게임</span>
        </div>
        <p class="desc type2">[3개월 코스] 프로게이머 팀 코치에게 배우는 LOL</p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          T1 구단의 가장 인기있는 종목인 LOL!<br>
          LOL을 새롭게 시작하거나, 실력이 늘지 않아 고민이신가요?<br>
          프로게이머 팀 코치 출신 크루에게 자신의 수준에 맞게 LOL의 이론부터 실전 인게임 피드백까지 배워보세요!
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <p>현재 수준에 맞게 코스를 선택하세요. 각 코스별 3개월 동안 진행됩니다.</p>
        <ol class="step-list">
          <li style="display:flex;">
            <span style="margin-left:4px;">초급코스 :</span><span style="width:233px; margin-left:3px;">LOL을 처음 시작하거나, 아이언에서 실버 티어의 게이머</span>
          </li>
          <li>
            중급코스 : <span>골드에서 플래티넘 티어의 게이머</span>
          </li>
          <li>
            심화코스 : <span>다이아 티어 이상의 게이머</span>
          </li>
        </ol>
        <h3 class="subtit">추천 대상</h3>
        <p>게임을 좋아하는 중고등학생</p>
        <h3 class="subtit">일정 및 장소</h3>
        <p>
          주 1회, 3시(초급코스) / 6시(중급코스, 심화코스)<br>
          T Factory 2층 T1 Zone
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
        <div class="notice">
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

<style lang="scss">
@import 'src/assets/css/product';
.texts-list li:before {
  content: '-' !important;
  margin-left: -9px;
}
.step-list>li:first-child::before {
    margin: 3px 6px 0 -22px;
}
</style>
