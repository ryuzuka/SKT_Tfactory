<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class59-slide1.jpg" alt="T Factory X FLO 덕후콘 | 2021.10 허성현(Huh!)">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="10월의 덕콘 | 허성현(Huh!)"
          description="[T Factory X FLO 덕콘] 찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 '허성현(Huh!)'입니다."
        ></kakao-share>

        <em class="flag-solid7">CONCERT</em>
        <h2 class="details-tit">10월의 덕콘<i class="pipe"></i>허성현(Huh!)</h2>
        <div class="tags">
          <span class="flag-basic">공연관람형</span>
          <span class="flag-basic">소규모콘서트</span>
          <span class="flag-basic">인디밴드</span>
        </div>
        <p class="desc type2">
          <em>[T Factory X FLO 덕콘]</em>
          찐덕들만 초청하여 진행하는 덕콘.<br>
          이번 기출영역은 '허성현(Huh!)'입니다.
        </p>
        <p class="desc type2">
          <em>10월의 덕콘</em>
          1<span>7</span>. 허성현(Huh!)<br>
          18. THAMA<br>
          19. 위아더나잇
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
        <h3 class="subtit" style="margin-top: 40px;">허성현(Huh!) 소개</h3>
        <div class="thumb"><img src="../../../assets/images/program/class59-conts.jpg" alt=""></div>
        <p>
          귀여운 외모 속에 숨겨진 퇴폐미로 ‘작은 거인’이라는 별명을 가지고, 개성 강한 보이스와 독특한 플로우로 ‘힙합 악동’, ‘힙합 루키’로 떠오르며 씬에서 주목 받고 있는 허성현은 2020년 Mnet 에서 다와이(다이나믹 듀오 X 비와이) 팀에 합류해 경연을 펼쳤으며, 프로듀서 & 팀원들과 함께 ‘윈윈 (Feat. 개코, BewhY) (Prod. BewhY)’,<br>
          ‘연말이 되면 (Feat. 개코, SOLE) (Prod. Primary, plusNONE)’을 발매하였다.
        </p>
        <p style="margin-top: 22px;">
          2021년 2월 아메바컬쳐에영입 후에 앨범 [ uh-uh ]를 발매. 동명의 타이틀곡 ‘uh-uh’는 같은 소속사의 개코와 10-20대의 트렌드세터로인정받은 ‘키드밀리'의 지원 사격을 받았으며, 수록곡 ‘ㅈㄴ멋있어허성현’에서는 자신감 충만한 가사를 통해 당찬 포부를 밝힌바 있다.
        </p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 10월 22일(금) 오후 8시</li>
          <li>응모기간 : 10월 15일(금) ~ 10월 19일(화)</li>
          <li>당첨자 발표 : 10월 20일(수)</li>
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
    <program-button></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'

export default {
  name: 'Program59',
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
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
  .texts-list li:nth-child(2):before {
    content: '-' !important;
    margin-left: -9px;
  }
</style>
