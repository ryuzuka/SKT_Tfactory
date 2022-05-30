<template>
	<div class="contents bottom-sticky" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class200-slide1.jpg" alt="T Factory x FLO 덕콘 | 2022.6 세이수미">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 12px 40px 20px;">
				<kakao-share
					title="6월의 덕콘"
					description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대 - 2022.6 세이수미"
				></kakao-share>
				<em class="main-subtitle">T University Music Festival</em>
				<h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
				<p class="desc2" style="padding: 0;">
					6월 덕콘에서는 인기뮤지션과 대학생 뮤지션들이<br>함께 합니다.<br>더욱 풍성해진 THECON의 무대 기대해 주세요.<br>T Factory에 방문하고 나의 뮤지션들의 소중한 관객이 되어 축제를 즐겨주세요.
				</p>
			</div>
			<div class="line">
				<span style="margin: 1px 56px;">2022. 06. 17 PM 7:00<em style="margin-left:11px;">SAYSUEME</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-header" style="padding: 40px 20px;">
				<em class="main-subtitle">아티스트 소개</em>
				<h2 class="main-title" style="margin-top:4px;">세이수미</h2>
				<div class="thumbnail"><img src="../../../assets/images/program/class200-conts1.jpg" alt=""></div>
				<p style="margin-top: 8px;">
					세이수미는 2012년 가을, 부산 광안리 해변 불꽃축제가 있던 어느 날 "심심하면 우리 같이 밴드나 하자"라는 말로 시작된 밴드이다.
				</p>
				<p style="margin-top: 22px;">
					인디록, 서프록, 서프게이즈, 록큰롤 등 여러 가지 이름을 붙일 수 있는 음악을 하지만 공통적으로 떠오르는 심상은 바다이다.
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 52px;">공연일</span>
						<span class="desc">6월 17일 (금) 오후 7시</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 52px;">신청기간</span>
						<span class="desc">5월 30일 (월) ~ 6월 12일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 52px;">장소</span>
						<span class="desc">T Factory 2층, 0 Stage</span>
					</dd>
				</dl>
			</div>
			<div class="line">
				<span style="margin: 1px 56px;">2022. 06. 17 PM 7:00<em style="margin-left:11px;">SAYSUEME</em></span>
				<img src="../../../assets/images/program/line-bg.png" alt="THECON line-bg">
			</div>
			<div class="details-bottom" style="padding: 40px 20px;">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※대학생 뮤지션이 아닌 인기 뮤지션 공연은 덕력고사를 완료하신 분들 추첨을 통해 선정되며, 선정자는 개별 연락드립니다.</li>
					<li>※당첨자 중 무단 노쇼하시는 경우, 추후 콘서트 당첨에서 제외됩니다.</li>
					<li>※정부의 방역지침 변경이 있을 시 공연의 주요 내용도 변경이 있을 수 있습니다.</li>
					<li>※덕콘은 14세 미만의 고객도 보호자 동반 하에 당첨 및 참여가 가능하나, 보호자도 함꼐 응모에 당첨되어야 하는 점 유의 부탁드립니다.</li>
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
  name: 'Program200',
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
.details{
	&-header {
		p{
			line-height: 20px;
		}
	}
	&-inner {
		padding:40px 20px;
		dl{
			dd{
				.desc{
					margin-left: 24px;
				}
			}
		}
	}
	&-bottom {
		font-size: 12px;
		line-height: 19px;
		color: #787878;
	}
}
</style>
