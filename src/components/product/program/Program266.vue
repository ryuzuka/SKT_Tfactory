<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class266-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.12 홍이삭">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="12월의 덕콘 | 홍이삭"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px;">12월의 덕콘</h2>
        <p class="desc2" style="margin-top:16px;">
          &lt;덕콘 winter 스페셜&gt;
        </p>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					지친 일상 속 힐링을 선사하기 위해 매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br />
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 50px;">2022. 12. 30 PM 7:00<em style="margin-left:12px;">HONGISAAC</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">홍이삭</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class266-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					홍이삭은 2013년 &lt;제24회 유재하 음악경연대회&gt;에서 자작곡 '봄아'로 동상을 수상하며 데뷔하였다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					데뷔 이후 꾸준한 음원 발매와 인기 드라마 OST 참여,<br />그리고 음악 영화 &lt;다시 만난 날들&gt;의 주연 배우로 출연 및 음악 감독으로 활동하는 등 다방면의 음악 아카이브를 쌓아오고 있다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2019년에는 JTBC &lt;슈퍼밴드&gt;에 참여하여 최종 4위를 하였다.
					경연 중 뛰어난 작사, 작/편곡, 악기연주 실력을 보여주며 윤상, 김종완 등 선배 뮤지션에게 극찬을 받고 대중들의 마음속에 홍이삭이라는 아티스트를 다시 한번 각인시켰다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2022년 8월 싱글 앨범 &lt;있을게&gt;를 발매하며 활발한 활동을 이어오고 있다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">공연일</span>
						<span class="desc">12월 30일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">신청기간</span>
						<span class="desc">12월 2일 (금) ~ 12월 25일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">당첨자발표</span>
						<span class="desc">12월 26일 (월) 오후 3시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">장소</span>
						<span class="desc">T Factory 2층, 0 Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외<br />됩니다.</li>
					<li>※안전한 공연 관람을 위해 스탠딩 좌석은 운영하지 않습니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이<br />있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가<br />가능하나, 보호자도 함께 응모에 당첨되어야 하는 점 유의 부탁<br />드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">22년 12월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">12.10<br>SAT</span>
	          </div>
	          <router-link to="/experience/program260?classId=221">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">쏜애플</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.11<br>SUN</span>
	          </div>
	          <router-link to="/experience/program261?classId=222">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">데이브레이크</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.16<br>FRI</span>
	          </div>
	          <router-link to="/experience/program262?classId=223">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">유다빈밴드</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.17<br>SAT</span>
	          </div>
	          <router-link to="/experience/program263?classId=224">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">SURL</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician4.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.23<br>FRI</span>
	          </div>
	          <router-link to="/experience/program264?classId=225">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">LUCY</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician5.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.24<br>SAT</span>
	          </div>
	          <router-link to="/experience/program265?classId=226">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">ADOY</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician6.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.30<br>FRI</span>
	          </div>
	          <router-link to="/experience/program266?classId=227">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">홍이삭</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class259-musician7.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>12.31<br>SAT</span>
	          </div>
						<div>
							<router-link to="/experience/program267?classId=228">
								<div class="card" Style="margin-left: 19px;">
									<div class="text">
										<p class="name">크리스탈티</p>
										<p class="time">PM 3:00</p>
									</div>
									<div class="image">
										<img src="../../../assets/images/program/class259-musician8.png" alt="musician">
									</div>
								</div>
							</router-link>
							<router-link to="/experience/program268?classId=229">
								<div class="card" Style="margin-left: 19px; margin-top:12px;">
									<div class="text">
										<p class="name">윤석철트리오</p>
										<p class="time">PM 7:00</p>
									</div>
									<div class="image">
										<img src="../../../assets/images/program/class259-musician9.png" alt="musician">
									</div>
								</div>
							</router-link>
						</div>
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
  name: 'Program242',
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
