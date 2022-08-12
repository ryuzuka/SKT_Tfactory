<template>
	<div class="contents bottom-sticky" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class213-slide1.jpg" alt="With Z Flip 4 & XEXYMIX | 홍둥이">
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
				<h2 class="main-title" style="margin-top:4px;">서홍</h2>
				<div class="thumbnail"><img style="height: 340px;" src="../../../assets/images/program/class220-conts1.jpg" alt=""></div>
				<p class="desc_20" style="margin-top: 8px;">
					'명상 안내자 서홍 님은 싱잉볼 테라피스트로 '사운드배스서울' 명상 클래스를 운영하고 있다. <br/>
					넷플연가 '싱잉볼 쉼의 기술' 강연을 진행하며, 다양한 방식의 명상 클래스를 진행하고 있다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 70px;">클래스 일정</span>
						<span class="desc">9월 29일 (목) 오후 8시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 70px;">응모기간</span>
						<span class="desc">9월 15일 (목) ~ 9월 26일 (월)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 70px;">당첨자발표</span>
						<span class="desc">9월 27일 (화) *당첨자 한해 개별 연락</span>
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
						<label for="info1" style="font-size: 20px; color: #000; font-weight: bold;">개인정보 취급 방침 및 제 3자 동의</label>
					</p>
					<ol>
						<li>
							<p>1. 수집하는 개인정보 항목 및 수집방법</p>
							<p style="margin-left: 15px; margin-top: 0;">
								회사는 제품 배송 및 업무상 커뮤니케이션 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br>
								개인 정보 수집방법 : T Factory 웹사이트 (참여자 직접 입력)<br>
								<span style="font-size: 9px;">■</span> 수집항목 : 이름, 휴대전화번호<br>
								<span style="font-size: 9px;">■</span> 개인정보 수집 방법 : T Factory 웹사이트
							</p>
						</li>
						<li>
							<p>2. 개인정보의 수집 및 이용목적</p>
							<p style="margin-left: 15px; margin-top: 0;">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
							<p style="margin-top: 20px; margin-bottom: 20px;"><span style="margin-left: 15px; font-size: 9px; ">■</span> 공지사항 및 절차 안내, 이벤트 당첨자 선정</p>
						</li>
						<li>
							<p>3. 개인정보의 보유 및 이용 기간</p>
							<p style="margin-left: 15px; margin-top: 0;">
									개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 파기합니다.<br/>
									단. 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
							</p>
							<p style="margin-top: 20px;"><span style="margin-left: 15px; font-size: 9px;">■</span> 보존항목: 이름, 휴대전화번호</p>
							<p style="margin-top: 0px;margin-bottom: 20px; text-indent: -15px; padding-left: 15px;"><span style="margin-left: 15px; font-size: 9px;">■</span> 보존근거 및 기간: 진행 이력에 관한 기록 : 이벤트 공지 후, 60일 이내 폐기</p>
						</li>
						<li>
							<p>4. 개인정보 보호</p>
							<p style="margin-left: 15px; margin-top: 0;">
								개인정보는 진행이력 및 명시되어 있는 업무상의 커뮤니케이션 외에는 사용되지 않으며,<br>
								취합된 정보는 12개월 이내 모두 폐기 합니다
							</p>
						</li>
						<li>
							<p>개인정보 제 3자 이용에 대한 동의</p>
							<p style="margin-top: 20px; margin-bottom: 20px;">[ 개인정보 취급 및 위탁사 ]</p>
							<p>본 이벤트 관련 커뮤니케이션 및 진행이력 취합, 공지 업무는 위탁 업체인 ㈜잘함에서 진행합니다.</p>
							<p>1. 수탁업체 : ㈜잘함, 넥스트유포리아    2. 처리위탁 업무 내용 : T Factory 인스타그램 운영대행, 이벤트 당첨 및 배송</p>
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
  name: 'Program220',
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
