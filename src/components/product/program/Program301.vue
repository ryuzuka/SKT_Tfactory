<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class301-slide1.jpg" alt="에이닷으로 사진편집하기">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="에이닷으로 사진편집하기"
          description="에이닷으로 사진편집하기"
        ></kakao-share>

        <em class="main-subtitle">[Crew Class]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">에이닷으로 사진편집하기</h2>
        <p class="desc2" style="margin-top:24px;">
          이제는 사진편집도 인공지능 시대!!<br />성장형AI 서비스 에이닷을 통해 사진을 쉽고 재미있게 편집해 보세요.
        </p>
      </div>
      <div class="details-inner" style="padding: 30px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">클래스 소개</h2>

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px;">클래스 구성</p>
            <span>
              1. 에이닷 설명 <br />
              2. AI페이스, AI마스크<br />
              3. AI지우개, AI수평, AI자르기
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">준비물</p>
            <span>얼굴이 정면으로 나온 사진<br />에이닷 어플</span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">추천 대상</p>
            <span>에이닷 사진 서비스를 체험해 보고 싶으신 분</span>
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
<!--		<program-button></program-button>-->
		<!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program301',
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
