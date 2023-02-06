<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class279-slide1.jpg" alt="Galaxy S23 POP UP Store">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Galaxy S23 POP UP Store"
          description="Galaxy S23 POP UP Store"
        ></kakao-share>

        <em class="main-subtitle">[EVENT]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Galaxy S23 POP UP Store</h2>
        <p class="desc2" style="margin-top:8px;">Galaxy S23 POP UP Store T Factory에서 더 새로워진 <br/>갤럭시를 만나보세요!</p>
        <p class="desc2" style="margin-top:25px;">신상폰에 누구보다 진심인 당신을 위해 T Factory가 준<br/>비했어요.<br/>
          2억 화소 카메라로 찍는 셀피부터 게임, 내 취향 가득 담<br/>은 폰꾸까지 마음껏 갤럭시S23을 씹고 뜯고<br/>
          맛보고 즐기는 체험공간.</p>
        <p class="desc2" style="margin-top:25px;">새로워진 갤럭시S23을 만나는 새로운 방식.<br/>T Factory에서 경험해보세요.</p>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">갤럭시 S23을<br/>만끽하는 6가지 Zone</h2>
        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">1. [체험 zone]</p>
            <span>
              누구보다 빠르게 갤럭시 S23을 만나보고 싶은 얼리어답터를 위한 공간. 갤럭시 S23 기기를 대여해 T Factory 안에서 마음껏 경험해보세요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">2. [Selfie zone]</p>
            <span>
              셀카에 진심인 요즘 인스타그래머를 위한 공간.
              업그레이드된 갤럭시 S23의 카메라 기능으로 포토존에서 인증샷을 남겨보세요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">3. [Gaming zone]</p>
            <span>
              요즘 가장 핫한 게임을 가장 쿨하게 하고싶은 게이머를 위한 공간. 갤럭시 S23의 향상된 성능으로 고사양 게임들을 더욱 실감나게 즐겨보세요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">4. [폰꾸 zone]</p>
            <span>
              세상에서 하나뿐인 갤럭시S23을 위한 공간.
              콜라보 악세서리로 하드웨어부터 굿락 어플로 배경화면까지, 나만의 갤럭시 S23을 꾸며보세요.
            </span>
          </li>
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">5. [스타벅스 체험 zone]</p>
            <span>
              한정판이라면 일단 솔깃하는 굿즈 콜렉터를 위한 공간
              갤럭시X스타벅스 한정판 패키지가 있는 특별한 스타벅스로 놀러오세요.
            </span>
          </li>
          <li style="margin-bottom:0;">
            <p class="main_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">6. [Photo&Event zone]</p>
            <span>
              T factory에서 갤럭시 S23과 함께했던 특별한 체험을 기념하기 위한 공간. 셀피존 사진도 인화하고 현장 이벤트로 추억을 남겨보세요.
            </span>
          </li>
        </ul>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정 및 장소</h2>
        <dl>
          <dd>
            <span class="sub_title">일정</span>
            <span class="desc" style="margin-left: 12px;">2월 8일(수) ~ 2월 말</span>
          </dd>
          <dd>
            <span class="sub_title">장소</span>
            <span class="desc" style="margin-left: 12px;">T Factory</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner notification">
        <h2 class="main-title">안내사항</h2>
        <ul class="info_text">
          <li>※ 본 이벤트는 T Factory를 방문하여 스마트폰으로 본인인증 한 경우에만 참여 가능합니다.(본인인증 가능 연령 : 만 14세 이상) </li>
          <li>※ 본 이벤트 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program279',
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
		  const redirectURL = 'https://www.instagram.com/tfactory_official/'
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
