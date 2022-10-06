<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class229-slide1.jpg" alt="iPhone 14/Pro 완전정복">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details">
      <div class="details-header" style="padding: 32px 20px 40px;">
        <kakao-share
          title="[Crew Class for New 0’s] iPhone 14/Pro 완전정복"
          description="캐시&딘과 함께하는 iPhone14/Pro 기능 파헤치기 클래스"
        ></kakao-share>

        <em class="flag-solid7">MEDIA CLASS</em>
        <h2 class="details-tit">
          [Crew Class for New 0’s] <br>iPhone 14/Pro 완전정복
        </h2>
        <div class="tags">
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">초보용</span>
          <span class="flag-basic">iPhone14</span>
        </div>
        <p class="desc type2">
          캐시&딘과 함께하는 iPhone14/Pro 기능<br>파헤치기 클래스
        </p>
        <h3 class="subtit">클래스 소개</h3>
        <p style="margin-top: 12px;">
          iPhone14/Pro의 구매를 망설이고 계시나요?<br>
          iPhone14/Pro를 완전정복하기 위한 클래스를 준비<br>
          했습니다. 새롭게 출시된 애플워치 시리즈와 iPhone의<br>
          연계 활용법까지 알 수 있는 클래스!
        </p>
        <h3 class="subtit">추천 대상</h3>
        <ol class="step-list" start="margin-top:12px">
          <li>iPhone 14/Pro 구매전 기능을 제대로 알아보고<br> 싶으신 분</li>
          <li>iPhone 13과 비교해 달라진 기능을 체험해보고<br> 싶으신 분</li>
        </ol>
      </div>
      <div class="details-inner">
				<h3 class="subtit">소요시간 및 장소</h3>
				<dl>
					<dd>
						<span class="sub_title" style="width: 52px;">소요시간</span>
						<span class="desc">1시간</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 52px;">장소</span>
						<span class="desc">T Factory 2층, 애플 CSP</span>
					</dd>
				</dl>
			</div>
      <div class="details-inner notification" style="padding: 40px 20px 20px;">
				<h3 class="subtit">유의사항</h3>
				<ul>
					<li>※해당 클래스는 약 1시간 소요됩니다.</li>
					<li>※동일한 클래스에 중복 참여는 불가합니다.</li>
					<li>※본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
					<li>※본 클래스 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program229',
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
