<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class243-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.11 미스피츠">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="11월의 덕콘 | 미스피츠"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:4px;">11월의 덕콘</h2>
        <p class="desc2">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br>
					지친 일상 속 힐링을 선사하기 위해 매월 다양한<br>
					아티스트의 무료 콘서트를 진행합니다.<br>
					아티스트가 낸 덕력고사를 풀고 콘서트 초청의 기회를<br>
					잡아보세요.
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 38px;">2022. 11. 18 PM 7:00<em style="margin-left:12px;">MSFTZ</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">미스피츠</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class243-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					싱어송라이터 'msftz(미스피츠)'는 사운드 클라우드를<br />통해 개인 작업물을 선보이며 이름을 알린 뒤 2020년<br />1월 첫 번째 싱글 'ETERNITY'로 데뷔했다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					이후 '나는 요즘', 'bye bye i finally disappear from<br />your life', '내게도 색이 칠해진다면 좋겠어', 'antigravity'<br />등의 개인 앨범과 '박원', 'Hash Swan'과 '크루셜스타',<br />'BOYCOLD' 등의 아티스트와의 컬래버레이션을 통해<br />자신만의 사운드와 감성을 선보였다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2021년 11월 EP앨범 'Belief' 발매로 'NME 100(The<br />NME 100 : Essential emerging artists for 2022)'에<br />선정되기도 한 'msftz(미스피츠)'는 자신만의 세계관을<br />확실하게 구현해낸 음악들로 대중과 평단 모두의 사랑을<br />받고 있는 아티스트이다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">공연일</span>
						<span class="desc">11월 18일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">신청기간</span>
						<span class="desc">10월 27일 (목) ~ 11월 13일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">당첨자발표</span>
						<span class="desc">11월 14일 (월) 오후 3시</span>
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
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가<br />가능하나, 보호자도 함께 응모에 당첨되어야 하는 점 유의 부탁드립니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">22년 11월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px; margin-bottom: 20px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">11.4<br>FRI</span>
	          </div>
	          <router-link to="/experience/program242?classId=202">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">크리스탈티</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class241-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>11.18<br>FRI</span>
	          </div>
	          <router-link to="/experience/program243?classId=203">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">미스피츠</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class241-musician2.png" alt="musician">
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
  name: 'Program243',
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
