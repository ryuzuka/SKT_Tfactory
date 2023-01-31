<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class274-slide1.jpg" alt="T Factory x FLO 덕콘 | 2023.2 MPMG WEEK">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="2월의 덕콘 with MPMG | MPMG WEEK"
          description="T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트"
        ></kakao-share>

        <em class="main-subtitle">T Factory x FLO</em>
        <h2 class="main-title" style="margin-top:9px;">2월의 덕콘 <br />with MPMG</h2>
        <p class="desc2" style="margin-top:8px;">
					T Factory와 FLO가 함께 만드는 팬 초청 소규모 콘서트!<br />
					지친 일상 속 힐링을 선사하기 위해 <br />매월 다양한 아티스트의 무료 콘서트를 진행합니다.<br />
					사연을 적고 콘서트 초청의 기회를 잡아보세요.
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 72px;">2023.2.1~2.5<em style="margin-left:12px;">MPMG WEEK</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">MPMG WEEK</h2>
        <p class="desc2" style="margin-top: 8px;">
					[덕콘 X MPMG WEEK]<br />
					자랑하고 싶었지만 그러지 못했던 비밀들. 여러분, 우리 <br />T팩토리 2층 MPMG 비밀 정원에서 만나요!
				</p>
        <p class="desc2" style="margin-top: 20px;">
          일시 : 2023년 2월 1일(수) - 2월 5일(일)<br />
					장소 : T 팩토리 2층<br />
					운영 시간 : 오후 12시 - 오후 8시
        </p>
				<p class="desc2">
          <b style="display: inline-block; color: #000; margin-top: 20px; margin-bottom: 4px;">프로그램 1. <br />MPMG의 고품격 아트전시 <em style='color: #3617ce; font-style: italic; font-weight: 900;'>‘st:ART’</em></b>
        </p>
				<p class="desc_20" style="margin-top: 8px; margin-bottom: 30px;">
					2021년부터 2022년의 MPMG를 총망라하는 고품격 <br />아트전시 영상, 그래픽 디자인 아카이빙과 그 비하인드를 <br />보여드립니다.
				</p>
				<p class="desc2">
          <b style="display: inline-block; color: #000; margin-top: 20px; margin-bottom: 4px;">프로그램 2. <br />그 옷이 이 옷?! <em style='color: #3617ce; font-weight: 900;'>‘MPMG Flea Market’</em></b>
        </p>
				<p class="desc_20" style="margin-top: 8px;">
					MPMG의 봄맞이 옷장 정리.<br />
					아티스트가 착용했던 옷을 구매하실 수 있습니다.<br />
					* 의류 입고 시간은 매일 오후 12시입니다.<br />
					* 의류 구매는 1인 3벌까지 구매 가능합니다.<br />
					* 모든 관객의 개인용 마스크 착용은 필수입니다.
				</p>
				<p class="desc2">
          <b style="display: inline-block; color: #000; margin-top: 20px; margin-bottom: 4px;">프로그램 3. <br />MPMG WEEK X T 팩토리 <em style='color: #3617ce; font-weight: 900;'>‘Lazy Afternoon’</em></b>
        </p>
				<p class="desc_20" style="margin-top: 8px;">
					특별한 오후를 만들어줄 버스킹 공연에<br />
					여러분을 초대합니다!<br />
					2월 1일(수) 오후 4시 : 이준형(유다빈밴드)<br />
					2월 2일(목) 오후 4시 : 제이유나(J.UNA)<br />
					2월 3일(금) 오후 4시 : 홍다혜(OurR(아월))<br />
					* 토크와 공연을 포함하여 아티스트 당 30분씩<br />
					진행됩니다.<br />
					* 무료로 진행되며 자유롭게 관람하실 수 있으나<br />
					내부가 혼잡할 경우 인원 통제를 할 수 있습니다.<br />
					* 모든 관객의 개인용 마스크 착용은 필수입니다.
				</p>
				<p class="desc2">
          <b style="display: inline-block; color: #000; margin-top: 20px; margin-bottom: 4px;">프로그램 4. 뭔가 보여드리겠습니다. <br /><em style='color: #3617ce; font-weight: 900;'>‘보이는 라디오 : 공개방송’</em></b>
        </p>
				<p class="desc_20" style="margin-top: 8px;">
					2월 4일(토) 오후 3시 : GUEST 솜브레로<br />
					2월 5일(일) 오후 3시 : GUEST 구만(9.10000)<br />
					* 보이는 라디오 한 회차 당 120분씩 진행됩니다.<br />
					* 무료로 진행되며 자유롭게 관람하실 수 있으나 내부가 혼잡할 경우 인원 통제를 할 수 있습니다.<br />
					* 모든 관객의 개인용 마스크 착용은 필수입니다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px; margin-bottom: 6px;">공연일</span>
						<span class="desc">2월 1일(수) ~ 2월 5일(일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">장소</span>
						<span class="desc">T Factory 2층, 0 Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※ 프로그램은 무료로 진행되며 따로 신청없이 자유롭게 관람하실 <br />수 있으나 내부가 혼잡할 경우 인원 통제를 할 수 있습니다.</li>
					<li>※ <b>MPMG Flea Market</b> 의류 입고 시간은 매일 오후 12시입니다.</li>
					<li>※ 의류 구매는 1인 3벌까지 구매 가능합니다.</li>
					<li>※ 'Lazy Afternoon’ 은 토크와 공연을 포함하여 아티스트 당 30<br />분씩 진행됩니다.</li>
					<li>※ 보이는 라디오 공개방송은 한 회차 당 120분씩 진행됩니다.</li>
					<li>※ 모든 관객의 개인용 마스크 착용은 필수입니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">23년 2월의 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">2.1<br />WED<br />~2.5<br />SUN</span>
	          </div>
	          <router-link to="/experience/program274?classId=231">
		          <div class="card" Style="margin-left: 0px;">
			          <div class="text">
				          <p class="name">MPMG WEEK</p>
				          <p class="time">2.1 WED ~ 2.5 SUN</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class273-musician1.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>2.17<br>FRI</span>
	          </div>
	          <router-link to="/experience/program275?classId=232">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">노리플라이</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class273-musician2.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
          <li>
	          <div class="date">
		          <span>2.24<br>FRI</span>
	          </div>
	          <router-link to="/experience/program276?classId=233">
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">제이유나</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class273-musician3.png" alt="musician">
			          </div>
		          </div>
	          </router-link>
          </li>
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
  name: 'Program274',
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
