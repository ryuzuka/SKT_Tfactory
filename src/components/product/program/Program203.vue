<template>
	<div class="contents bottom-sticky" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class203-slide1.jpg" alt="TUAF ART">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 12px 40px 20px;">
				<kakao-share
					title=">POP-UP Exhibition X You"
					description="나만의 TUF 마스코트 꾸미기"
				></kakao-share>
				<em class="main-subtitle">나만의 TUF 마스코트 꾸미기</em>
				<h2 class="main-title" style="margin-top: 4px;">POP-UP Exhibition<br>X You</h2>
				<p class="desc2" style="margin-top: 16px;; line-height: 20px;">
					<b style="margin-bottom: 2px;">나만의 TUF 마스코트 꾸미기</b><br>
					SK텔레콤 플래그십스토어 T Factory 2층 POP-UP Zone에서는 트렌디한 팝업전시가 펼쳐집니다.<br>iPhone13출시기념 하시시박 사진전, Apple TV 미디어아트전, 출시기념 단말전시부터 브랜드 콜라보레이션까지!<br>늘 변화하는 팝업전시를 기대해주세요.
				</p>
				<p class="desc2" style="margin-top: 53px; line-height: 20px;">
					<b style="margin-bottom: 2px;">경품 이벤트</b><br>
					기간 : 2022.06.01 ~ 6.30<br>
					1등 : 에어팟 프로 (1명)<br>
					우수상 : T Factory MD 패키지 (9명)
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 55px;">전시 일정</span>
						<span class="desc">
							TUAF Part 1 : 2022.04.11 ~ 05.06 (4주)<br>
							TUAF Part 2 : 2022.05.07 ~ 05.31 (4주)<br>
							<em style="color: #000;">TUAF Part 3 : 2022.06.01 ~ 07.18 (6주)</em>
						</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 55px;">전시 장소</span>
						<span class="desc">Sk텔레콤 플래그십스토어 T Factory 2층<br>POP-UP전시존 (홍대입구역 9번 출구)</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상) </li>
					<li>※TUF의 마스코트를 꾸민 후 이벤트 참여를 원하시는 경우 POP-UP 전시존의 큐알코드를 통해 참가하실 수 있습니다.</li>
					<li>※이벤트에 대한 자세한 사항은 이벤트 참여 용지 뒷면을 통해 확인 하실 수 있습니다.</li>
					<li>※마스코트를 꾸민 후 전시된 그림의 소유는 T Factory로 귀속됨을 알려드립니다.</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner" style="padding: 40px 0 20px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program111?classId=154">
							<div class="desc">
								<p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
								<span class="topic">TUMF</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
							</div>
						</router-link>
					</div>
				</div>
				<div class="program">
					<router-link to="/experience/program110?classId=156">
						<div class="desc">
							<p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
							<span class="topic">T대학 우주 축제, TUF</span>
						</div>
						<div class="images">
							<img src="../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
						</div>
					</router-link>
				</div>
				<div class="program">
					<router-link to="/experience/program112?classId=155">
						<div class="desc">
							<p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
							<span class="topic">TUAF</span>
						</div>
						<div class="images">
							<img src="../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
						</div>
					</router-link>
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
  name: 'Program203',
  components: {
    KakaoShare,
	  ProgramButton
  },
  data () {
    return {
      isLogin: false
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
