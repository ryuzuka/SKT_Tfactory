<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class256-slide1.jpg" alt="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="크리스마스 리스 클래스"
          description="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!"
        ></kakao-share>

        <em class="main-subtitle">[수능 이벤트] 얘드라 책 덮고 클래스 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">크리스마스 리스 클래스</h2>
        <h3 class="subtit" style="margin-top: 16px; font-size: 14px; color: #3617ce; font-weight: bold;">클래스 소개</h3>
        <p class="desc2" style="margin-top: 8px;">
					양모로 만든 리스에 리본과 펠트볼, 프레그런스 식물을 자유롭게 얹어 크리스마스 느낌이 나는 리스를 만들어<br />보는 클래스입니다.포근한 양모와 식물의 조화를<br />느끼고 나만의 발란스와 무드를 담아 작업해보세요!
				</p>
        <h3 class="subtit" style="margin-top: 16px; font-size: 14px; color: #3617ce; font-weight: bold;">클래스 소요 시간</h3>
        <p class="desc2" style="margin-top: 8px;">
          60분
        </p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd style="margin-bottom: 6px;">
						<span class="sub_title" style="width: 97px;">클래스 신청 기간</span>
						<span class="desc">11월 14일 (월) ~ 11월 16일 (수)</span>
					</dd>
					<dd style="margin-bottom: 6px;">
						<span class="sub_title" style="width: 97px;">당첨자 발표</span>
						<span class="desc">11월 18일 (금)</span>
					</dd>
					<dd style="margin-bottom: 6px;">
						<span class="sub_title" style="width: 97px;">당첨 인원</span>
						<span class="desc">8명</span>
					</dd>
					<dd style="margin-bottom: 6px;">
						<span class="sub_title" style="width: 97px;">클래스 데이</span>
						<span class="desc">11월 24일 (목) 오후 4시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 97px;">장소</span>
						<span class="desc">T Factory 4층 Apple Zone</span>
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
        <h2 class="main-title" style="margin:4px 0 0;">얘드라 책 덮고<br />클래스 챙겨!</h2>
      </div>
	    <div class="lineup" style="padding: 0px 18px 12px 24px; margin-bottom: 20px;">
		    <ul>
			    <li>
				    <div class="date" style="margin-right: -2px;">
					    <span>11.22<br>TUE</span>
				    </div>
				    <router-link to="/experience/program254?classId=198">
					    <div class="card">
						    <div class="text">
							    <p class="name">펀칭니들 클래스</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class254-class1.png" alt="class">
						    </div>
					    </div>
				    </router-link>
			    </li>
			    <li>
				    <div class="date">
					    <span>11.23<br>WED</span>
				    </div>
				    <router-link to="/experience/program255?classId=212">
					    <div class="card">
						    <div class="text">
							    <p class="name">자이언트 얀 가방 클래스</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class254-class2.png" alt="class">
						    </div>
					    </div>
				    </router-link>
			    </li>
			    <li>
				    <div class="date">
					    <span>11.24<br>THU</span>
				    </div>
				    <router-link to="/experience/program256?classId=213">
					    <div class="card">
						    <div class="text">
							    <p class="name">크리스마스 리스 클래스</p>
						    </div>
						    <div class="image">
							    <img src="../../../assets/images/program/class254-class3.png" alt="class">
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
  name: 'Program256',
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
