<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class305-slide1.jpg" alt="갤럭시 & 아이폰 비하인드">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="갤럭시 & 아이폰 비하인드"
          description="갤럭시 & 아이폰 비하인드"
        ></kakao-share>

        <em class="main-subtitle">[Crew Class]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">갤럭시 & 아이폰 비하인드</h2>
        <p class="desc2" style="margin-top:24px;">
          주로 쓰는 기능 뒤에 숨겨진 편의기능 파고들기<br />
          알아 놓으면 편리한 설정부터 숨겨진 기능까지!<br />
          크루들의 꿀팁 전수받기!!
        </p>
      </div>
      <div class="details-inner" style="padding: 30px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">클래스 소개</h2>

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px;">클래스 구성</p>
            <span>
              1. 편의기능 설명<br />
              2. 취향대로 편의기능 설정<br />
              3. 꿀팁 공유 (나만의 꿀팁도 무관)
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">준비물</p>
            <span>삼성 or 애플 모바일 폰</span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">추천 대상</p>
            <span>내가 쓰는 기능 이외에 재미있는 기능이 궁금하신 분<br />스마트폰을 조금 더 편리하게 쓰고 싶은 분</span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">장소</p>
            <span>T Factory 2층</span>
          </li>
        </ul>

      </div>

      <div class="details-inner notification">
        <h2 class="main-title">안내사항</h2>
        <ul class="info_text">
          <li>해당 클래스는 약 30분 소요됩니다.</li>
          <li>미취학 아동의 경우 클래스 참여가 제한됩니다.</li>
          <li>동일한 클래스에 중복 참여는 불가합니다.</li>
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
  name: 'Program305',
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
	  clickButton (redirectURL) {
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
