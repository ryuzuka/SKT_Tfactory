<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class251-slide1.jpg" alt="수험생을 위한 스페셜 덕콘 | 2022.11 소란">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수험생을 위한 스페셜 덕콘 | 소란"
          description="그동안 열심히 달려온 수험생들을 위해 T Factory에서 많은 아티스트들과 함께 <스페셜 덕콘>을 준비했어요!"
        ></kakao-share>

        <em class="main-subtitle">[수능이벤트] 얘드라 콘서트 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">수험생을 위한<br />&lt;스페셜 덕콘&gt;</h2>
        <p class="desc2" style="word-break:keep-all;">
          그동안 열심히 달려온 수험생들을 위해 T Factory에서 많은 아티스트들과 함께 &lt;스페셜 덕콘&gt;을 준비했어요! 만나고 싶은 최애 아티스트가 라인업에 있다면 지금 바로 참가 신청해보세요!<br>
        </p>
			</div>
			<div class="line">
				<span style="margin: 0px 81px;">2022. 11. 27 PM 7:00<em style="margin-left:12px;">소란</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">소란</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class251-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					수준 높은 연주를 기반으로 팝과 모던록을 추구하는 4인조 밴드 소란은 2010년 데뷔 이래 지금까지 연애의 세밀한 감정선과 온기 넘치는 위로를 음악에 주로 담고 있다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					‘믿음의 가치, 소란’이라는 공식이 완성되기까지의 원동력은 무엇보다 기대 그 이상을 늘 증명해낸 공연의 힘에서 기인할 것이다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					관객의 완벽한 하루를 위해 고군분투하는 소극장 장기 공연 [Perfect Day], 일명 소란 대부흥회라 불리며 아티스트와 팬들이 물아일체 되는 여름 콘서트, 압도적인 스케일과 과감한 연출로 밴드 공연의 영역을 확장시킨 겨울 콘서트까지 소란의 공연들은 퀄리티와 재미를 동시에 충족시키며 매진 행렬을 기록해왔다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					특히 최근 3년간, 50회 이상 출연이라는 숫자가 증명하듯 페스티벌에서의 소란은 자타공인 극강의 존재이기도 하다.
				</p>
				<p class="desc_20" style="margin-top: 24px;">
					공연과 음원 모두에서 정상의 위치에 있는 소란은 그 외의 영역에서도 큰 두각을 나타내고 있다.<br />보컬 고영배는 안정된 톤과 위트로 KBS ‘올댓뮤직’ MC를 비롯, 방송과 각종 행사를 종횡무진 누비고 있고,<br />기타리스트 이태욱은 선배 아티스트부터 월드클래스 아이돌까지 공연장과 스튜디오를 오가며 최고의 연주자로 러브콜을 받고 있다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 65px;">공연일</span>
						<span class="desc">11월 27일 (일) 오후 7시</span>
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
  name: 'Program251',
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
