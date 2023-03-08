<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class293-slide1.jpg" alt="3월의 콘썰트">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="T Factory x B tv"
          description="3월의 콘썰트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x B tv</em>
        <h2 class="main-title" style="margin-top:9px;">콘썰트</h2>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 B tv가 함께 만드는 콘텐츠와 이야기가 가득한 오프라인 이벤트! 무료 상영회, 토크쇼처럼 일상을 새롭게 볼 수 있는 콘텐츠가 가득하니 친구와 함께 신청하고 무료 초청의 기회를 잡아보세요!
        </p>
			</div>
			<!-- <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div> -->
			<div class="details-header" style="padding: 40px 20px; border-top: 12px solid #f0f0f0;">
				<em class="main-subtitle">T Factory x B tv</em>
				<h2 class="main-title" style="margin-top:4px;">콘썰트</h2>
				<p class="desc_20" style="margin-top: 8px;">T Factory와 B tv가 함께 만드는 콘텐츠와 이야기가 가득한 오프라인 이벤트 ‘콘썰트’에 여러분을 초대합니다.</p>
				<p>보는 것만으로는 충분하지 않을 때가 있지 않나요?<br />
						그런 여러분을 위해 새롭게 선보이는 콘썰트는<br />
						영화나 드라마, 애니메이션을 통해 취향을 나눌 수 있도록 다양한 컨셉의 콘텐츠로 찾아갈 예정입니다.</p>
				<p>3월의 첫 콘썰트 주제는’ 여성 감독의 영화’ 입니다.<br />
					여성의 날을 맞아 ‘우정’, ‘출산’, ‘덕질’까지,<br />
					자신만의 속도로 한걸음씩 나아가는 여성들의 이야기를
					T Factory x B tv 3월의 콘썰트에서 만나보세요.</p>
				<p>상영회가 끝나고 감독, 배우와 함께 하는 토크,<br />
						거기에 특별한 굿즈와 간식까지 준비했으니<br />
						함께 모여서 보고 듣고 다양한 이야기를 나눠보아요.</p>
			</div>
			<div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">3월의 콘썰트</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span>3.18<br />SAT</span>
	          </div>
	          <router-link to="/experience/program294?classId=254">
		          <div class="card" Style="margin-left: 0px;">
			          <div class="text">
				          <p class="name">성적표의 김민영</p>
				          <p class="time">GV참석: 이재은 감독, <br />윤아정 배우, 김주아 배우 <br />PM 6:30</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class293-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>3.25<br />SAT</span>
	          </div>
	          <router-link to="/experience/program295?classId=256">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">십개월의 미래</p>
				          <p class="time">GV참석: 남궁선 감독,<br />유이든 배우, 권아름 배우 <br />PM 6:30</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class293-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>4.01<br />SAT</span>
	          </div>
	          <router-link to="/experience/program296?classId=257">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text" style="padding: 15px 19px 17px;">
				          <p class="name">성덕</p>
				          <p class="time">GV참석: 오세연 감독<br />PM 6:30</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class293-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
      </div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※ 본 공연은 추첨을 통해 선정되며, 선정자는 개별 MMS 발송드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 공연 당첨에서 제외됩니다.</li>
					<li>※ 참석이 불가한 경우 홈페이지 참석을 취소해주세요.</li>
					<li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다</li>
					<li>※콘썰트는 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
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
  name: 'Program293',
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
.lineup ul li:before{height: 110px;}
.lineup ul li .card{height: 88px;}
.lineup ul li .card .text{padding: 6px 19px 17px;}
.lineup ul li .card .text .name{margin-bottom: 0;}
.lineup ul li .card .image img{width: 88px; height: 88px;}
</style>
