<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class203-slide1.jpg" alt="Arcade for NEW 0s">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="Arcade for NEW 0s"
          description="게임에 도전해봐! 두려울 거 없잖아!"
        ></kakao-share>

        <em class="main-subtitle">Arcade for NEW 0s</em>
        <h2 class="main-title" style="margin-top:4px;">게임에 도전해봐!<br>두려울 거 없잖아!</h2>
        <p class="desc2">
          iPhone14와 함께 대형 스크린에 미러링 되는 다양한<br>
          게임을 0답게 즐겨보세요!<br>
					일정 목표 이상의 점수를 달성하면 에어팟 3세대를 바로<br>
					선물로 드립니다.
        </p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title">일정</span>
						<span class="desc">10월 5일(수)~11월 7일(월)</span>
					</dd>
					<dd>
						<span class="sub_title">장소</span>
						<span class="desc">T Factory 1층 Flex Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program233',
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
