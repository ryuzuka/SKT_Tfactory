<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class259-slide1.jpg" alt="T Factory x FLO 12월의 덕콘">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="12월의 덕콘"
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
					아티스트가 낸 덕력고사를 풀고 콘서트 초청의 기회를<br />
					잡아보세요.
        </p>
			</div>
			<div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">&lt;덕콘 winter 스페셜&gt;</em>
				<h2 class="main-title" style="margin-top:4px;">12월의 덕콘</h2>
				<p class="desc_20" style="margin-top: 8px;">
					12월 덕콘은 &lt;덕콘 winter 스페셜&gt;로 진행됩니다.<br />다가오는 연말 따뜻한 온기를 가득 채워줄 핫한 아티스트와 함께 무대를 즐기고 특별한 하루를 보내보세요.
				</p>
			</div>
			<div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">12월의 덕콘</em>
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
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 공연은 덕력고사를 완료하신 분들 중 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외<br />됩니다.</li>
					<li>※안전한 공연 관람을 위해 스탠딩 좌석은 운영하지 않습니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이<br />있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가<br />가능하나, 보호자도 함께 응모에 당첨되어야 하는 점 유의 부탁<br />드립니다.</li>
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
  name: 'Program259',
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
