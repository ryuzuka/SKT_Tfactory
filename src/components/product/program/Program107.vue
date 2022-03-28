<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top:56px;">
      <img src="../../../assets/images/program/class107-slide1.jpg" alt="T Factory x FLO 덕콘">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 20px 40px;">
        <kakao-share
          title="4월의 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:4px;">덕콘</h2>
        <p class="desc2">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!
          홍대 인디문화를 응원하고 일상의 작은 위로를 전하고자 매월 다양한 아티스트를 선정하여 무료 콘서트를 진행합니다. 아트스트가 직접 낸 덕력고사를 통과하신 팬 중 추첨을 통해 콘서트 초청의 기회를 드립니다.
        </p>
      </div>
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 32px 20px;">
        <h2 class="main-title" style="line-height: 40px;">4월의 덕콘</h2>
        <p>
          4월 덕콘에서는 대학생 뮤지션들과 함께 합니다.<br>
          우리 학교 뮤지션이 꾸며줄 THECON의 무대와 함께하세요.<br>
          T Factory에 방문하고 대학생 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
        <p style="margin-top: 22px;">※본 콘서트는 스마트폰으로 체크인 가능한 만 14세 이상 입장 가능하며, 14세 미만 고객은 보호자 동반하셔야 됩니다.</p>
        <p style="margin-top: 0px;">※사회적 거리두기 단계에 따라 비대면으로 전환될 수 있습니다.</p>
      </div>
      <div class="details-inner" style="padding: 32px 20px 12px;">
        <em class="main-subtitle">4월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <program-lineup-new
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
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
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
    </div>
    <!-- //details -->

    <!-- button set -->
    <program-button :visible="false"></program-button>
    <!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import programLineupNew from './components/ProgramLineupNew'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program107',
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
