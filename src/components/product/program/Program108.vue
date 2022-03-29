<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class108-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.4 손태진">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 20px 40px;">
        <kakao-share
          title="4월의 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트! - 손태진"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:4px;">덕콘</h2>
        <p class="desc2">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!
          홍대 인디문화를 응원하고 일상의 작은 위로를 전하고자 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다. 아트스트가 직접 낸 덕력고사를 통과하신 팬 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
      </div>
      <div class="line">
        <span style="margin: 1px 61px;">2022.4.15.PM 7:00<b style="margin-left: 12px;">SONTAEJIN</b></span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">아티스트 소개</em>
        <h2 class="main-title" style="margin-top:4px;">손태진</h2>
        <div class="thumbnail"><img src="../../../assets/images/program/class108-conts1.jpg" alt=""></div>
        <p style="margin-top: 8px;">
          손태진은 2016년 JTBC &lt;팬텀싱어&gt;의 우승팀인 '포르테 디 콰트로'의 멤버로, 2018년 첫 솔로 싱글 '잠든 그대'를 발표한 이후 첫 단독 콘서트 'Fw : I am' 개최, KBS 예능 &lt;입맞춤&gt;, &lt;불후의 명곡&gt;, &lt;열린음악회&gt; 등에 출연하며 클래식과 대중음악 팬들의 마음을 모두 사로잡고 있다.<br>
          2019년 6월 두 번째 싱글 '오르골'을 발표하고 단독 콘서트 'One Summer Night'을 개최했을 뿐만 아니라 TBS eFM ‘손태진의 스윗 랑데부‘ DJ를 맡아 안정적인 진행을 이어오며, 활발한 솔로 활동을 펼치고 있다.<br>
          특히 지난 11월 첫 번째 EP The Present ‘At The Time’을 통해 높은 예술성을 지닌 고퀄리티의 크로스오버 음반을 선보여 많은 호평을 받은 가운데, 1월에는 두 번째 EP The Present 'Today's'를 발매하며 손태진만의 더욱 짙어진 음악성으로 리스너들의 귀를 사로잡았다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 12px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 65px;">공연일</span>
            <span class="desc">4월 15일(금) 오후 7시</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 65px;">신청기간</span>
            <span class="desc">4월 4일(월) ~4월 10일(일)</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 65px;">당첨자발표</span>
            <span class="desc">4월 11일(월) 오후 3시</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 65px;">장소</span>
            <span class="desc">
	            <a href="/shop/detail/store14 ">T Factory 2층 O Stage<em class="flag-basic">공간보기</em></a>
            </span>
          </dd>
        </dl>
      </div>
      <div class="line">
        <span style="margin: 1px 61px;">2022.4.15.PM 7:00<b style="margin-left: 12px;">SONTAEJIN</b></span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-bottom" style="padding: 40px 20px;">
        <h2 class="main-title">안내사항</h2>
        <p class="about">당첨자 안내</p>
        <ul>
          <li>※ 본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
          <li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
          <li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
          <li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의 부탁드립니다.</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 32px 20px 12px;">
        <em class="main-subtitle">4월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <program-lineup-new style="padding: 0 18px 36px 24px;"
		    :line-list="[
					{
						classId: 145,
						date: '4.15',
						day: 'FRI',
						name: '손태진',
						time: 'PM 7:00'
					},
					{
						classId: 144,
						date: '4.29',
						day: 'FRI',
						name: '전진희',
						time: 'PM 7:00'
					}]">
	    </program-lineup-new>
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
import programLineupNew from './components/ProgramLineupNew'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program108',
  components: {
    KakaoShare,
    ProgramButton,
	  programLineupNew
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
.details{
  &-header {
    p{
      line-height: 20px;
    }
  }
  &-inner {
  padding:40px 20px;
  }
  &-bottom {
    font-size: 12px;
    line-height: 19px;
    color: #787878;
  }
}
</style>
