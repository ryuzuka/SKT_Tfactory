<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class235-slide1.jpg" alt="최애 플레이리스트 첫 공개방송 방청 신청">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="[T Factory X FLO]"
          description="최애 플레이리스트 첫 공개방송 방청 신청"
        ></kakao-share>

        <em class="main-subtitle">[T Factory X FLO]</em>
        <h2 class="main-title" style="margin-top:4px; margin-bottom:16px; letter-spacing: -1px;">최애 플레이리스트 <br>첫 공개방송 방청 신청</h2>
        <em class="main-subtitle">최애가 듣고 최애랑 듣는 &lt;최애 플레이리스트&gt;<br>첫 공개방송</em>
				<p class="desc2" style="margin-top:12px;">
					세 번째 미니앨범 Lethality로 돌아온 대장토끼 권은비가<br>
					T Factory에 찾아옵니다!<br>
					은비랑 은비 노래로 우리만의 플레이리스트를<br>
					만들고 싶다면?<br>
					은비와 아이컨택하면서 최애 취향 퀴즈도 같이<br>
					풀고 싶다면?
				</p>
				<p class="desc2">
					은비의 ‘치명적인’ 매력 자랑 하나 + 은비에게 묻고<br>
					싶은 질문 하나와 함께 공개방송 방청에 지금 바로 신청해보세요!<br>
				</p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 107px;">공개방송 일정</span>
						<span class="desc">10월 24일(월) 오후 8시<br>T팩토리 0 Stage</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 107px;">공개방송 모집일정</span>
						<span class="desc">10월 12일 (수) ~ 10월 16일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 107px;">당첨자 발표</span>
						<span class="desc">10월 18일 (화) 오후 3시<br>*당첨자 한해 개별 안내</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 프로그램은 T Factory 홍대점을 방문하여 스마트폰으로 본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령: 만 14세 이상)</li>
					<li>※본 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner" style="padding: 40px 0 40px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
				<div class="program">
					<div class="program">
						<router-link to="/experience/program232?classId=190">
							<div class="desc">
								<p class="detail" style="margin-bottom: 48px;">T Factory의 모든 것을<br>NEW 0s답게 즐겨보세요!</p>
								<span class="topic">T Factory for New 0s!</span>
							</div>
							<div class="images">
								<img src="../../../assets/images/program/class235-conts1.jpg" alt="Workout Class">
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- //details -->

		<!-- button set -->
		<!--<program-button></program-button>-->
		<!-- // button set -->
	</div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program212',
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
	  this.$emit('kakao-share-image', this.$refs.shareImage.src)
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
