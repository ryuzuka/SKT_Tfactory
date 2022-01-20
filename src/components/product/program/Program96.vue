<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class96-slide1.jpg" alt="[T Factory X T1] LoL Class 런칭기념 l 'Piglet' 채광진 코치 초청 Class">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="[T Factory X T1] LoL Class 런칭기념 l 'Piglet' 채광진 코치 초청 Class"
          description="[T Factory X T1] LoL Class 런칭 기념으로 'Piglet' 채광진님과 함께하는 Special Event가 진행됩니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          [T Factory X T1] <br>
          LoL Class 런칭기념 |<br>
          'Piglet' 채광진 코치 초청 Class
          </h2>
        <div class="tags">
          <span class="flag-basic">팬미팅</span>
          <span class="flag-basic">LoL</span>
          <span class="flag-basic">Game</span>
        </div>
        <p class="desc type2">[T Factory X T1] LoL Class 런칭 기념으로 'Piglet' 채광진님과 함께하는 Special Event가 진행됩니다.</p>
      </div>
      <div class="details-inner" style="padding-top:30px;">
        <h3 class="subtit">Special Event 구성</h3>
        <ol class="step-list">
          <li style="display:flex;">
            LoL 잘 하는 방법 강의<br>
            (CS 잘 먹는 법, 라인 관리 하는 법 등)
          </li>
          <li>
            <span style="margin-left:-1px;">
              다함께 플레이 돌려보며 Piglet 의 LoL 꿀팁 전수 및 Q&A
            </span>
          </li>
        </ol>

        <h3 class="subtit">PIGLET 채광진 코치 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class96-conts1.jpg" alt=""></div>

        <p style="margin-top:15px;">
          '13.02 ~ '14.09 SK Telecom T1 K<br>
          '14.10 ~ '17.11 Team Liquid<br>
          '18.01 ~ '19.06 Clutch Gaming<br>
          '21.12 ~ 현재 T1 Esports Academy Coach
        </p>

        <h3 class="subtit" style="margin-bottom:9px;">응모 기간</h3>
        <p style="margin-top:0;">
          1월 18일 (화) ~ 1월 23일(일)<br><br>
          당첨자발표<br>
          1월 24일(월) 오후3시
        </p>

        <h3 class="subtit" style="margin-bottom:9px;">일정 및 장소</h3>
        <p style="margin-top:0;">
          1월 28일(금) 18시, T Factory 0 Stage
        </p>
        <p style="display:flex;">
          <span style="margin-right:3px;">※</span>
          본 행사는 T Factory를 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다.<br>
          (체크인 가능 연령 : 만 14세 이상)
        </p>

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
  name: 'Program96',
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
.step-list>li:before {
    margin: 2px 6px 0 -22px;
}

.step-list li{display: flex; margin-bottom: 8px;}
.step-list-li span:first-child{white-space: nowrap;}
.step-list-li span:nth-child(2):before {margin-top: 0;}

</style>
