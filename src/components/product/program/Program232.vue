<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
    <!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class232-slide1.jpg" alt="T Factory for NEW 0s">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="T Factory for NEW 0s"
          description="T Factory의 모든 것을 NEW 0s답게 즐겨보세요!"
        ></kakao-share>

        <em class="main-subtitle">T Factory for NEW 0s</em>
        <h2 class="main-title" style="margin-top:4px;">T Factory의 모든<br>
          것을 NEW 0s답게<br>
          즐겨보세요!</h2>
        <p class="desc2" style="margin-bottom: 56px;">
          <b style="margin-bottom: 2px;">만 13세~ 34세는 이제 모두 0!</b><br>
          T Factory가 NEW 0s를 위한 공간으로 돌아왔습니다.<br>
          iPhone14 시리즈 체험존부터 대형월에서 즐기는 게임<br>
          이벤트, 덕콘, 그리고 크루클래스까지!<br>
          SK텔레콤 플래그십스토어 T Factory에 새로운 '0'을<br>
          위해 준비한 특별한 프로그램을 체험해보세요!
        </p>
        <p class="desc2">
          <b style="margin-bottom: 5px;">&lt;T Factory for NEW 0s&gt;</b><br>
          <ul>
            <li>▷T Factory를 방문하면 특별한 선물 증정!</li>
            <li>▷T Factory 공간전체를 크루들과 함께 즐겁게<br>체험해볼 수 있어요!</li>
          </ul>
        </p>
        <ol class="step-list" style="margin-top:18px">
          <li>
            <b style="color:#000;">대면보다 비대면이 편한 NEW 0s를 위한</b><br>
            Untact for new 0s
          </li>
          <li>
            <b style="color:#000;">트렌디하고 힙한 NEW 0s를 위한</b><br>
            SKT x iPhone14Pro
          </li>
          <li>
            <b style="color:#000;">차별화된 나을 위한</b><br>
            Flip4 for NEW 0s
          </li>
          <li>
            <b style="color:#000;">게임에 도전해봐. 두려울 거 없잖아!</b><br>
            Arcade for NEW 0s
          </li>
          <li>
            <b style="color:#000;">도심 속 휴식이 필요한 0을 위한</b><br>
            Garden for NEW 0s
          </li>
          <li>
            <b style="color:#000;">0을 위한 데이터와 선물이 팡팡 터지는</b><br>
            Data for NEW 0s
          </li>
          <li>
            <b style="color:#000;">평일엔 VR게임 스테이지, 주말엔 덕콘 무대로!</b><br>
            Stage for NEW 0s
          </li>
          <li>
            <b style="color:#000;">NEW 0s는 애플로 이거까지 한다?</b><br>
            Crew Class for NEW 0s
          </li>
          <li>
            <b style="color:#000;">날씨 좋은 가능 한강 피크닉, 캠핑을 즐기는<br>NEW 0s를 위한</b><br>
            11st l Amazon for NEW 0s
          </li>
        </ol>
			</div>
			<div class="details-inner">
				<h2 class="main-title">무료 원데이클래스 안내</h2>
        <em class='main-subtitle' style="color:#000;">Crew Class for NEW 0s</em>
        <p style="margin-bottom: 21px;">0 고객님의 iPhone14 완전정복을 응원하며 전문 크루와 함께 3가지 클래스를 진행합니다.</p>
				<ol class="step-list" start="margin-top:18px;">
          <li>[Crew Class for New 0s] iPhone14/Pro<br>
            완전정복
          </li>
          <li>[Crew Class for New 0s] VLOG 만들기<br>
            (feat. 시네마틱모드)
          </li>
          <li>[Crew Class for New 0s] Cinematic 릴스 만들기<br>
            (feat. 액션모드)
          </li>
        </ol>
        <ul class="texts-info" style="color:#949494; margin-top: 4px;">
          <li>※본 프로그램은 사전예약 필수입니다.</li>
        </ul>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 00px;">
            <router-link class="btn-line big" style="padding:3px 0 0 0;" to="/experience/program229?classId=140">iPhone14 완전정복<br>크루클래스 예약하러 가기</router-link>
          </div>
        </div>
			</div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-top:3px; letter-spacing:-0.1px;">게임 이벤트 안내</h2>
        <em class="main-subtitle" style="color:#000;">Arcade for NEW 0s</em>
        <p>
          iPhone14와 함께 대형 스크린에 미러링 되는 게임을 0답게 즐겨보세요!<br>
          일정 목표 이상의 점수 기록 시, 에어팟3세대를 선물로 드립니다.
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 0px;">
	          <router-link class="btn-line big" style="padding:15px 0 0 0;" to="/experience/program233?classId=191">게임 이벤트 보러가기</router-link>
          </div>
        </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-top:3px; letter-spacing:-0.1px;">애플 정품 할인<br>판매<em class="main-subtitle">&nbsp; (한정수량)</em></h2>
        <em class="main-subtitle" style="color:#000;">Untact Shop for NEW 0s</em>
        <p class="desc4" style="margin-bottom:16px;">
          대면보다 비대면이 편한 New 0s를 위한 아이폰 전용 Untact Shop을 준비했습니다.<br>
          iPhone14 신상 정품 액세서리는 물론 iPhone13 정품 액세서리, 에어팟 프로까지!<br>
          오직 T Factory에서 할인된 가격으로 득템하세요.
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 0px;">
	          <router-link class="btn-line big" style="padding:15px 0 0 0;" to="/experience/program234?classId=192">제품 리스트 보러가기</router-link>
          </div>
        </div>
      </div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title">일정</span>
						<span class="desc">10월 7일(금) ~ 매진시까지</span>
					</dd>
					<dd>
						<span class="sub_title">장소</span>
						<span class="desc">T Factory</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program232',
  components: {
    KakaoShare,
	  ProgramButton
  },
  data () {
    return {
	    isLogin: false,
	    isBookingYn: false
    }
  },
  created () {
	  this.$store.watch(() => {
		  if (this.$store.getters.CONSTANTS.session_alive === true) {
			  this.isLogin = true
		  }
	  })
  },
  mounted () {
	  if (this.$refs.shareImage) {
		  this.$emit('kakao-share-image', this.$refs.shareImage['src'])
	  }
	  this.$EventBus.$on('get-class-info', data => {
		  if (data['PROGRAM_CLASS_BOOKING_YN'] === 1) {
			  this.isBookingYn = true
		  }
	  })
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
</style>
