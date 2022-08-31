<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class224-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.9 유키카">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="9월의 덕콘"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:4px;">9월의 덕콘</h2>
        <p class="desc2">
          T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br>
					지친 일상 속 힐링을 선사하기 위해 매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br>
					아티스트가 낸 덕력고사를 풀고 콘서트 초청의 기회를 잡아보세요.
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 68px;">2022. 09. 23 PM 7:00<em style="margin-left:12px;">YUKIKA</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">유키카</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class224-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					유키카는 한국에서 활동하는 일본인 시티팝 가수이다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2019년 시티팝 장르곡 NEON로 한국에서 K-POP 가수로 싱글 데뷔했다.<br>최근 6월 &lt;time&gt; 시리즈 마지막 싱글 '향기'를 발매하며 꾸준히 음악 활동을 하고 있는 앞으로가 기대되는 가수이다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">공연일</span>
						<span class="desc">9월 23일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">신청기간</span>
						<span class="desc">9월 1일 (목) ~ 9월 18일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">당첨자발표</span>
						<span class="desc">9월 19일 (월) 오후 3시</span>
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
        <em class="main-subtitle">9월 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span>9.16<br>FRI</span>
	          </div>
	          <router-link to="/experience/program223?classId=">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">PATZ</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class222-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>9.23<br>FRI</span>
	          </div>
	          <router-link to="/experience/program224?classId=">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">유키카</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class222-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
        </ul>
      </div>
			<div class="details-inner" style="padding: 40px 0 59px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
        <div class="program">
	        <div class="program">
            <router-link to="/experience/program213?classId=176">
              <div class="desc">
                <p class="detail" style="margin-bottom: 45px;">Wonder Workout Class<br/>with Z Flip 4 & XEXYMIX</p>
                <span class="topic">Workout Class</span>
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class222-conts1.jpg" alt="Workout Class">
              </div>
            </router-link>
          </div>
        </div>
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
  name: 'Program224',
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
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
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
