<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class245-slide1.jpg" alt="나만의 디지털 메이트를 만나는 곳 A. Factory">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details">
      <div class="details-header" style="padding: 32px 20px 40px;">
        <kakao-share
          title="나만의 디지털 메이트를 만나는 곳 A. Factory"
          description="에이닷 팩토리에서 나의 디지털 메이트를 만나세요!"
        ></kakao-share>

        <em class="flag-solid7">EXHIBITION</em>
        <p class="main-subtitle" style="color: #000;">나만의 디지털 메이트를 만나는 곳 A. Factory</p>
        <h2 class="details-tit">
          에이닷 팩토리에서 나의 디지털<br>메이트를 만나세요!
        </h2>
        <div class="tags">
          <span class="flag-basic">전시</span>
          <span class="flag-basic">체험</span>
          <span class="flag-basic">이벤트</span>
        </div>
        <h3 class="subtit" style="font-size: 14px; margin-top: 20px;">[전시소개]</h3>
        <p style="margin-top: 12px;">
          사람들은 아직 잘 모르지만<br>
          디지털 세계엔 우리와 연결된 에이닷이 살고 있어요.<br>
        </p>
        <p style="margin-top: 12px;">
          에이닷 팩토리는 디지털 세계에 살고 있는 나만의<br>
          에이닷을 현실 세계로 불러올 수 있는 특별한 곳이에요.<br>
        </p>
        <p style="margin-top: 12px;">
          나의 디지털 메이트는 과연 어떤 모습일지 궁금하지<br>
          않나요? 에이닷 팩토리에서 찾아보세요!<br>
        </p>
        <h3 class="subtit" style="font-size: 14px;">에이닷 팩토리 체험 point!</h3>
        <p style="margin-top: 12px;">
          -3가지 미션을 해결하고 나만의 디지털 메이트 에이닷을 찾으세요.<br>
          -에이닷 빌리지에서 에이닷이 준비한 특별한 선물을 꼭 받아가세요!<br>
        </p>
      </div>
      <div class="details-inner">
				<h3 class="subtit">일정 및 장소</h3>
				<dl>
					<dd>
						<span class="sub_title" style="width: 26px;">일정</span>
						<span class="desc">11월 11일(금)~ 2023년 2월</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 26px;">장소</span>
						<span class="desc">T Factory 1층 Flex Stage</span>
					</dd>
				</dl>
			</div>
      <div class="details-inner notification" style="padding: 40px 20px;">
				<h3 class="subtit">안내사항</h3>
				<ul>
					<li>※본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한<br>경우에만 참여 가능합니다. (본인인증 가능 연령: 만 14세 이상)</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
    </div>
    <!-- //details -->

    <!-- button set -->
		<!--program-button></program-button-->
		<!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program245',
  components: {
    KakaoShare,
    ProgramButton
  },
  data () {
    return {
	    isLogin: false,
	    isBookingYn: false,
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        }
      }
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
