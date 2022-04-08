<template>
  <div class="contentss" ref="contents">
    <!-- slide -->
    <div class="slider-prd" style="padding-top:56px;">
      <img src="../../../assets/images/program/class107-slide1.jpg" alt="T Factory x FLO 덕콘">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 40px 20px;">
        <kakao-share
          title="4월의 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2">
          4월 덕콘에서는 대학생 뮤지션들과 함께 합니다.<br>
          우리 학교 뮤지션이 꾸며줄 THECON의 무대와 함께하세요. T Factory에 방문하고 대학생 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 32px 20px;">
        <h2 class="main-title" style="line-height: 40px;">T University<br>Music Festival</h2>
        <p>
          T대학 우주 축제 기간 동안 진행되는 '덕콘'은 인기 뮤지션과 대학생 뮤지션으로 라인업이 더욱 풍성하게 구성됩니다. 내 최애 뮤지션이 라인업에 있다면 공연 신청 필수! 곧 오픈되는 대학생 뮤지션 라인업도 기대해주세요.
        </p>
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
          <li>※ 대학생 뮤지션이 아닌 인기 뮤지션 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
          <li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
          <li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다.</li>
          <li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 40px 0">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
        <div class="program">
	        <div class="program">
<!--            <a href="/experience/program111?classId=154">-->
              <div class="desc">
                <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
                <span class="topic">TUMF</span>
                <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
              </div>
<!--            </a>-->
          </div>
        </div>
        <div class="program">
	        <a href="/experience/program110?classId=156">
	          <div class="desc">
	            <p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
	            <span class="topic">T대학 우주 축제, TUF</span>
	            <img style="right: -61px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
	          </div>
	        </a>
        </div>
        <div class="program">
<!--	        <a href="/experience/program112?classId=155">-->
	          <div class="desc">
	            <p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
	            <span class="topic">TUAF</span>
	            <img style="bottom: -7px; right: 165px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
	          </div>
<!--	        </a>-->
        </div>
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
