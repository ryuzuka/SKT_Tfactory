<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
    <!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class253-slide1.jpg" alt="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="수험생들의 버킷리스트를 이루어 줄 원데이 클래스"
          description="수능 이벤트 | 얘드라 책 덮고 클래스 챙겨!"
        ></kakao-share>

        <em class="main-subtitle">[수능 이벤트] 얘드라 책 덮고 클래스 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">수험생들의<br>버킷리스트를 이루어<br>줄 원데이 클래스</h2>
        <p class="desc2" style="margin-top: 16px;">
          수능 끝! 이제 새로운 취미에 도전해보세요.<br>
          수능이 끝난 수험생들을 위한 T Factory에서<br>
          수험생들의 버킷리스트를 이루어줄 원데이 클래스를<br>
          준비했습니다.
        </p>
      </div>
      <div class="details-inner">
				<em class="main-subtitle">핫하게 떠오르는 신상 취미</em>
				<h2 class="main-title" style="margin:4px 0 32px;">뜨개질 원데이 클래스</h2>
        <p class="desc2">
          <b style="display: inline-block; color: #000;">1. 얘드라 책 덮고 클래스 챙겨!<br>&nbsp;&nbsp;&nbsp;&nbsp;펀칭니들 클래스</b>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 40px;">
	          <router-link class="btn-line big" to="/experience/program254?classId=198">
	          11월 14일부터 예약 가능합니다.
	          </router-link>
          </div>
        </div>
        <p class="desc2">
          <b style="display: inline-block; color: #000;">2. 얘드라 책 덮고 클래스 챙겨!<br>&nbsp;&nbsp;&nbsp;&nbsp;자이언트 얀 가방 클래스</b>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 40px;">
	          <router-link class="btn-line big" to="/experience/program255?classId=212">
	          11월 14일부터 예약 가능합니다.
	          </router-link>
          </div>
        </div>
        <p class="desc2">
          <b style="display: inline-block; color: #000;">3. 얘드라 책 덮고 클래스 챙겨!<br>&nbsp;&nbsp;&nbsp;&nbsp;크리스마스 리스 클래스</b>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 0px;">
	          <router-link class="btn-line big" to="/experience/program256?classId=213">
	          11월 14일부터 예약 가능합니다.
	          </router-link>
          </div>
        </div>
			</div>
      <div class="details-inner">
				<em class="main-subtitle">핫한 뷰티 크리에이터를 강사로 만나는</em>
				<h2 class="main-title" style="margin:4px 0 22px;">뷰티 원데이 클래스</h2>
        <p class="desc2">
          <b style="display: inline-block; color: #000; font-weight: normal;">50만 인기 뷰티 유튜브 크리에이터, 재유님과 함께 하는 원데이 뷰티클래스.</b>
        </p>
        <div class="button_area">
          <div class="btn-wrap" style="margin: 22px 12px 0px;">
	          <router-link class="btn-line big" to="/experience/program257?classId=220">
	          11월 16일부터 신청 가능합니다
	          </router-link>
          </div>
        </div>
			</div>
			<div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title">일정</span>
						<span class="desc" style="width: 255px;">
              11월 22일 ~ 11월 24일
              <ul style="font-size: 12px; line-height: 1.5; word-break: keep-all; margin-bottom: 8px;">
                <li>*각 프로그램마다 시간이 상이하니 클래스별 상세 &nbsp;일정 확인 부탁드립니다.</li>
              </ul>
            </span>
					</dd>
					<dd>
						<span class="sub_title">장소</span>
						<span class="desc">T Factory 2층 Apple Zone</span>
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
  name: 'Program253',
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
