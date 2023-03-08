<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class284-slide1.jpg" alt="Film Camera">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="Film Camera"
          description="Film Camera"
        ></kakao-share>

        <em class="main-subtitle">[EXHIBITION]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Film Camera</h2>
        <p class="desc2" style="margin-top:24px;">
          기존의 필름을 소장하고 계시면 카메라만 대여 하실 수 있고, 필름이 없다고 하더라도 현장에서 구매 가능합니다.
        </p>
      </div>
      <div class="details-inner" style="padding: 20px 0 40px 20px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">필름카메라 원스톱 서비스</h2>
        <p class="desc2" style="color: #3617ce; margin-bottom: 40px; padding-right: 20px;">
          필름카메라 대여하시면
          필름 현상, 스캔 서비스를 무료로 진행해드려요. <br />
          디지털 스캔은 7~10일정도 소요되며,<br />
          메일로 전달됩니다.
        </p>

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">1. 라이카 미니</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts1-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts1-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts1-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  깔끔한 블랙 디자인</li>
              <li>•  단렌즈 자동초점 카메라  </li>
              <li>•  셀프타이머와 플래시 온오프 기능탑재<br /> 및 촬영 후 리와인딩이 자동탑재</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">2. 라이카 미니3</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts2-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts2-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts2-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  블랙핑크 제니 카메라 </li>
              <li>•  현재 재고를 구하기 쉽지 않은 카메라 </li>
              <li>•  독일 명품 카메라 Leica 주마렌즈를 탑재한<br />35mm P&S 필름카메라</li>
              <li>•  자동 필름카메라<br />(초점, 노출값, 필름 감기 모두 자동인 카메라)</li>
              <li>•  넓은 화각을 가지고 있어 스냅촬영 용이</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">3. 롤라이 프레고90</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts3-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts3-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts3-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  가벼운 무게에 다양한 기능을 가진 카메라 </li>
              <li>•  바리오곤 렌즈로 뛰어난 성능 </li>
              <li>•  28-90mm f3.6-9.8 HFT Marko</li>
              <li>•  간이파노라마, 손떨림 방지 등 많은 추가 기능을 지원</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">4. 삼성 케녹스 fx-4</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts4-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts4-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts4-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  블랙핑크 지수 카메라</li>
              <li>•  일명 코끼리 카메라로 자동플래쉬, 연속촬영, 셀프<br />타이머등 여러가지 기능을 가지고 있는 전자동 카메라 </li>
              <li>•  4배 고배율 줌이 가능하며 원하는 포커스를 맞추어<br />진한 느낌의 색감과 밸런스를 가진 사진 촬영 가능</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">5. 코니카 빅미니201</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts5-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts5-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts5-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  백예린 카메라</li>
              <li>•  오토포커스, 오토 클로즈업, 내장 플래시, 셀프타이머</li>
              <li>•  데이터백 기능 내장 (2019년까지 지원)  </li>
              <li>•  35mm F3.5</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">6. 로모 어파라트</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts6-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts6-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts6-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  21mm 광각 렌즈 </li>
              <li>•  내장된 플래시와 컬러 젤 필터 슬라이더 </li>
              <li>•  재미있는 효과를 위한 만화경 렌즈 </li>
              <li>•  0.2m 클로즈업 렌즈 </li>
              <li>•  독특한 다중노출 구도를 위한 스플리처</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">7. 로모 액션샘플러</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts7-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts7-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts7-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  4개의 렌즈가 순서대로 작동하여 촬영 </li>
              <li>•  고정 조리개, 셔터 속도 및 초점거리</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">8. 레토 3D</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts8-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts8-2.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  3가지 렌즈를 사용해 조금씩 다른 각도로 동일한<br />물체를 동시에 캡쳐 </li>
              <li>•  어플을 다운로드하여, 이미지를 업로드하고, <br />사진을 연결하여 3D GIF 편집가능</li>
            </ol>
          </li>

          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">9. 캐논 오토보이 줌 슈퍼</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts9-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts9-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts9-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  한소희 필름 카메라 </li>
              <li>•  블랙 색상의 유니크한 디자인 </li>
              <li>•  38-85mm 화각 CANON 줌렌즈 </li>
              <li>•  자동 필름카메라 (초점, 노출값, 필름감기 모두 자동) </li>
              <li>•  데이터백 기능<br />(사진 우측 하단의 날짜가 프린팅되는 기능)</li>
              <li>•  셀프타이머, 플래시제어, 연사 등 기본적인 기능 제어</li>
              <li>•  카메라 하단부 무선리모컨 탈부착 가능</li>
            </ol>
          </li>

          <li style="margin-bottom: 32px;">
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 32px;">10. 펜탁스 espio 120sw</p>
            <div class="slider-prd slider-contents">
              <swiper :options="swiperOption">
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts10-1.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts10-2.jpg" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="thumb"><img src="../../../assets/images/program/class284-conts10-3.jpg" alt=""></div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <ol>
              <li>•  레드벨벳 슬기 카메라 </li>
              <li>•  28~120mm의 줌렌즈로 다양한 화각의 촬영 가능 </li>
              <li>•  간단한 작동하여 초보자고 사용하기 편함</li>
              <li>•  간이 파노라마 지원</li>
              <li>•  세련된 외관 디자인</li>
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
  ol li{text-indent: -9px; padding-left: 9px;}
</style>
