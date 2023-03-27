<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class282-slide1.jpg" alt="Vintage Camera Rental">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Vintage Camera Rental"
          description="Vintage Camera Rental"
        ></kakao-share>

        <em class="main-subtitle">[EXHIBITION]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Vintage Camera Rental</h2>
        <p class="desc2" style="margin-top:24px;">
          T Factory에서는 토이카메라를 포함한 필름카메라<br />
          10종, 레트로 캠코더 10종, 빈티지 디지털 카메라 5종<br />
          총 25종의 기기를 준비했어요.
        </p>
      </div>
      <div class="details-inner" style="padding: 20px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">대여 안내</h2>

        <ul class="festival_events" style="margin-bottom: 32px;">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px;">기본 대여 시간</p>
            <span>
              필름카메라 2시간 30분<br />
              캠코더 2시간<br />
              디지털카메라 2시간
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">요금</p>
            <span>
              필름카메라만 대여 : 5,000원 <br />
              필름카메라 대여 + 필름 구매 + 현상, 스캔 : 25,000원<br />
              캠코더, 디지털 카메라 : 5,000원
            </span>
          </li>
        </ul>

        <div class="btn-wrap" style="margin-top: 12px">
		      <router-link class="btn-line big" to="/experience/program284?classId=247">
			      Film Camera 살펴보기
		      </router-link>
	      </div>

        <div class="btn-wrap" style="margin-top: 12px">
		      <router-link  class="btn-line big" to="/experience/program285?classId=248">
			      Retro Camcorder 살펴보기
		      </router-link>
	      </div>

        <div class="btn-wrap" style="margin-top: 12px">
		      <router-link  class="btn-line big" to="/experience/program286?classId=249">
			      Vintage Digital Camera 살펴보기
		      </router-link>
	      </div>

        <div class="btn-wrap" style="margin-top: 12px">
		      <a class="btn-line big" href="#" @click.prevent="clickButton('https://booking.naver.com/booking/12/bizes/855366')">
			      예약하기
		      </a>
	      </div>

      </div>

      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정 및 장소</h2>
        <dl>
          <dd>
            <span class="sub_title">일정</span>
            <span class="desc" style="margin-left: 12px;">3월 8일(수) ~ 6월 중</span>
          </dd>
          <dd>
            <span class="sub_title">장소</span>
            <span class="desc" style="margin-left: 12px;">T Factory 2층 CS존 앞</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner notification">
        <h2 class="main-title">안내사항</h2>
        <ul class="info_text">
          <li>※ 본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한 경우에만 참여 가능합니다.(체크인 가능 연령 : 만 14세 이상) </li>
          <li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program281',
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
