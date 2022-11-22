<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class250-slide1.jpg" alt="수험생을 위한 스페셜 덕콘 | 2022.11 구만">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수험생을 위한 스페셜 덕콘 | 구만"
          description="그동안 열심히 달려온 수험생들을 위해 T Factory에서 많은 아티스트들과 함께 <스페셜 덕콘>을 준비했어요!"
        ></kakao-share>

        <em class="main-subtitle">[수능이벤트] 얘드라 콘서트 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">수험생을 위한<br />&lt;스페셜 덕콘&gt;</h2>
        <p class="desc2" style="word-break:keep-all;">
          그동안 열심히 달려온 수험생들을 위해 T Factory에서 많은 아티스트들과 함께 &lt;스페셜 덕콘&gt;을 준비했어요! 만나고 싶은 최애 아티스트가 라인업에 있다면 지금 바로 참가 신청해보세요!<br>
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 81px;">2022. 11. 27 PM 3:00<em style="margin-left:12px;">구만</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">구만</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class250-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					2019년 6월, 데뷔 싱글 [Chance]를 발매하며 데뷔한<br />구만은 레트로의 무드를 담은 싱어송라이터이다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					'2019 신한카드 루키 프로젝트'에서 동상을 수상하며 주목받기 시작했고, 2020년 12월, 첫 EP [Dance Rather Than Love]를 발매, 본격적인 행보의 시작을 알렸다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2020년 사운드클라우드에 데모 버전이 공개됨과 동시에 많은 관심을 받은 [나 혼자 남은 지구]는 오디오 라이브<br />플랫폼 ‘스푼’의 광고 음악으로 사용되며 발매 문의가 쇄도했다. 이후 2021년 10월 정식 발매되어 지금까지 꾸준한 사랑을 받고 있다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					2022년 1월 싱글 [다른 널 사랑하고 싶어]를 발매하며,<br />기존의 포크 스타일이 아닌 신디사이저 위주의 음악을 선보였으며, 5월부터 채널A에서 방영 중인 ’청춘스타’에 출연하며 독보적인 캐릭터와 뛰어난 작곡, 편곡 실력으로 주목받고 있다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					하반기 중 EP 발매를 계획하고 있으며 '레트로 싱어송라이터'로서 구만의 다양한 음악 세계를 펼칠 예정이다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">공연일</span>
						<span class="desc">11월 27일 (일) 오후 3시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">신청기간</span>
						<span class="desc">11월 17일 (목) ~ 11월 22일 (화)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 65px;">당첨자발표</span>
						<span class="desc">11월 23일 (수) 오후 3시</span>
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
				    <router-link to="/experience/program248?classId=207">
					    <div class="card" Style="margin-left: 19px;">
						    <div class="text">
							    <p class="name">옥상달빛</p>
							    <p class="time">PM 7:00</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class247-musician1.png" alt="musician">
						    </div>
					    </div>
				    </router-link>
			    </li>
			    <li>
				    <div class="date">
					    <span style="width:36.2px;">11.26<br>SAT</span>
				    </div>
				    <router-link to="/experience/program249?classId=208">
					    <div class="card" Style="margin-left: 19px;">
						    <div class="text">
							    <p class="name">데자부그룹</p>
							    <p class="time">PM 6:00</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class247-musician2.png" alt="musician">
						    </div>
					    </div>
				    </router-link>
			    </li>
			    <li>
				    <div class="date">
					    <span style="width:36.2px;">11.27<br>SUN</span>
				    </div>
				    <router-link to="/experience/program250?classId=209">
					    <div class="card" Style="margin-left: 19px;">
						    <div class="text">
							    <p class="name">구만</p>
							    <p class="time">PM 3:00</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class247-musician3.png" alt="musician">
						    </div>
					    </div>
				    </router-link>
			    </li>
			    <li>
				    <div>
					    <span style="display: inline-block; width:50.2px;"><br></span>
				    </div>
				    <router-link to="/experience/program251?classId=210">
					    <div class="card" Style="margin-left: 19px;">
						    <div class="text">
							    <p class="name">소란</p>
							    <p class="time">PM 7:00</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class247-musician4.png" alt="musician">
						    </div>
					    </div>
				    </router-link>
			    </li>
			    <li>
				    <div class="date">
					    <span>11.28<br>MON</span>
				    </div>
				    <router-link to="/experience/program252?classId=211">
					    <div class="card" Style="margin-left: 19px;">
						    <div class="text">
							    <p class="name">치즈</p>
							    <p class="time">PM 7:00</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class247-musician5.png" alt="musician">
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
  name: 'Program250',
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
