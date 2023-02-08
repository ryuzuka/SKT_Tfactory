<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class279-slide1.jpg" alt="Galaxy S23 POP UP Store">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 0 20px;">
        <kakao-share
         title="Galaxy S23 POP UP Store"
          description="Galaxy S23 POP UP Store"
        ></kakao-share>

        <em class="main-subtitle">[EVENT]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Galaxy S23 POP UP Store</h2>
        <p class="desc2" style="margin-top:8px;">
            T Factory와 함께하는 더 새로워진 갤럭시!<br/>
            설렘을 안고 갤럭시 S23를 기다려 온 모든 분들을 위해<br/>
            T Factory가 준비했어요.<br/>
            2억 화소 카메라로 찍는 셀피부터, 게임, 폰 꾸미기까지!<br/>
            이 모든 걸 T Factory에서 만나볼 수 있답니다.
          </p>
      </div>
      <div class="details-inner" style="border-top: none; padding: 20px 20px 40px;">
        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px;">셀카에 진심인 셀카장인이라면,</p>
            <span>
              업그레이드된 갤럭시 S23의 카메라 기능에 걸맞는 봄내음 가득한 셀피존이 반가울지도 몰라요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">요즘 핫한 게임을 가장 쿨하게 즐기는 방법</p>
            <span>
              갤럭시 S23의 향상된 성능으로 고사양 게임들을 더욱 실감나게 즐길 수 있어요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">나만의 룩을 즐길 줄 아시는 분인가요?</p>
            <span>
              콜라보 악세서리로 하드웨어부터 굿락 어플로 배경화면까지, 나만의 갤럭시 S23을 꾸밀 수 있어요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">스타벅스 에디션을 체험할 수 있는 유일한 공간</p>
            <span>
              오직 T Factory에서만 갤럭시X스타벅스 한정판 패키지가 있는 특별한 스타벅스를 체험할 수 있어요.
            </span>
          </li>
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">소중한 추억을 만드실 수 있도록,</p>
            <span>
              T factory에서 갤럭시 S23 셀피존에서 찍은 사진을 인화할 수 있는 체험을 준비했어요!
            </span>
          </li>
        </ul>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정 및 장소</h2>
        <dl>
          <dd>
            <span class="sub_title">일정</span>
            <span class="desc" style="margin-left: 12px;">2월 8일(수) ~ 3월 5일(일)</span>
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
