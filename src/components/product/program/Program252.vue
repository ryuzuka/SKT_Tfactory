<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class252-slide1.jpg" alt="수험생을 위한 스페셜 덕콘 | 2022.11 치즈">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수험생을 위한 스페셜 덕콘 | 치즈"
          description="그동안 열심히 달려온 수험생들을 위해 T Factory에서 많은 아티스트들과 함께 <스페셜 덕콘>을 준비했어요!"
        ></kakao-share>

        <em class="main-subtitle">[수능이벤트] 얘드라 콘서트 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">수험생을 위한<br />&lt;스페셜 덕콘&gt;</h2>
        <p class="desc2" style="word-break:keep-all;">
          그동안 열심히 달려온 수험생들을 위해 T Factory에서 많은 아티스트들과 함께 &lt;스페셜 덕콘&gt;을 준비했어요! 만나고 싶은 최애 아티스트가 라인업에 있다면 지금 바로 참가 신청해보세요!<br>
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 81px;">2022. 11. 28 PM 7:00<em style="margin-left:12px;">치즈</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">치즈</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class252-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					각기 다른 치즈의 풍미처럼 감정의 다양한 형태를 현재에 투영하여 노래하는 CHEEZE(치즈)
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					편안한 어쿠스틱 팝, 깊이 있는 발라드, 그루브를 유발하는 댄스 곡까지 폭넓은 음악적 영역을 유영하며 CHEEZE 라는 하나의 장르로 자리 잡기까지 달총의 목소리는 2011년 4인조 데뷔 때부터 2017년 1인 밴드가 된 지금까지 변하지 않은 치즈의 중심이었다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					젊음의 꾸밈없고 순수한 모습, 지나간 추억 속 저릿한<br />순간의 감정 등을 담은 치즈의 수많은 곡들은 매번 우리에게 두근거리는 설렘과 기분 좋은 에너지를 선사한다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					날씨나 계절, 시간과 공간에 다양한 형태로 자리 잡은<br />치즈의 곡들을 더욱 풍부한 표정으로 만드는 힘은<br />치즈만의 해석으로 써 내려간 노랫말, 달총의 독보적인 음색이라고 해도 과언이 아닐 것이다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					작사, 작곡 능력은 물론 달총의 청아하고 듣기 편안한 창법은 치즈만의 강점으로 장르 불문 수많은 아티스트와의 피처링, 드라마 OST 참여 등 끊임없는 러브콜을 받고 있으며 발매하는 곡마다 차트 진입, 단독 공연 1분 매진<br />을 기록하며 인디씬의 경계를 허물고 수많은 리스너에게 뮤지션으로서의 성공적 활동 중임을 계속해서 입증해내고 있다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">공연일</span>
						<span class="desc">11월 28일 (월) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">신청기간</span>
						<span class="desc">11월 17일 (목) ~ 11월 22일 (화)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">당첨자발표</span>
						<span class="desc">11월 22일 (화) 오후 3시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">장소</span>
						<span class="desc">T Factory 2층, 2 Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">유의사항</h2>
				<ul>
					<li>※덕콘 Special은 70석의 지정좌석으로만 운영됩니다.</li>
					<li>※덕콘 Special은 일반 관객도 응모가 가능하지만, 수험표를 보유한 수험생을 우선 추첨합니다.</li>
					<li>※수험생 관객으로 70석이 미달될 경우에 한해 잔여석을 일반 관객 응모자 중 추첨합니다.</li>
					<li>※현장에서 노쇼좌석은 별도 운영하지 않으며, 안전한 공연 관람을 위해 스탠딩 좌석 또한 운영하지 않습니다.</li>
					<li>※본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한 경우에만 참여 가능합니다. (본인인증 가능 연령: 만 14세 이상)</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <em class="main-subtitle">수험생 스페셜 덕콘</em>
        <h2 class="main-title" style="margin:4px 0 0;">라인업</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px; margin-bottom: 20px;">
        <ul>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">11.25<br>FRI</span>
	          </div>
<!--	          <router-link to="/experience/program248?classId=207">-->
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">옥상달빛</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician1.png" alt="musician">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
          <li>
	          <div class="date">
		          <span style="width:36.2px;">11.26<br>SAT</span>
	          </div>
<!--	          <router-link to="/experience/program249?classId=208">-->
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">데자부그룹</p>
				          <p class="time">PM 6:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician2.png" alt="musician">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
					<li>
	          <div class="date">
		          <span style="width:36.2px;">11.27<br>SUN</span>
	          </div>
<!--	          <router-link to="/experience/program250?classId=209">-->
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">구만</p>
				          <p class="time">PM 3:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician3.png" alt="musician">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
          <li>
	          <div>
		          <span style="display: inline-block; width:50.2px;"><br></span>
	          </div>
<!--	          <router-link to="/experience/program251?classId=210">-->
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">소란</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician4.png" alt="musician">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
          <li>
	          <div class="date">
		          <span>11.28<br>MON</span>
	          </div>
<!--	          <router-link to="/experience/program252?classId=211">-->
		          <div class="card" Style="margin-left: 19px;">
			          <div class="text">
				          <p class="name">치즈</p>
				          <p class="time">PM 7:00</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class247-musician5.png" alt="musician">
			          </div>
		          </div>
<!--	          </router-link>-->
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
  name: 'Program252',
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
