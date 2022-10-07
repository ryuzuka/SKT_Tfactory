<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
<!--			<img ref="shareImage" src="../../../assets/images/program/class203-slide1.jpg" alt="Untact Shop for NEW 0s">-->
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="Untact Shop for NEW 0s"
          description="대면보다 비대면이 편한 NEW 0s를 위한"
        ></kakao-share>

        <em class="main-subtitle">Untact Shop for NEW 0s</em>
        <h2 class="main-title" style="margin-top:4px;">대면보다 비대면이<br>편한 NEW 0s를 위한</h2>
        <p class="desc2">
          T Factory의 무인매장 T Factory 24를 아이폰14 전용<br>
          매장으로 운영합니다!<br>
          T Factory에서만 만날 수 있는 가격!<br>
          애플 정품 액세서리를 할인 판매하는 특별한 기회를<br>
          놓치지 마세요!
        </p>
			</div>
      <div class="details-inner">
				<h3 class="subtit">할인판매 구성</h3>
        <ol class="step-list" start="margin-top:12px">
          <li>iPhone14 정품 케이스 : <span style="color:#000;">전품목 5% 할인판매</span></li>
          <li>iPhone13 정품 케이스 : <span style="color:#000;">전품목 30% 할인판매</span></li>
          <li>AirPods : AirPods 2, AirPods Pro <span style="color:#000;">20% 할인판매</span></li>
        </ol>
        <ul class="texts-info" style="color:#949494; margin-top: 4px;">
          <li>※iPhone14전시리즈, iPhone13 mini 즉시개통 가능</li>
        </ul>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title">일정</span>
						<span class="desc">10월 7일(금) 부터 매진시까지</span>
					</dd>
					<dd>
						<span class="sub_title">장소</span>
						<span class="desc">T Factory 1층 무인매장</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">유의사항</h2>
				<ul>
					<li>※제품마다 한정수량으로 조기 품절될 수 있습니다.</li>
					<li>※ iPhone 13, iPhone14 휴대폰 구매는 오전 11시 ~오후 9시에만 구매 가능하며, 액세서리는 24시간 구매 가능합니다.</li>
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
  name: 'Program234',
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
