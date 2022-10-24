<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class240-slide1.jpg" alt="롤드컵 4강 응원전">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="[T Factory X T1]"
          description="롤드컵 4강 응원전"
        ></kakao-share>

        <em class="main-subtitle">T Factory X T1</em>
        <h2 class="main-title" style="margin-top:4px; margin-bottom:16px; letter-spacing: -1px;">롤드컵 4강 응원전</h2>
				<p class="desc2" style="margin-top:12px;">
					T Factory에서 T1의 파이널 진출을 기원하며<br>
					뷰잉파티와 함께 다양한 현장 Event를 진행합니다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">응원일정</span>
						<span class="desc">10월 30일 (일) 오전 6시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">응모기간</span>
						<span class="desc">추후공지</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">당첨자발표</span>
						<span class="desc">추후공지</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 프로그램은 T Factory 홍대점을 방문하여 스마트폰으로<br>본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령:<br>만 14세 이상)</li>
					<li>※본 이벤트 세부 사항들은 업체 사정에 따라 별도의 안내 없이<br>중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner" style="padding: 40px 0 40px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program232?classId=190">
							<div class="desc">
								<p class="detail" style="margin-bottom: 48px;">T Factory의 모든 것을<br>NEW 0s답게 즐겨보세요!</p>
								<span class="topic">T Factory for New 0s!</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class235-conts1.jpg" alt="Workout Class">
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
  name: 'Program240',
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
