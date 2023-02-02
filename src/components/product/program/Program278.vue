<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class278-slide1.jpg" alt="Will to Win T1 티게더 뷰잉파티 Event">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Will to Win"
          description="T1 티게더 뷰잉파티 Event"
        ></kakao-share>

        <em class="main-subtitle">[EVENT]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Will to Win <br/>T1 티게더 뷰잉파티 Event</h2>
        <p class="desc2" style="margin-top:8px;">
					LCK 2023 스프링시즌 T1 경기를 <br/>
          생생하게 즐길 수 있는 또 하나의 이벤트<br/>
          T1 의 승리를 기원하며 함께 즐길 팬분들을<br/>
          T Factory 뷰잉파티에 초대합니다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title">뷰잉파티 일정</span>
            <span class="desc" style="margin-left: 12px;">2월 12일 (일) 17:30~ [ T1 vs DRX ]</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 80px;">응모기간</span>
            <span class="desc" style="margin-left: 12px;">2/7(화) ~ 2/8(수)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 80px;">당첨자 발표</span>
            <span class="desc" style="margin-left: 12px;">2/9(목) 15시 당첨자 개별 문자 안내</span>
          </dd>
        </dl>
        <div class="btn-wrap" style="margin-top: 24px;">
          <a class="btn-line big" style="color: #787878; border: 1px solid #f0f0f0; background-color: #f0f0f0;"  >뷰잉파티 응모하기</a>
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
  name: 'Program278',
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
