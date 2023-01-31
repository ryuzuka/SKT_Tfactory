<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class275-slide1.jpg" alt="T Factory x FLO 덕콘 | 2023.2 노리플라이">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="2월의 덕콘 with MPMG | 노리플라이"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px;">2월의 덕콘 <br />with MPMG</h2>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					지친 일상 속 힐링을 선사하기 위해 <br />매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br />
					사연을 적고 콘서트 초청의 기회를 잡아보세요.
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 57px;">2023. 2. 17 PM 7:00<em style="margin-left:12px;">NO REPLY</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">노리플라이</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class275-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					제 17회 &#39;유재하 음악경연대회&#39; 은상을 수상하며 데뷔했다.<br />
					&quot;신인 음반이라고 생각할 수 없을 정도의 웰메이드 음악&quot;이라는 평을 받았던 2009년의 1집 앨범 [Road], 그리고 여전히 회자되고 있는 2010년 2집 [Dream]을 지나, 음악적 정점에 다가선 2017년 3집 [Beautiful]에 이르기까지 노리플라이는 '작품'으로써의 음악을 위해 고집스럽게 그 완성도를 추구해왔다.<br />
					정욱재는 솔로 아티스트 TUNE의 활동은 물론 글과 강연을 통해 환경 운동을 비롯한 사회적 메시지에 적극적인 모습을 보였고, 권순관은 노리플라이와 차별화된 섬세한 느낌의 솔로 앨범을 발매함과 동시에 성시경, 정승환, 크러쉬, 이승기를 비롯한 수많은 아티스트들과의 작업을 선보이며 ‘음악인들의 음악인’으로 평가 받아왔다.<br />
					노리플라이는 시간의 흐름 속에서도 흐려지지 않는 것들을 탐구하고 삶의 장면들을 놓치지 않고 기록해왔으며,	어느덧 그 유산은 시간을 관통하는 보편적 감동이 되었다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">공연일</span>
						<span class="desc">2월 17일(금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">신청기간</span>
						<span class="desc">2월 6일(월) ~ 2월12일(일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">당첨자발표</span>
						<span class="desc">2월 13일(월) 오후 3시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">장소</span>
						<span class="desc">T Factory 2층, 0 Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※ 본 공연은 신청으르 완료하신 분들 중 추첨을 통해 선정되며, <br />선정자는 개별 연락드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외 <br />됩니다. </li>
					<li>※ 당첨자 본인 외의 양도는 불가하며, 신분증 확인 후 입장이 <br />가능합니다.</li>
					<li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 <br />있을 수 있습니다</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 <br />가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁 <br />드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">23년 2월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">2.1<br />WED<br />~2.5<br />SUN</span>
	          </div>
	          <router-link to="/experience/program274?classId=235">
		          <div class="card" Style="margin-left: 0px;">
			          <div class="text">
				          <p class="name">MPMG WEEK</p>
				          <p class="time">2.1 WED ~ 2.5 SUN</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class273-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>2.17<br>FRI</span>
	          </div>
	          <router-link to="/experience/program275?classId=236">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">노리플라이</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class273-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>2.24<br>FRI</span>
	          </div>
	          <router-link to="/experience/program276?classId=237">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">제이유나</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class273-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
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
  name: 'Program275',
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
