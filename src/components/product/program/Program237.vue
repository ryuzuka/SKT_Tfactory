<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class237-slide1.jpg" alt="T Factory x 무릎 철권7 for NEW 0s">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="T Factory x 무릎 철권7 for NEW 0s"
          description="T Factory에서 NEW 0s를 위한 철권대회가 열립니다."
        ></kakao-share>

        <em class="main-subtitle">T Factory for NEW 0s</em>
        <h2 class="main-title" style="margin-top:4px;">T Factory x<br>무릎 철권7 for NEW 0s</h2>
        <p class="desc2">
          T Factory에서 NEW 0s를 위한 철권대회가 열립니다.<br>
					총 우승 상품 300만원 상당의 애플 제품을 받게 될 우승자는 누가 될까요? <br>
					철권계의 명실상부 1위 무릎 선수의 해설과 직접 대결을 해볼 수 있는 기회까지!<br>
        </p>
        <p class="desc2" style="margin-top:12px;">
          직관 관객분들을 위한 스페셜한 이벤트와 경품이<br>
					준비되어 있으니 지금 신청하세요!<br>
        </p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">운영일정</h2>
				<dl>
					<dd style="flex-direction: column;">
						<span class="sub_title" style="width: 100%; font-size:16px; margin-bottom: 4px;">대회 출전 선수 모집</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 4px; font-weight: 500; color:#000;">총 32명<br>32명 중 24명 선착순 모집</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 32px;">*추가 8명은 프로급 선수로 구성되며 대진표 발표날<br>공개됩니다.</span>
					</dd>
					<dd style="flex-direction: column;">
						<span class="sub_title" style="width: 100%; font-size:16px; margin-bottom: 4px;">대회 진행 방식</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 4px; font-weight: 500; color: #000;">4명 8개조</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 32px;">*조별로 프로급 선수 1명씩 시드배정<br>예선 = 싱글 엘리미네이션<br>본선 = 더블 엘리미네이션</span>
					</dd>
					<dd style="flex-direction: column;">
						<span class="sub_title" style="width: 100%; font-size:16px; margin-bottom: 4px;">예선 일정</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 4px; font-weight: 500; color: #000;">11월 1일(화) 오후 5시</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 32px;">사전 참가 신청한 일반인 선수 24명과 프로급 선수 8명이 예선전을 치르게 됩니다.<br>싱글 토너먼트 방식으로 8강 진출자 8명이 결정됩니다.</span>
					</dd>
					<dd style="flex-direction: column;">
						<span class="sub_title" style="width: 100%; font-size:16px; margin-bottom: 4px;">본선 일정</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 4px; font-weight: 500; color: #000;">11월 2일(수) 오후 6시</span>
						<span class="desc" style="margin-left: 0; margin-bottom: 32px;">예선을 통과한 본선 진출 8명의 선수들의 대회가<br> 진행됩니다.<br>본선에서는 무릎 선수의 해설과 아프리카tv 생중계가<br>함께 진행됩니다.</span>
					</dd>
					<dd style="flex-direction: column;">
						<span class="sub_title" style="width: 100%; color: #787878;">※ 우승상품 안내</span>
						<span class="desc" style="margin-left: 0;">1등: 아이폰14 128기가(색상 랜덤)<br>2등: 애플워치 8 41mm (색상 랜덤)<br>3등: 에어팟 프로2</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner">
				<h2 class="main-title">T Factory x<br>무릎 철권7<br>for NEW 0s<span style="font-size:14px;">&nbsp;(선수 신청)</span></h2>
				<p class="desc">철권7 대회 선수 신청하고 총 우승 상품 300만원 상당의 주인공의 기회도 노려보세요!</p>
				<div class="btn-wrap" style="margin-top: 24px;">
					<router-link to="/experience/program238?classId=197" class="btn-line big">대회 참가 선수 신청 하러 가기</router-link>
				</div>
			</div>
			<div class="details-inner">
				<h2 class="main-title">T Factory x<br>무릎 철권7<br>for NEW 0s<span style="font-size:14px;">&nbsp;(본선 관람 신청)</span></h2>
				<p class="desc">철권 대결 관람과 무릎 선수의 해설도 직관하고<br>다양한 현장 이벤트에 참여해보세요!</p>
				<div class="btn-wrap" style="margin-top: 24px;">
					<router-link to="/experience/program239?classId=198" class="btn-line big">본선 관람 신청 하러 가기</router-link>
				</div>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※직관 신청은 본선 대회에 한해 진행됩니다.</li>
					<li>※1일차 예선 참가 선수도 당첨이 되지 않으면 본선 당일 직관이 불가능 합니다.</li>
					<li>※1일차 예선은 현장 선착순 스탠딩으로 일반 관람이 가능하며<br>현장이 넓지 않으니 혼잡할 경우 입장이 제한 될 수 있습니다. </li>
					<li>※본 프로그램은 T Factory 홍대점을 방문하여 스마트폰으로<br>본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령:<br>만 14세 이상)</li>
					<li>※본 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
      <div class="details-inner" style="padding: 40px 0 40px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program229?classId=140">
							<div class="desc">
								<p class="detail" style="margin-bottom: 24px;">[Crew Class for New 0s]</p>
								<span class="topic">iPhone14/Pro 완전정복</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class237-conts1.jpg" alt="Crew Class">
							</div>
						</router-link>
					</div>
				</div>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program230?classId=147">
							<div class="desc">
								<p class="detail" style="margin-bottom: 44px;">[Crew Class for New 0s]</p>
								<span class="topic">VLOG 만들기<br>(feat. 시네마틱모드)</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class237-conts2.jpg" alt="Crew Class">
							</div>
						</router-link>
					</div>
				</div>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program231?classId=148">
							<div class="desc">
								<p class="detail" style="margin-bottom: 44px;">[Crew Class for New 0s]</p>
								<span class="topic">릴스 만들기<br>(feat. 액션모드)</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class237-conts3.jpg" alt="Crew Class">
							</div>
						</router-link>
					</div>
				</div>
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
  name: 'Program237',
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
