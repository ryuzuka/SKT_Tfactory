<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class280-slide1.jpg" alt="Galaxy S23 POP UP Store">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Galaxy S23 POP UP Store"
          description="현장 이벤트"
        ></kakao-share>

        <em class="main-subtitle">[EVENT]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Galaxy S23 POP UP Store<br/>현장 이벤트</h2>
        <p class="desc2" style="margin-top:8px;">갤럭시 S23 팝업스토어를 더욱 풍성하게 즐기는 방법<br/>다양한 현장이벤트에 참여해보세요!</p>
      </div>
      <div class="details-inner" style="border-top: none; padding: 0 20px 35px;">
        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 10px;">1. [Selfie zone] 인증샷 이벤트</p>
            <span>
              셀피존에서 찍은 인증샷을 SNS에 업로드하면 추첨을 통해 스타벅스 음료 교환권을 드립니다.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">2. [Gaming zone] 인증샷 이벤트</p>
            <span>
              게이밍존에서 게임을 체험하는 인증샷을 SNS에 업로드하면 추첨을 통해 구글플레이 상품권을 드립니다.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">3. [Gaming zone] 카트라이더 기록갱신 이벤트</p>
            <span>
              게이밍존에서 카트라이더 일정 목표 이상의 기록을 달성하고 인증샷을 SNS에 업로드하면 추첨을 통해 구글플레이 상품권을 드립니다.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">4. [스타벅스 체험 zone] 음료 시음 서비스</p>
            <span>
              Selfie zone과 Gaming zone에서 인증샷 이벤트에 참여하신 분들에 한하여 스타벅스존에서 음료를 제공해드립니다. (1일 100명 선착순)
            </span>
          </li>
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">5. [스타벅스 체험 zone] 스타벅스 e-기프트카드 이벤트</p>
            <span>
              Selfie zone과 Gaming zone에서 인증샷 이벤트에 참여하신 분들에 한하여, 스타벅스 e-기프트카드를 드립니다. (1000명 선착순)
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
  name: 'Program280',
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
