<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class257-slide1.jpg" alt="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!"
          description="수험생들의 버킷리스트를 이루어 줄 원데이 클래스"
        ></kakao-share>

        <em class="main-subtitle">[수능 이벤트] 얘드라 책 덮고 클래스 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">뷰티클래스</h2>
        <p class="desc2" style="margin-top: 8px;">
					50만 인기 뷰티 유튜브 크리에이터, 재유님과 함께 하는 원데이 뷰티클래스.디테일 장인 뷰티 유튜버 재유님이<br />수험생 여러분들의 아름다운 날들을 응원해요!
				</p>
        <p class="desc2" style="margin-top: 12px;">
					재유님의 메이크업 강의, 메이크오버, Q&A 시간까지!<br />알차게 준비했어요.원데이 클래스 신청하고 뷰티 꿀팁도<br />가져가세요!
				</p>
			</div>
			<div class="details-inner">
				<h3 class="subtit" style="font-size: 16px; font-weight: bold;">[클래스 소개]</h3>
        <ol class="step-list" style="margin-top:12px; line-height: 1.71;">
          <li style="margin-bottom:12px;">
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">클래스 내용</span><br>
						<span class="desc" style="color: #000;">
							-예비 대학생을 위한 메이크업 기초 강의뷰티 고민 Q&A<br />
							-메이크오버 및 메이크업 클래스<br />
							(사전 신청자에 한해 1명 추첨)<br />
            </span>
          </li>
          <li style="margin-bottom:12px;">
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">클래스 데이</span><br>
						<span class="desc" style="color: #000;">12월 2일 (금) 오후7시</span>
          </li>
          <li style="margin-bottom:12px;">
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">신청기간</span><br>
						<span class="desc" style="color: #000;">11/16 (수)~11/20 (일)</span>
          </li>
          <li>
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">당첨자 발표</span><br>
						<span class="desc" style="color: #000;">11/21 (월) *신청자 중 80명 선정</span>
          </li>
          <li>
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">클래스 소요 시간</span><br>
						<span class="desc" style="color: #000;">60분</span>
          </li>
        </ol>
				<span class="sub_title" style="display: inline-block; margin: 24px 0 8px;">클래스 신청 유의사항</span><br />
				<span class="desc" style="margin-bottom: 8px;">
					-원데이 클래스가 진행되는 동안 마케팅 활용을 위한<br />영상 촬영이 있을 수 있습니다.<br />
					-원데이 클래스 중 재유님께 메이크오버를 희망하는<br />분들은 프로그램 예약 시 메이크오버 신청을 해주세요.<br />
					<ul style="font-size: 12px; line-height: 1.5; word-break: keep-all; margin-bottom: 8px;">
						<li>※사전 신청자 중 한 분 추첨예정</li>
					</ul>
				</span>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 97px;">클래스 데이</span>
						<span class="desc" style="margin-bottom: 8px;">12월 2일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 97px;">클래스 신청 기간</span>
						<span class="desc" style="margin-bottom: 8px;">11월 16일 (수) ~ 11월 20일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 97px;">당첨자 발표</span>
						<span class="desc">11월 21일 (월)
							<ul style="font-size: 12px; line-height: 1.5; word-break: keep-all; margin-bottom: 8px;">
                <li>*신청자중 80명 선정</li>
              </ul>
						</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 97px;">장소</span>
						<span class="desc">T Factory</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한<br>경우에만 참여 가능합니다. (본인인증 가능 연령: 만 14세 이상)</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
      <div class="details-bottom details-inner" style="padding: 40px 20px 12px;">
        <h2 class="main-title" style="margin:4px 0 0;">프로그램 예약</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px; margin-bottom: 20px;">
        <ul>
          <li>
	          <div class="date">
		          <span>11.22<br>TUE</span>
	          </div>
<!--	          <router-link to="/experience/program248?classId=207">-->
		          <div class="card">
			          <div class="text">
				          <p class="name">펀칭니들 클래스</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class254-class1.png" alt="class">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
          <li>
	          <div class="date">
		          <span>11.23<br>WED</span>
	          </div>
<!--	          <router-link to="/experience/program249?classId=208">-->
		          <div class="card">
			          <div class="text">
				          <p class="name">자이언트 얀 가방 클래스</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class254-class2.png" alt="class">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
					<li>
	          <div class="date">
		          <span>11.24<br>THU</span>
	          </div>
<!--	          <router-link to="/experience/program250?classId=209">-->
		          <div class="card">
			          <div class="text">
				          <p class="name">크리스마스 리스 클래스</p>
			          </div>
			          <div class="image">
				          <img src="../../../assets/images/program/class254-class3.png" alt="class">
			          </div>
		          </div>
<!--	          </router-link>-->
          </li>
        </ul>
      </div>
		</div>
		<!-- //details -->

		<!-- button set -->
		<!--program-button></program-button-->
		<!-- // button set -->
	</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program257',
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
	.lineup ul li {
		.date span {
			margin-left: 9.5px;
		}
		.card {
			margin-left: 11px;
			left: -5px;
			.image {
				right: -5px;
			}
		}
	}
</style>
