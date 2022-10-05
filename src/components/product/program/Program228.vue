<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class228-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.10 YOUTH HOSTEL">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="10월의 덕콘 | YOUTH HOSTEL"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:4px;">10월의 덕콘</h2>
        <p class="desc2">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br>
					지친 일상 속 힐링을 선사하기 위해 매월 다양한<br>
					아티스트의 무료 콘서트를 진행합니다.<br>
					아티스트가 낸 덕력고사를 풀고 콘서트 초청의 기회를<br>
					잡아보세요.
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 38px;">2022. 10. 28 PM 7:00<em style="margin-left:12px;">YOUTH HOSTEL</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">YOUTH HOSTEL</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class228-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					“Ikbbo”는 비와이, 정기고, 허성현 등 장르의 구분 없이 다양한 아티스트와 활동한 세션이자 프로듀서이다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					“한지원”은 2021년 HIPHOPPLAYA x stabyGO “HANG OUT” 프로젝트 신인 발굴 컴피티션 우승자이다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					두 사람이 만나 결성한 “Youth Hostel”은 동명의 첫 정규 앨범 [Youth Hostel]에 청춘들의 다양한 이야기들을<br> 담아내었을 뿐만 아니라 힙합, 소울, 컨트리, 락 등의<br> 다채로운 사운드로 본인들만의 독특한 팀 색깔을 만들어 냈다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">공연일</span>
						<span class="desc">10월 28일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">신청기간</span>
						<span class="desc">10월 5일 (수) ~ 10월 23일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">당첨자발표</span>
						<span class="desc">10월 24일 (월) 오후 3시</span>
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
					<li>※본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
					<li>※미당첨 고객도 당일 선착순 스탠딩 관람 가능합니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이 있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는 점 유의 부탁드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">22년 10월 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px; margin-bottom: 20px;">
        <ul>
          <li>
	          <div class="date">
		          <span>10.14<br>FRI</span>
	          </div>
	          <router-link to="/experience/program227?classId=188">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">맥거핀</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class226-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>10.28<br>FRI</span>
	          </div>
	          <router-link to="/experience/program228?classId=189">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">Youth Hostel</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class226-musician2.png" alt="musician">
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
  name: 'Program228',
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
