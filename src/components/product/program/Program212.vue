<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class212-slide1.jpg" alt="Z Flip 4와 함께하는 나의 빛나는 순간들">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="What a WONDER MOMENT!"
          description="Z Flip 4와 함께하는 나의 빛나는 순간들"
        ></kakao-share>

        <em class="main-subtitle">What a WONDER MOMENT!</em>
        <h2 class="main-title" style="margin-top:4px; margin-bottom:4px; letter-spacing: -1px;">Z Flip 4와 함께하는 <br>나의 빛나는 순간들</h2>
        <em class="main-subtitle">What a WONDER MOMENT!</em>
				<p class="desc2">
					당신이 가장 빛나는 순간은 언제인가요?<br>
					바로 떠오르지 않아도 괜찮아요. Z Flip4와 함께<br>
					T Factory에서 담아보세요!
				</p>
				<p class="desc2">
					&lt;What a WONDER MOMENT! : Z Flip 4와 함께하는 나의 빛나는 순간들&gt;에는 Z Flip 4과 함께하면 만날 수 있는 멋진 순간들(WONDER MOMENT)이 펼쳐집니다.
				</p>
				<p class="desc2">
					Z Flip 4에 담긴 자신의 모습에 푹 빠져 나르시시트가 된 조각상들과 놀다보면, 여러분도 어느새 빛나는 자신에게 빠지는 순간들과 마주할 거예요!
				</p>
				<p class="desc2">
					Narcissistic, My god I love it!
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">전시안내</h2>
				<dl>
					<dd  style="flex-direction: column;">
						<span class="sub_title" style="width: 100%;">MOMENT 1. What a WONDERFLIP!</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 12px;">SK텔레콤에서 더 특별한 Z Flip 4를 만나보세요!</span>
					</dd>
					<dd  style="flex-direction: column;">
						<span class="sub_title" style="width: 100%;">MOMENT 2. What a WONDER-WORKOUT</span>
						<span class="desc" style="margin-left: 0; font-weight: 500; color: #000;">Z Flip 4와 함께라면 운동 효과도 두배로!</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 12px;">플렉스 모드로 더 편리하게 운동 영상을 보며 따라하거나, 나의 운동 자세를 실시간으로 체크할 수 있어요.</span>
					</dd>
					<dd  style="flex-direction: column;">
						<span class="sub_title" style="width: 100%;">MOMENT 3. What a WONDER-SELFIE</span>
						<span class="desc" style="margin-left: 0; font-weight: 500; color: #000;">Z Flip 4와 함께라면 더 놀라운 셀카를!</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 12px;">더 선명하게 빛나는 자신을 만나보세요.</span>
					</dd>
					<dd  style="flex-direction: column;">
						<span class="sub_title" style="width: 100%;">MOMENT 4. What a WONDER-SHORTS</span>
						<span class="desc" style="margin-left: 0; font-weight: 500; color: #000;">더 길어진 배터리 시간으로 더 오래도록!</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 12px;">친구들과 춤추는 모습, GRWM 영상 등 소중한 순간을 더 오래 담아보세요.</span>
					</dd>
					<dd  style="flex-direction: column;">
						<span class="sub_title" style="width: 100%;">MOMENT 5. What a WONDER-CASE</span>
						<span class="desc" style="margin-left: 0; font-weight: 500; color: #000;">Z Flip 4와 함께라면 폰꾸도 내 취향대로!</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 12px;">Z Flip 4와 함께 빛나는 당신에게 빠져보세요! <br>Dive into WONDER ME!</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner">
				<h2 class="main-title">사전 예약 클래스 안내</h2>
				<p class="sub_title" >Wonder Workout Class <br>with Z Flip 4 & XEXYMIX</p>
				<p style="color: #000;">유명 운동 인플루언서들을 강사로 만날 수 있는 WONDER MOMENT!<br>7주간 애슬래저 브랜드 젝시믹스(XEXYMIX)와 함께 운동 클래스를 진행합니다.</p>
				<p class="desc">하단 클래스 자세히 보기를 클릭하여 내가 원하는 강사의 클래스를 신청해주세요. 매 회 사전 신청자 중 15명을 초청하여 함께합니다. </p>
				<p class="desc" style="font-size: 12px;">※ 참여 고객분들에게는 7만원 상당의 젝시믹스 제품을 드립니다.<br>※ 클래스 일정과 신청 기간은 상세페이지를 확인해주세요. </p>
				<div class="btn-wrap" style="margin-top: 24px;"><a href="/experience/program213?classId=213" class="btn-line big">클래스 자세히 보기</a></div>
			</div>
			<div class="details-inner">
				<h2 class="main-title">Z Flip 경품 이벤트</h2>
				<p class="sub_title">원하면 감히 뛰어 들어, 숨참고 Z Flip 4! <br>매주 Z Flip 4가 2대씩 터지는 경품 이벤트</p>
				<p style="color: #000; margin-top: 5px;">@tfactory_sampler 팔로우하고<br>매주 컨셉에 맞춰 T 팩토리에서 찍은 사진을 아래 해쉬태그와 함께 올리면 응모 완료! </p>
				<p class="sub_title" style="margin: 5px 0  4px 0;"> #wonderflip  #T팩토리</p>
				<p style="color: #000; margin-top: 5px; margin-bottom: 12px;">차주 화요일 무작위 추첨을 통해 당첨자를 공개합니다! </p>
				<ol style="color: #000;">
					<li>Week 1. T Factory를 방문한 누구나 </li>
					<li>Week 2. 친구와 함께 </li>
					<li>Week 3. 팩토리 가든에서 </li>
					<li>Week 4. 조각상과 함께 </li>
					<li>Week 5. 폰꾸 인증을</li>
					<li>Week 6. T Factory에서 릴스를</li>
					<li>Week 7. T Factory를 방문한 누구나 </li>
				</ol>
				<p class="desc">※ 경품으로 지급된 Z Flip 4는 티팩토리에서 수령 가능 합니다.</p>
			</div>

			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 프로그램은 T Factory 홍대점을 방문하여 스마트폰으로 본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령 : 만 14세 이상)</li>
					<li>※ 본 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner" style="padding: 40px 0 59px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program213?classId=213">
							<div class="desc">
								<p class="detail" style="margin-bottom: 48px;">Wonder Workout Class<br>with Z Flip 4 & XEXYMIX</p>
								<span class="topic">Workout Class</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class213-conts1.jpg" alt="TUMF">
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
  name: 'Program201',
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
