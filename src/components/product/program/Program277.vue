<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class277-slide1.jpg" alt="T Factory x T1 Will to Win 스프링시즌 Event">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="T Factory x T1"
          description="Will to Win 스프링시즌 Event"
        ></kakao-share>

        <em class="main-subtitle">[EVENT]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">T Factory x T1 <br/>Will to Win 스프링시즌 Event</h2>
        <p class="desc2" style="margin-top:8px;">
					LCK 2023 스프링시즌 개막 기념 왕좌 탈환을 위한 T1 <br/>의 여정에 함께할 T1 에 진심인 여러분을 초대합니다.<br/>
          T Factory 에서 펼쳐지는 T1 LCK 스프링시즌 한정 이벤<br/>트에 참여해보세요!
        </p>
      </div>
      <div class="details-inner" style="border-top: none; padding: 0 20px 40px;">
        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #2617ce; font-weight: bold; margin-bottom: 12px; margin-top: 0;">1. Will to Win T1 한정판 굿즈 팝업스토어</p>
            <span>
              단 4주동안 T1 한정판 굿즈 팝업스토어가 오픈됩니다.<br/>
              매주 새롭게 공개되는 한정판 굿즈를 오직 T Factory에서 만나보세요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #2617ce; font-weight: bold; margin-bottom: 12px; margin-top: 32px;">2. Will to Win T1 선수단 레고 피규어 득템 이벤트</p>
            <span>
              한정판 굿즈를 구매하신 고객에 한해 T1 선수단 레고 피규어를 선물로 드립니다.<br/>
              각 주마다 증정되는 선수의 피규어가 다르니 매주 T Factory에 방문하여 한정판 굿즈도 득템하고 T1 선수단 완전체 피규어를 완성해보세요. (T1 한정판 굿즈 10,000 원 이상 구매 고객 대상, 200 명 선착순 증정)
            </span>
          </li>
          <li>
            <div class="btn-wrap" style="margin-top: 20px;">
              <button class="btn-line big" @click="clickButton">굿즈, 피규어 라인업 확인하기</button>
            </div>
          </li>
          <li>
            <p class="sub_event" style="color: #2617ce; font-weight: bold; margin-bottom: 12px; margin-top: 32px;">3. Will to Win T1 티게더 뷰잉파티 이벤트</p>
            <span>
              LCK 2023 스프링시즌 T1 경기를 생생하게 즐길 수 있는 또 하나의 이벤트<br/>
              T1 의 승리를 기원하며 함께 즐길 팬분들을 티팩토리 뷰잉파티에 초대합니다.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-top: 16px; margin-bottom: 4px;">응원전 일정</p>
            <span>
              2 월 12 (일) 17:30~ [T1 vs DRX]<br/>
              3 월 16 일 (목) 17:00~ [T1 vs DK]<br/>
              4 월 플레이오프 여부에 따라 추후 일정 공개
            </span>
          </li>
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-top: 16px; margin-bottom: 4px;">응모기간</p>
            <span>
              2월 티게더 : 2/7(화) ~ 2/8(수)<br/>
              3월 티게더 : 3/11(토) ~ 3/12(일)
            </span>
          </li>
          <li style="margin-bottom:0;">
            <p class="main_event" style="color: #000; font-weight: bold; margin-top: 16px; margin-bottom: 4px;">당첨자 발표</p>
            <span>
              2/9(목), 3/13(월) 당첨자 개별 문자 안내
            </span>
          </li>
          <li>
            <div class="btn-wrap" style="margin-top: 24px;">
	            <router-link to="/experience/program278?classId=239" class="btn-line big">뷰잉파티 응모하기</router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정 및 장소</h2>
        <dl>
          <dd>
            <span class="sub_title">일정</span>
            <span class="desc" style="margin-left: 12px;">2월 7일(화) ~ </span>
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
  name: 'Program277',
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
