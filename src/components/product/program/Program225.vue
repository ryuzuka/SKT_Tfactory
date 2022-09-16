<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class225-slide1.png" alt="T Factory X ifland | 메타홍대 뮤직투어 :후추스의 인디벌스">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="메타홍대 뮤직투어 :후추스의 인디벌스"
          description="INDIE MUSIC + METAVERSE 노 뮤직 노라이프! 고품격 인디 음악 전문 토크쇼!"
        ></kakao-share>

        <em class="main-subtitle">[T Factory X ifland]</em>
        <h2 class="main-title" style="margin-top:4px;">메타홍대 뮤직투어 :<br>후추스의 인디벌스</h2>
        <p class="desc2" style="margin-top: 16px;">
          INDIE MUSIC + METAVERSE<br>노 뮤직 노라이프! 고품격 인디 음악 전문 토크쇼!
        </p>
				<p class="desc2" style="margin-top: 12px;">
          브로콜리너마저의 보컬과 베이스를 담당하는 윤덕원님을 첫 회 게스트로 모시고 출발합니다.<br>
					공개방송에 참여를 원하시는 분들은 모집 기간 내 방청 신청 부탁드리니다.
        </p>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title" style="width: 107px;">공개방송 일정</span>
						<span class="desc">9월 20일 (화) 오후 8시,<br>T팩토리 0 Stage</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 107px;">공개방송 모집일정</span>
						<span class="desc">9월 16일 (금) ~ 9월 18일 (일)</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 107px;">당첨자 발표</span>
						<span class="desc">9월 19일 (월)<br>*당첨자 한해 개별 안내</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 프로그램은 T Factory 홍대점을 방문하여 스마트폰으로 본인 확인한 경우에만 참여 가능합니다. (본인확인 가능 연령 : 만 14세 이상)</li>
					<li>※본 프로그램 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
			</div>
			<div class="details-inner" style="padding: 40px 0 59px">
				<h2 class="main-title" style="padding: 0 20px; color: #000;">다른 프로그램도 있어요!</h2>
        <div class="program">
	        <div class="program">
            <router-link to="/experience/program212?classId=175">
              <div class="desc" style="bottom: 12px;">
                <p class="detail" style="margin-bottom: 30px;">Z Filp 4와 함께하는 <br>나의 빛나는 순간들</p>
                <span class="topic">What a<br>WONDER MOMENT</span>
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class225-conts1.jpg" alt="What a WONDER MOMENT">
              </div>
            </router-link>
          </div>
					<div class="program">
            <router-link to="/experience/program213?classId=176">
              <div class="desc">
                <p class="detail" style="margin-bottom: 45px;">Wonder Workout Class<br/>with Z Flip 4 & XEXYMIX</p>
                <span class="topic">Workout Class</span>
              </div>
              <div class="images">
                <img src="../../../assets/images/program/class222-conts1.jpg" alt="Workout Class">
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
  name: 'Program225',
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
      this.$EventBus.$on('get-class-info', data => {
        if (data['PROGRAM_CLASS_BOOKING_YN'] === 1) {
          this.isBookingYn = true
        }
      })
	  }
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
