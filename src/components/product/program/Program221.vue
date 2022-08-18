<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class221-slide1.jpg" alt="T Factory X T1 | LCK 서머 플레이오프 응원전">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 12px 40px 20px;">
				<kakao-share
					title=">T Factory X T1"
					description="LCK 서머 플레이오프 응원전"
				></kakao-share>
				<em class="main-subtitle">T Factory X T1</em>
				<h2 class="main-title" style="margin-top: 4px;">LCK 서머 <br>플레이오프 응원전</h2>
				<p class="desc2" style="margin-top: 16px;; line-height: 20px;">TEA 강사 스카이 김하늘 코치와 함께하는 LCK 스프링 플레이오프 응원전 EVENT가 진행됩니다. </p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">TEA 김하늘 코치 소개</h2>
				<ul>
					<li>- CJ Entus (2015.12 ~ 2016.11)</li>
					<li>- SK telecom T1 (2016.12 ~ 2017.11)</li>
					<li>- RED Canids (2017.12 ~2018.10)</li>
					<li>- XTEN Esports (2019.05 ~ 2019.11)</li>
					<li>- RED Canids (2019.12 ~ 2020.04)</li>
					<li>- XTEN Esports (2020.07 ~ 2021.01)</li>
					<li>- T1 Esports Academy 코치 (2021.08 ~ 현재)</li>
				</ul>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 100px;">웅원일정 및 장소</span>
						<span class="desc">
							8월 21일 (일) 오후 3시 ,<br>T Factory 0 stage
						</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 100px;">응모기간</span>
						<span class="desc">8월 18일 (목) ~ 8월 19일 (금)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 100px;">당첨자발표</span>
						<span class="desc">8월 20일 (토) 오후 3시 </span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 이벤트는 T Factory 홍대점을 방문하여 스마트폰으로 본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령: 만 14세 이상)</li>
					<li>※본 이벤트 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner" style="padding: 40px 0 20px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program84?classId=138">
							<div class="desc">
								<p class="detail">프로게이머 팀 코치에게 <br>배우는 LoL</p>
								<span class="topic">[T Factory X T1] <br>LoL Class</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class221-conts1.jpg" alt="[T Factory X T1] LoL Class">
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
  name: 'Program221',
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
