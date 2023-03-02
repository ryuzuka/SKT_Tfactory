<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class287-slide1.jpg" alt="T Factory x FLO 3월의 덕콘">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="3월의 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle" style="color: #000;">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px; color: #000;">3월의 덕콘</h2>
        <p class="desc2" style="margin-top:8px; color: #787878;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					친구에게도 입덕시키고 싶은 최애 아티스트의 공연을<br />
					사연과 함께 신청하고 무료 콘서트 초청의 기회를 잡아보세요.
        </p>
			</div>
			<div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<h2 class="main-title" style="margin-top:4px; color: #000;">3월의 덕콘</h2>
				<p class="desc_20" style="margin-top: 8px; color: #787878;">
					3월의 덕콘 무대는 봄의 시작을 알리며 한로로와 신인류<br />의 공연으로 꾸며집니다.
				</p>
			</div>
			<div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle" style="color: #000;">3월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0; color: #000;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date" style="color: #000;">
		          <span style="color: #000;">3.17<br />FRI</span>
	          </div>
	          <router-link to="/experience/program288?classId=242">
		          <div class="card" Style="margin-left: 0px;">
			          <div class="text">
				          <p class="name">한로로</p>
				          <p class="time">PM 8:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class287-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date" style="color: #000;">
		          <span style="color: #000;">3.31<br>FRI</span>
	          </div>
	          <router-link to="/experience/program289?classId=243">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">신인류</p>
				          <p class="time">PM 8:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class287-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
      </div>
			<div class="details-inner notification">
				<h2 class="main-title" style="color: #000;">안내사항</h2>
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
  name: 'Program287',
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
.lineup ul li:before{background: #000;}
.lineup ul li .date:before{background: url(~@/assets/images/program/lineup-point2.png) no-repeat 0px 0px;}
</style>
