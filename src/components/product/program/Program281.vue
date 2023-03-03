<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class281-slide1.jpg" alt="Just paused, 우리가 담긴 순간들">
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
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Just paused, <br />우리가 담긴 순간들</h2>
        <p class="desc2" style="margin-top:24px;">
          시간이 흘러도 선명한 기억들이 있습니다.<br />
          어릴 적 사진 속 우리집의 익숙함이 그렇고,<br />
          졸업식 날 찍은 사진의 시원섭섭함이 그렇습니다.
        </p>
        <p class="desc2" style="margin-top:24px;">
          사진에는 시간을 저장할 수 있는 능력이라도 있는 걸까요?
        </p>
        <p class="desc2" style="margin-top:24px;">
          평범하게 지나가는 순간도 사진으로 남기면<br />
          특별한 추억으로 남아 셔터를 누르던 그 때 그 순간으로 우리를 데려다줍니다.
        </p>
        <p class="desc2" style="margin-top:24px;">
          23년 봄, <br />
          T Factory는 우리의 순간들을 조금 더 <br />
          특별하게 담는 방법을 소개하려고 합니다.
        </p>
        <p class="desc2" style="margin-top:24px; margin-bottom: 40px;">
          오늘이 특별히 추억되는 순간들로 남을 수 있도록 <br />
          손 안의 작은 카메라는 잠시 내려놓고 <br />
          &lt;Just Paused, 우리가 담긴 순간들&gt;을 함께 해요.
        </p>
      </div>
      <div class="details-inner" style="padding: 20px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">4 Concept Studios</h2>
        <p class="desc2" style="color: #3617ce; margin-bottom: 40px;">
          낯설고 색다른 공간 속 또다른 나, 친구, 연인의 순간을 담을 수 있도록 T팩토리 1층에 각기 다른 4가지 컨셉 스튜디오를 준비했어요.
        </p>

        <ul class="festival_events">
          <li>
            <p class="main_event" style="color: #000; font-weight: bold; margin-bottom: 10px;">Concept Studio 1. Rays of Light</p>
            <span>
              암흑 속 두 가지 컬러 조명으로 오묘한 분위기를 내는 스튜디오에요. 사진 작가의 전문 장비로 빛과 함께하는 몽환적인 순간을 담아보아요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">Concept Studio 2. 또 다른 나</p>
            <span>
              브라운관에 비친 나와 함께 독특한 Y2K 느낌을 자아내는 스튜디오에요. 포토매틱의 셀프 카메라를 통해 브라운관 속 또 다른 나와 함께하는 특별한 순간을 담아보아요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-bottom: 10px; margin-top: 20px;">Concept Studio 3. Retro</p>
            <span>
              레트로 감성을 담은 빈티지한 컨셉의 스튜디오에요. <br />
              빈티지한 색감의 폴라로이드 카메라로 감성 가득한 순간을 담아보아요.
            </span>
          </li>
          <li>
            <p class="sub_event" style="color: #000; font-weight: bold; margin-top: 20px; margin-bottom: 10px;">Concept Studio 4. Flowers</p>
            <span>
              푸른 하늘 배경 아래 알록달록 꽃들이 피어난 키치한 무드의 스튜디오에요. 인스탁스 폴라로이드 카메라로 환상의 세계에 온 듯한 순간을 담아보아요.
            </span>
          </li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 20px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">Vintage Camera Rental</h2>
        <p class="desc2" style="color: #000; margin-bottom: 21px;">
          Y2K 트렌드와 함께 빈티지 카메라 유행이 돌아왔어요. <br />
          한 번 쯤 빈티지 카메라를 경험해보고 싶었다면, <br />
          T Factory에서 취향에 맞는 카메라를 골라보세요. <br />
          T Factory에서 필름카메라, 캠코더, 레트로 디지털 카메라 총 25 종의 기기를 준비하였습니다. <br />
          필름카메라, 캠코더, 레트로 디지털 카메라를 대여하여 아름다운 홍대의 봄을 간직해보아요.
        </p>
        <ul class="info_text">
		      <li>- 대여 서비스는 사전 예약자에 한하며, 예약은 아래 링크를 통해 가능합니다.</li>
	      </ul>
        <div class="btn-wrap" style="margin-top: 20px">
		      <router-link class="btn-line big" to="/experience/program282?classId=245">
			      Photo Class 예약하기
		      </router-link>
	      </div>
      </div>
      <div class="details-inner" style="padding: 40px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">한 폭, Hanfolk <br/><span style="font-weight: 300;">한기재 작가 사진전</span></h2>
        <p class="desc2" style="color: #000; ">
          인생의 가장 아름다운 순간을 한 폭의 그림처럼 담는 한기재 작가의 사진전 &lt;한 폭, Hanfolk&gt;을 홍대 T Factory에서 전시기간동안 만나보실 수 있어요.<br />
          그 동안 작업했던 작가의 개인 작업뿐 아니라 이번 전시를 위해 T FACTORY와 함께 작업한 작품들을 한 곳에 모아 작가의 SNS 계정에서는 보지 못했던 새로운 작품들을 만나볼 수 있는 자리를 마련했습니다. <br />
          제주를 벗어나 한기재 작가의 시선으로 담은 홍대, 연남의 모습을 같이 감상해보아요.
        </p>
      </div>
      <div class="details-inner" style="padding: 40px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">사진 작가가 직접 알려주는 <br />Photo Class</h2>
        <p class="desc2" style="color: #000; ">
          우리가 매일 마주하는 일상의 풍경에서 새로운 모습과<br />
          색감을 포착하는 동원(@hello_dongwon),<br />
          한기재(@__hanfolk) 작가의 사진 클래스에요.<br />
          두 작가가 순간을 담는 방법과 시선, 그 속에 담긴 생각을 T Factory에서 함께 만나요.
        </p>
        <div class="btn-wrap" style="margin-top: 20px">
		      <router-link class="btn-line big" to="/experience/program283?classId=246">
			      Photo Class 예약하기
		      </router-link>
	      </div>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정 및 장소</h2>
        <dl>
          <dd>
            <span class="sub_title">전시 일정</span>
            <span class="desc" style="margin-left: 12px;">3월 8일(수) ~ 6월 중</span>
          </dd>
          <dd>
            <span class="sub_title">전시 장소</span>
            <span class="desc" style="margin-left: 12px;">T Factory</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner notification">
        <h2 class="main-title">안내사항</h2>
        <ul class="info_text">
          <li>※ 본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한 경우에만 참여 가능합니다.(체크인 가능 연령 : 만 14세 이상) </li>
          <li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program281',
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
