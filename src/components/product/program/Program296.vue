<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class296-slide1.jpg" alt="3월의 콘썰트 | 성덕">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="3월의 콘썰트"
          description="성덕"
        ></kakao-share>

        <em class="main-subtitle">T Factory x B tv</em>
        <h2 class="main-title" style="margin-top:9px;">3월의 콘썰트 상영작</h2>
        <p class="desc2" style="margin-top:8px;">
					‘그 때 나는 미쳤었다. 어느 날 오빠가 범죄자가 되었다.’<br />
					오세연 감독은 과거 가수 정준영의 열렬한 덕후였고,<br />
					성덕으로 방송까지 출연했지만, 사랑했던 그 오빠의 범죄로 10대 시절을 모두 바친 덕질이 흑역사가 되어버린 본인의 이야기를 당당히 ‘성덕’이라는 다큐멘터리 영화에 담았습니다.<br />
					오세연 감독과 주변 사람들의 ‘덕질 실패기’를 다루고 있지만, 보고나면 누군가의 ‘팬’으로서 겪은 내 이야기를 꺼내고 싶어지는 영화 ‘성덕’. T Factory x B tv 콘썰트에서 함께 ‘덕질’의 애환을 나눠볼까요?
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 83px;">2023.04.01 PM6:30<em style="margin-left: 20px;">성덕</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">영화 소개</em>
				<h2 class="main-title" style="margin-top:4px;">성덕</h2>
				<p class="desc_20" style="margin-top: 8px; margin-bottom: 30px;">
					성덕<br />오세연 | 2022 | Fiction | HD | Color | 84분
				</p>
				<p class="desc_20" style="margin-top: 8px;">
					10대 시절을 바쳤지만 스타에서 범죄자로 추락한 오빠! <br />좋아해서 행복했고 좋아해서 고통받는 실패한 덕후들을 찾아 나선 X성덕의 덕심 덕질기
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">공연일</span>
						<span class="desc">04월 01일(토) 오후 6시 30분</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">신청기간</span>
						<span class="desc">03월 8일(수) ~ 03월 28일(화)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">당첨자발표</span>
						<span class="desc">03월 29일(수) 오후 3시</span>
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
					<li>※ 본 공연은 추첨을 통해 선정되며, 선정자는 개별 MMS 발송드립니다.</li>
					<li>※ 당첨자 중 무단 노쇼하시는 경우, 추후 공연 당첨에서 제외됩니다.</li>
					<li>※ 참석이 불가한 경우 홈페이지 참석을 취소해주세요.</li>
					<li>※ 정부의 방역지침 변경이 있을 시 공연의 주요내용도 변경이 있을 수 있습니다</li>
					<li>※콘썰트는 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함께 응모에 당첨되어야 하는점 유의부탁드립니다.</li>
				</ul>
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
				          <p class="time">감독: 임지선, 이재은 <br />배우: 김주아, 윤아정<br />PM 6:30</p>
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
				          <p class="time">감독: 남궁선<br />배우: 최성은, 백현진<br />PM 6:30</p>
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
			          <div class="text">
				          <p class="name">성덕</p>
				          <p class="time">감독: 오세연<br />배우: 오세연<br />PM 6:30</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class293-musician3.png" alt="musician">
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
  name: 'Program296',
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
