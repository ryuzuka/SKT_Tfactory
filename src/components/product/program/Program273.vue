<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class273-slide1.jpg" alt="T Factory x FLO 2월의 덕콘 with MPMG">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="2월의 덕콘 with MPMG"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px;">2월의 덕콘<br />with MPMG</h2>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					지친 일상 속 힐링을 선사하기 위해 <br />매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br />
					사연을 적고 콘서트 초청의 기회를 잡아보세요.
        </p>
			</div>
			<div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<h2 class="main-title" style="margin-top:4px;">2월의 덕콘 x MPMG</h2>
				<p class="desc_20" style="margin-top: 8px;">
					2월의 덕콘 무대는 첫 주의 MPMG WEEK 전시와 <br />3, 4주 MPMG 소속 아티스트의 공연으로 꾸며집니다.
				</p>
			</div>
			<div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">2월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">2.1<br />WED<br />~2.5<br />SUN</span>
	          </div>
	          <router-link to="/experience/program274?classId=231">
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
	          <router-link to="/experience/program275?classId=232">
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
	          <router-link to="/experience/program276?classId=233">
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
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※ 본 공연은 신청을 완료하신 분들 중 추첨을 통해 선정되며, <br />선정자는 개별 연락드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외<br />됩니다. </li>
					<li>※ 당첨자 본인 외의 양도는 불가하며, 신분증 확인 후 입장이 가능<br />합니다.</li>
					<li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 <br />있을 수 있습니다</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 <br />가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁 <br />드립니다.</li>
				</ul>
			</div>
		</div>
		<!-- //details -->
	</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program273',
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
