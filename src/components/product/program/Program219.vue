<template>
	<div class="contents bottom-sticky" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class219-slide1.jpg" alt="With Z Flip 4 & XEXYMIX | 최유진">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
        <em class="main-subtitle">Workout Class</em>
        <h2 class="main-title" style="margin-top:4px; font-size: 24px;">With Z Flip 4 & XEXYMIX</h2>
        <p class="desc2">
					유명 강사진들과 다양한 종목이 준비되어 있는 Wonder Workout Class에 초대합니다.<br>
					운동 클래스 신청 후 재밌는 운동을 현장에서 직접 배워보세요!
        </p>
			</div>
			<div class="details-inner" style="padding: 40px 20px;">
				<em class="main-subtitle">강사 소개</em>
				<h2 class="main-title" style="margin-top:4px;">최유진</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class219-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					'아프로코리아(AFROKOREA)에서 활동하고 있는 댄서 최유진 님은 유진 아프로 댄스를 운영하고 있다. <br/>
					최근 화사&로꼬 'lemon' 뮤직비디오에 참여하며 활발히 활동 중인 댄서이다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 70px;">클래스 일정</span>
						<span class="desc">9월 24일 (토) 오전 9시30분</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 70px;">응모기간</span>
						<span class="desc">9월 9일 (금) ~ 9월 16일 (금)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 70px;">당첨자발표</span>
						<span class="desc">9월 20일 (화) *당첨자 한해 개별 연락</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 70px;">장소</span>
						<span class="desc">SK텔레콤 플래그십스토어 T Factory 1층</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※ 본 프로그램은 T Factory 홍대점을 방문하여 스마트폰으로 본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령: 만 14세 이상) </li>
					<li>※ 본 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner">
				<div class="input-box">
					<p style="margin-bottom: 20px;">
						<input type="checkbox" id="info1" v-model="checkAgree">
						<label for="info1" style="font-size: 16px; color: #000;">개인정보 취급 방침 및 제 3자 동의</label>
					</p>
					<p style="font-size: 20px; font-weight: bold; color: #000;">개인정보 취급 방침 및 위탁 동의 안내</p>
					<ol>
						<li>
							<p style="font-size: 14px; color: #787878;">
								1. 개인정보 수집∙이용 동의 안내문<br>
								Workout Class With Z Flip4 & XEXYMIX 참가 <br>관련하여, 본인의 개인정보를 SK텔레콤 주식회사가 수집 및 이용하는 것에 대해 동의합니다.<br>
								<span class="square-char">수집/이용 목적 : 본인 확인, 이벤트 당첨 경품 배송 안내 </span><br/>
								<span class="square-char">수집 항목 : 이름, 휴대전화 번호 </span><br/>
								<span class="square-char">보유 기간 : 이벤트 종료 후, VOC 목적으로 일주일 보관 후 파기 </span><br/>
								※ 본 동의는 이벤트 응모를 위한 개인정보 수집/이용에 대한 동의로서, 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 이벤트에 응모하실 수 없습니다.<br>
								※ 본 이벤트는 (주)잘함과 넥스트유포리아에 처리 위탁하여 이벤트 시스템 운영, 당첨자 확인, 고객 상담 및 배송 업무를 처리합니다.<br>
								※ 법령에 따른 개인정보의 수집/이용, 계약의 이행/편의증진을 위한 개인정보 처리 위탁 및 개인정보처리와 관련된 일반사항은 서비스의 개인정보처리 방침에 따릅니다.
							</p>
							<p style="font-size: 14px; color: #787878;">
								2. 개인정보 처리 위탁 동의 안내문<br>
								Workout Class With Z Flip 4 & XEXYMIX 참가와 관련하여, 본인의 개인정보처리 업무를 하기 수탁사에 위탁합니다.
							</p>
							<p style="font-size: 14px; color: #787878;">
								수탁사 및 업무내용<br>
								<span class="square-char">(주)잘함 : 고객 추첨, 이벤트 공지 및 당첨자 발표 안내, 인스타그램 이벤트 운영, 경품 배송 </span><br/>
								<span class="square-char">넥스트유포리아 : 현장 이벤트 운영 </span>
							</p>
							<p style="font-size: 14px; color: #787878;">
								3. 응모자 만 14세 미만 참여 가능 여부<br>
								만 14세 이상만 참여 가능하며, 만 14세 미만은 당첨이 취소될 수 있습니다.
							</p>
						</li>
					</ol>
				</div>
			</div>
		</div>
		<!-- //details -->

		<!-- button set -->
		<program-button :check-agree="checkAgree"></program-button>
		<!-- // button set -->
	</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program219',
  components: {
    KakaoShare,
	  ProgramButton
  },
  data () {
    return {
	    isLogin: false,
	    checkAgree: false
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
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
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
