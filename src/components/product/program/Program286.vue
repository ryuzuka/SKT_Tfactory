<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class286-slide1.jpg" alt="Vintage Digital Camera">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Vintage Digital Camera"
          description="Vintage Digital Camera"
        ></kakao-share>

        <em class="main-subtitle">[EXHIBITION]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Vintage Digital Camera</h2>
      </div>
      <div class="details-inner" style="padding: 20px 0 40px 20px;">

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">1. 삼성 디지맥스 130</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts1-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts1-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts1-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  필름 카메라느낌의 초기형 디카 디자인</li>
              <li>•  뷰파인더 장착</li>
              <li>•  100만 화소</li>
              <li>•  42.5mm F/2.8</li>
              <li>•  동영상은 지원하지 않음</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">2. 삼성 HMX-E10</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts2-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts2-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts2-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  1920x1080의 Full HD화질과 800만화소의<br />초소형 캠코더</li>
              <li>•  270도 회전이 가능한 스위블 렌즈 장착</li>
              <li>•  셀카에 최적화된 디카</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">3. 코닥 이지쉐어 C330</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts3-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts3-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts3-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  뷰파인더 장착 </li>
              <li>•  400만 화소, 3배 줌 렌즈 </li>
              <li>•  최대 13cm 근접촬영 가능 </li>
              <li>•  320*240해상도의 동영상 촬영</li>
              <li>•  정사각형에 가까운 4:3 비율</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">4. 니콘 쿨픽스2200</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts4-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts4-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts4-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  한 손에 들어오는 작고 가벼운 사이즈</li>
              <li>•  200만 화소 </li>
              <li>•  36-108mm (f/2.6-4.7)의 3배줌</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">5. 후지 파인픽스 버전 모델</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts5-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts5-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class286-conts5-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  한 손에 들어오는 작고 가벼운 사이즈</li>
              <li>•  32mm F/2.9 - 9.6mm F/5.2의 3배 줌 렌즈</li>
              <li>•  1400만 화소 </li>
              <li>•  모션 파노라마 지원 </li>
              <li>•  동영상은 최대 1280 x 720 해상도 지원</li>
            </ol>
          </li>
        </ul>

        <div class="btn-wrap" style="margin-top: 20px; padding-right: 20px;">
		      <a class="btn-line big" to="/experience/program286?classId=249" href="https://booking.naver.com/booking/12/bizes/855366">
			      예약하기
		      </a>
	      </div>

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
  name: 'Program284',
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
  ol li{text-indent: -9px; padding-left: 9px;}
</style>
