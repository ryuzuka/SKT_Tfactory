<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
    <!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class246-slide1.jpg" alt="수능 이벤트 | 수능 끝! 얘드라 혜택 챙겨!">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수능 이벤트 | 수능 끝! 얘드라 혜택 챙겨!"
          description="수험생을 위한 <스페셜 덕콘>"
        ></kakao-share>

        <em class="main-subtitle">[수능 이벤트] 수능 끝! 얘드라 혜택 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">수험생만을 위한 혜택!</h2>
        <p class="desc2" style="margin: 16px 0 42px;">
          <b style="display: inline-block; margin-bottom: 12px;">&lt;수능 끝! 얘드라 혜택 챙겨, T Factory에서!&gt;</b><br>
          수능이 끝난 수험생들을 위해 T Factory에서 다양한<br>
          선물을 준비했습니다. T Factory가 준비한 다양한<br>
          혜택을 놓치지 말고 모두 누리세요!
        </p>
        <p class="desc2" style="margin-bottom: 32px;">
          <b style="display: inline-block; margin-bottom: 12px;">1. 얘드라 수고했어, 입술부터 챙겨!</b><br>
          <span style="color: #787878;">T Factory 방문 시 수험표를 제시하면 "버츠비 립밤"을 선물로 드립니다.<br>T Factory 선물로 겨울에도 촉촉한 입술 관리하세요!</span>
        </p>
        <p class="desc2">
          <b style="display: inline-block; margin-bottom: 12px;">2. 얘드라 콘서트 챙겨!</b><br>
          <span style="color: #787878;">
            수능 준비로 수고한 수험생들을 위해 T Factory에서<br>
            수험생을 위한 &lt;스페셜 덕콘&gt;을 준비했습니다.<br>
            수고했어요. 이제 내 최애 아티스트와 함께 콘서트를<br>
            즐겨보세요!
          </span>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 32px;">
	          <router-link class="btn-line big" to="/experience/program247?classId=205">
		          11월 17일부터 신청 가능합니다
	          </router-link>
          </div>
        </div>
        <p class="desc2">
          <b style="display: inline-block; margin-bottom: 12px;">3. 얘드라 책 덮고 클래스 챙겨!</b><br>
          <span style="color: #787878;">
            수험생들의 위시리스트를 원데이 클래스로 준비했어요!<br>
            요즘 핫한 취미인 뜨개질과 인기 뷰티 유튜버의 뷰티<br>
            클래스까지! 오직 수험생들을 위한, 수험생들에 의한<br>
            다양한 클래스, 지금 신청하세요.
          </span>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 32px;">
	          <router-link class="btn-line big" to="/experience/program253?classId=206">
		          클래스 신청하러가기
	          </router-link>
          </div>
        </div>
        <p class="desc2">
          <b style="display: inline-block; margin-bottom: 12px;">4. 얘드라 새로 바꿔야지, 애플 할인 챙겨!</b><br>
          <span style="color: #787878;">
            애플워치, 에어팟, 애플펜슬, 아이패드 그리고 애플<br>
            정품 액세서리까지  모두 특별 할인된 가격으로 만날<br>
            수 있어요!
          </span>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 00px;">
	          <router-link class="btn-line big" to="/experience/program258?classId=218">
		          애플 정품 특별할인 보러가기
	          </router-link>
          </div>
        </div>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정</h2>
				<dl>
					<dd>
						<span class="sub_title">일정</span>
						<span class="desc" style="width: 255px;">
              11월 22일 ~ 11월 28일
              <ul style="font-size: 12px; line-height: 1.5; word-break: keep-all;">
                <li>*각 프로그램마다 시간이 상이하니 클래스별 상세 일정 확인 부탁드립니다.</li>
              </ul>
            </span>
					</dd>
					<dd>
						<span class="sub_title">장소</span>
						<span class="desc">T Factory 1층 Flex Stage</span>
					</dd>
				</dl>
			</div>
			<div class="details-inner notification">
				<h2 class="main-title">안내사항</h2>
				<ul>
					<li>※본 전시는 T Factory를 방문하여 스마트폰으로 본인인증 한<br>경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
					<li>※본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
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
  name: 'Program246',
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
