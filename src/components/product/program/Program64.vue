<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class64-slide1.jpg" alt="Apple매니아의 완성, SK텔레콤">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <!-- <kakao-share
          title="11월의 덕콘 | 너드커넥션"
          description="찐덕들만 초청하여 진행하는 덕콘. 이번 기출영역은 '너드커넥션'입니다."
        ></kakao-share> -->

        <em class="flag-solid7">Exhibition</em>
        <h2 class="details-tit">Apple매니아의 완성, SK텔레콤</h2>
        <div class="tags">
          <span class="flag-basic">애플TV</span>
          <span class="flag-basic">체험존</span>
          <span class="flag-basic">전시</span>
        </div>
        <p class="desc type2">
          Apple shop<br>
          iPhone13 Photo exhibition<br>
          Apple TV Interactive Media Art<br>
          <br>
          B tv와 손을 잡고 국내에 공식 출시된 <br>
          애플TV 4K를 기념하여 T팩토리에 특별한 체험 존이<br>
          마련되었습니다.<br>
          ATV까지 즐겨야 진정한 애플 매니아!<br>
          iPhone13부터 ATV/ATV+까지, T팩토리에서<br>
          진정한 애플 매니아가 되어보세요!
        </p>
      </div>
      <div class="details-inner">
        <h3 class="subtit">체험 존 즐기는 방법</h3>
        <div class="thumb"><img src="../../../assets/images/program/class64-conts1.jpg" alt="Apple매니아의 완성, SK텔레콤"></div>
        <p>Step 1. 오직 플래그십 스토어에서만 경험할 수 있는 아이폰13 전 기종, 전 색상을 만나보세요!</p>
        <p style="margin-top:22px;">Step 2. Apple TV 셋톱박스와 리모컨 실물을 확인하고, Apple TV+ 오리지널 콘텐츠 &#60;닥터브레인&#62; 예고편도 재생해 보세요!</p>
        <p style="margin-top:22px;">Step 3. 아이폰13만 있으면 평범한 일상도 비범해 질 수 있어요. 특별 사진전 &#60;하시시박의 일주일&#62;을 통해 아이폰13으로 찍은 멋진 사진들을 감상해 보세요.</p>
        <p style="margin-top:22px;">Step 4. 애플 매니아들을 위한  새로운 OTT세상, Apple TV! 다양한 콘텐츠들의 시작과 끝 Apple TV와 Apple TV+를 표현한 인터렉티브 미디어 아트를 체험해 보세요! 아이패드 속 Apple TV를 터치하면?</p>
        <h3 class="subtit">{{ $t('prd.schedule-place')}}</h3>
        <ul class="texts-list">
          <li>일정 : 2021년 11월 15일(월) ~ 12월 17일(금)</li>
          <li>장소 : T Factory 홍대, 2층<br><span style="padding-left:35px;">Apple Zone 및 Accessory Zone</span></li>
        </ul>
        <div class="notice">
          <h4 class="subtit">{{ $t('prd.notice')}}</h4>
          <ul class="texts-info type2">
            <li>본 체험은 T Factory 홍대점을 방문하여 스마트폰으로 체크인<br>한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
            <li>본 체험은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될<br>수 있습니다.</li>
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
import ProgramLineup from './components/ProgramLineup'

export default {
  name: 'Program64',
  components: {
    KakaoShare,
    ProgramLineup
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
