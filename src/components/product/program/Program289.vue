<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class289-slide1.jpg" alt="T Factory x FLO 3월의 덕콘 | 2023.3 신인류">
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
				<span style="margin: 0px 54px;">2023. 3. 31 PM 8:00<em style="margin-left:22px;">SHININRYU</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle" style="color: #000;">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px; color: #000;">신인류</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class289-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					다채로운 사랑을 노래하는 밴드 신인류를 소개합니다.<br />
					여러분의 사랑은 어떤 빛깔인가요?<br />
					신인류의 노래 ‘날씨의 요정’ 가사속에 나오는 다정한 무지개빛 일수도,<br />
					‘파랗게 질려버렸어’의 바래진 파랑일수도 있을거에요.<br />
					수많은 청춘 중에 한자리를 빌려 듣는 이에게 위로가 되는 노래를 전하는 밴드 신인류입니다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title" style="color: #000;">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;color: #000;">공연일</span>
						<span class="desc">3월 31일(금) 오후 8시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;color: #000;">신청기간</span>
						<span class="desc">3월 3일(금) ~ 3월26일(일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;color: #000;">당첨자발표</span>
						<span class="desc">3월 27일(월) 오후 3시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; color: #000;">장소</span>
						<span class="desc">T Factory 2층, 0 Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title" style="color: #000;">안내사항</h2>
				<ul>
					<li>※ 본 공연은 신청으르 완료하신 분들 중 추첨을 통해 선정되며, <br />선정자는 개별 연락드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외 <br />됩니다. </li>
					<li>※ 당첨자 본인 외의 양도는 불가하며, 신분증 확인 후 입장이 <br />가능합니다.</li>
					<li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 <br />있을 수 있습니다</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 <br />가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁 <br />드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle" style="color: #000;">23년 3월의 덕콘</em>
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
  name: 'Program288',
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
