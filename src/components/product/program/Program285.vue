<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class285-slide1.jpg" alt="Retro Camcorder">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Retro Camcorder"
          description="Retro Camcorder"
        ></kakao-share>

        <em class="main-subtitle">[EXHIBITION]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Retro Camcorder</h2>
      </div>
      <div class="details-inner" style="padding: 20px 0 40px 20px;">

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">1. 삼성 HMX-F90</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts1.jpg" alt="">
            </div>
            <ol>
              <li>•  500만 화소, 광학 52배 줌 </li>
              <li>•  720p HD 해상도 </li>
              <li>•  2.7in LCD</li>
              <li>•  인터벌촬영, 얼굴인식, 타임랩스, 손떨림 보정</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">2. 삼성 HMX-QF30</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts2.jpg" alt="">
            </div>
            <ol>
              <li>•  510만 화소, 20배 광학 줌, 40배 디지털 줌</li>
              <li>•  FULL HD 해상도</li>
              <li>•  고속촬영, 야간촬영, 얼굴인식, 슬로우모션, 일시정지, <br />아트인터벌촬영</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">3. SONY HDR-MV1</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts3.jpg" alt="">
            </div>
            <ol>
              <li>•  840만 화소, 30배 줌</li>
              <li>•  Full HD (1080p, 30프레임) </li>
              <li>•  NFC, WiFi HDMI출력</li>
              <li>•  리모컨어플 </li>
              <li>•  뮤직비디오 촬영 용이</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">4. SONY DCR-SX40</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts4.jpg" alt="">
            </div>
            <ol>
              <li>•  68만화소</li>
              <li>•  광학 60배 줌, 디지털 2000배 줌</li>
              <li>•  전자식 손떨림보정</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">5. SONY HDR-CX450</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts5.jpg" alt="">
            </div>
            <ol>
              <li>•  광학 30배 줌, 클리어 이미지 줌 60 배</li>
              <li>•  50Mbps, Full HD/ 60p 동영상</li>
              <li>•  Dolby 5.1ch 서라운드 시스템 </li>
              <li>•  스테디샷 인텔리전트 액티브 모드 (흔들림보정)</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">6. SONY HDR-CX130</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts6.jpg" alt="">
            </div>
            <ol>
              <li>•  420만 화소 </li>
              <li>•  스태디샷 액티브 모드 (흔들림보정)</li>
              <li>•  광학 30배 줌, 디지털 350배 줌</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">7. JVC GZ-MG750SKR</p>
            <div class="slider-prd slider-contents">
                <img ref="shareImage" src="../../../assets/images/program/class285-conts7.jpg" alt="">
            </div>
            <ol>
              <li>•  광학 39배 줌, 다이내믹 45배 줌, 디지털 800배 줌 </li>
              <li>•  Super Lulux (적은 조명에서도 높은 감도 보장)</li>
              <li>•  Advanced Image Stabilizer </li>
              <li>•  저속촬영용 Time-Lapse REC, Auto REC </li>
              <li>•  YouTube로 원터치 업로드</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">8. HP-CW450</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts8.jpg" alt="">
            </div>
            <ol>
              <li>•  1200만 화소 </li>
              <li>•  28mm F/2.8 - 110mm F/6.3의 4배줌 렌즈 </li>
              <li>•  동영상은 최대 640 x 480 해상도 </li>
              <li>•  포인트되는 레드 컬러의 세련된 디자인</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">9. CANON HG20</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts9.jpg" alt="">
            </div>
            <ol>
              <li>•  1920*1080 Full HD, 24Mbps</li>
              <li>•  207만 화소, 12배 줌</li>
              <li>•  인터벌촬영, 야간촬영, 시간간격촬영, 자동역광보정</li>
            </ol>
          </li>

          <li style="margin-bottom: 32px;">
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">10. SANYO VPC-WH1</p>
            <div class="slider-prd slider-contents">
              <img ref="shareImage" src="../../../assets/images/program/class285-conts10.jpg" alt="">
            </div>
            <ol>
              <li>•  수심3m의 방수기능 </li>
              <li>•  1280*720, 30p HD 동영상</li>
              <li>•  광학 30배 줌, 디지털 1500배 울트라 줌</li>
              <li>•  초당 13장씩 촬영하는 초고속 리버스 연사</li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
		<program-button v-show="false"></program-button>
		<div class="btn-wrap sticky">
			<a href="#" @click.prevent="clickButton('https://booking.naver.com/booking/12/bizes/855366')" class="btn-solid">예약하기</a>
		</div>
		<!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program285',
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
  ol{margin-top: 10px;}
  ol li{text-indent: -9px; padding-left: 9px;}
</style>
