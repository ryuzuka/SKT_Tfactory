<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class61-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.10 허성현(Huh!)">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="11월의 덕콘 | 김제형"
          description="[T Factory X FLO 덕콘] 찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 '김제형'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">11월의 덕콘<i class="pipe"></i>김제형</h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '김제형'입니다.
        </p>
        <p class="desc type2">
          <em>11월의 덕콘</em>
          20. 딕펑스<br>
          21. 김제형<br>
          22. 너드커넥션<br>
          23. 윤현상
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
        <h3 class="subtit" style="margin-top: 40px;">김제형 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class61-conts.jpg" alt=""></div>
        <p>
          2017년 EP &#60;곡예&#62;로 본격적인 음악활동을 시작한 김제형은 2020년 포크, 뉴 잭 스윙, 팝 등 다양한 장르를 결합한 첫 정규앨범 &#60;사치&#62;를 통해 마니아들 사이에서 입소문을 타며 이름을 알리기 시작했다.<br>
          김제형이 직접 작사, 작곡을 한 노래로만 가득 찬 앨범 &#60;사치&#62;와 그 타이틀곡 ‘실패담’은 [2021 한국대중음악상]의 ‘최우수 포크 -음반, 노래 두 부문에 모두 노미네이트되며 그의 음악성을 다시 한 번 각인시켰다.<br>
          담담한 목소리와 대비되는 여러 장르를 넘나드는 화려한 편곡 그리고 예측불허의 댄스까지,<br>
          무경계 싱어송라이터 김제형이 우리에게 들려주고 싶은 노래로 가득 찬 그의 즐거운 음악세계에 주목해보자!
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 11월 12일(금) 오후 8시</li>
          <li>응모기간 : 11월 1일(월) ~ 11월 7일(일)</li>
          <li>당첨자 발표 : 11월 8일(월)</li>
          <li>장소 : T Factory 2층, 0 Stage</li>
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
    <program-button :visible="false"></program-button>
    <div class="btn-wrap sticky">
      <a href="#" @click.prevent="clickButton" class="btn-solid">덕콘 보러가기</a>
    </div>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program61',
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
