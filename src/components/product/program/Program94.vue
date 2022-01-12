<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class94-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.1 데이브레이크">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding-bottom:36px">
        <kakao-share
          title="메타버스에서 나의 아티스트를 만나다 | W24 X ifland 팬미팅"
          description="덕콘만으로는 부족했던 찐팬들을 위해 ifland 팬미팅을 준비했어요."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">
          메타버스에서<br>
          나의 아티스트를 만나다<i class="pipe"></i><br>
          W24 X ifland 팬미팅
        </h2>
        <div class="tags">
          <span class="flag-basic">팬미팅</span>
          <span class="flag-basic">쌍방향소통</span>
          <span class="flag-basic">아티스트</span>
        </div>
        <p class="desc type2">
          <em>[ifland X FLO 덕콘]</em>
          덕콘만으로는 부족했던 찐팬들을 위해 ifland 팬미팅을 준비했어요.
        </p>
      </div>
      <div class="details-inner" style="padding-top:36px">
        <h3 class="subtit">1월의 덕콘 - Special Event</h3>
        <p>
          덕콘 라이브만으로는 아쉬웠던 찐펜들을 위해 덕콘이<br>
          깜짝 선물을 준비했습니다. <br>
          메타버스 플랫폼 ifland에서 진행되는 팬미팅을 통해 무대 뒷얘기 부터 그동안 아티스트에게 궁금했던 점들을 물어보세요.
        </p>
        <p>그리고 아티스트와 똑닮은 아바타와 함께 사진도 찍고, 춤추며 색다른 추억을 만들어요.</p>
        <div class="btn-wrap" style="margin: 24px 0 16px;"><button @click="clickButton('instagram')" class="btn-line big">공식 인스타그램 방문하기</button></div>
      </div>
      <div class="details-inner" style="padding-top:30px">
        <h3 class="subtit">W24 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class94-conts1.jpg" alt=""></div>
        <p>
          2018년 '점퍼 챙겨 나와'로 데뷔한 W24(World 24hours)는 김윤수(리더/기타), 김종길(드럼), 정호원(보컬), 박아론(키보드)으로 구성된 4인조 밴드로<br>
          앨범의 모든 곡을 직접 작사, 작곡은 물론 레코딩과 프로듀싱을 직접 하는 실력파 아티스트다.<br>
          특히 보컬 정호원이 칠레에서 태어나 19년간 남미에서 성장하여 스페인어와 영어에도 능통해 데뷔 초부터 한국은 물론 라틴 아메리카, 유럽, 미국 등 해외 팬들에게도 큰 사랑을 받으며 글로벌 K-POP 밴드로 성장 중이다.<br>
          2020년 아시아 7개국, 8개 방송사가 최초로 공동 제작한 '아시안 탑 밴드(ATB / Asian Top Band)' 에서 최종 우승을 차지하며 명실 상부한 아시안 탑 밴드로<br>
          인정을 받았으며, 2021년 한국콘텐츠진흥원에서 진행하는 MUSE ON 아티스트로 선정되어 활발한 활동을 펼치고 있다.<br>
          스스로의 한계를 넘어 계속해서 새로운 도전을 멈추지 않는 W24는 코로나19 시대에도 '언택트 콘서트 WWW(World Wide Waymaker)', 홈 레코딩 프로젝트, 자체제작 웹 예능 '먹고 즐기고 노래하라' 등 다양한 컨텐츠를 통해 색다른 매력을 선보이고 있다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 2022년 1월 15일(토) 오후 9시</li>
        </ul>
        <ul class="texts-info">
          <li style="margin-top:8px;">* ifland 주소는 추후 공지 예정</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info">
            <li>* 본 팬미팅으로 선착순 입장으로 진행되며, 정원 마감 시 입장이 제한될 수 있습니다.</li>
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
  name: 'Program94',
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
