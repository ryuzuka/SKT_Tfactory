<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class298-slide1.jpg" alt="LP 청음 입문">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="LP 청음 입문"
          description="LP 청음 입문"
        ></kakao-share>

        <em class="main-subtitle">[Crew Class]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">LP 청음 입문</h2>
        <p class="desc2" style="margin-top:24px;">
          내 인생 첫 LP 감상을 위한 입문 가이드.<br />
          턴테이블로 LP를 플레이해보고 장르별 명반들을 감상해 보세요.
        </p>
      </div>
      <div class="details-inner" style="padding: 30px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">클래스 소개</h2>

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px;">클래스 구성</p>
            <span>
              1. LP의 원리<br />
              2. 세팅 방법<br />
              3. 음악 나눠 듣기
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">준비물</p>
            <span>없음. <br />함께 듣고 싶은 LP를 1장 갖고 오셔도 좋습니다.</span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">추천 대상</p>
            <span>LP를 통한 음악 감상에 관심이 있는 입문자</span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">장소</p>
            <span>T Factory 2층</span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">클래스 리더 소개</p>
            <span>
              싱어송라이터 ‘후추스’, 2014년 데뷔 이후 두 장의 정규 앨범과 10여장의 싱글을 통해 밴드 스타일의 음악을 선보이고 있다.<br />
              SBS 드라마 ‘치얼업’ MBC ‘봄이 오나봄’, 영화 ‘죽어도 해피엔딩’, 한국관광공사 TV CF, 오!부라더스, 미미시스터즈 등의 음악을 을 작업하였다.
            </span>
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
  name: 'Program298',
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
