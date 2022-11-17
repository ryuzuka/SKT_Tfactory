<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class258-slide1.jpg" alt="수능 이벤트 | 얘드라 새로 바꿔야지, 애플 할인 챙겨!<">
		</div>
		<!-- //slide -->
		<!-- details -->
		<div class="details sticky">
			<div class="details-header" style="padding: 31px 20px 40px 20px;">
				<kakao-share
          title="T Factory에서 만나는 애플 정품 특별 할인"
          description="수능 이벤트 | 얘드라 새로 바꿔야지, 애플 할인 챙겨!"
        ></kakao-share>

        <em class="main-subtitle">[수능 이벤트]<br>얘드라 새로 바꿔야지, 애플 할인 챙겨!</em>
        <h2 class="main-title" style="margin-top:4px;">T Factory에서 만나는<br>애플 정품 특별 할인</h2>
        <p class="desc2" style="margin-top: 16px;">
          오직 T Factory에서 만날 수 있는 애플 정품 특별 할인!<br>
          대학생 새내기 준비도 T Factory에서 시작하세요.
        </p>
        <h3 class="subtit" style="font-size: 16px; font-weight: bold;">[할인판매 구성]</h3>
        <ol class="step-list" style="margin-top:12px; line-height: 1.71;">
          <li style="margin-bottom:12px;">
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">전품목 30% 할인판매</span><br>
						<span class="desc">
                정품 케이스 : 아이폰14, 아이폰12, 아이폰11<br>
                정품 가죽 케이스: MagSafe형 아이폰<br>
                스마트 배터리 케이스: 아이폰11<br>
                USB-C Power Adapter
            </span>
          </li>
          <li style="margin-bottom:12px;">
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">전품목 20% 할인판매</span><br>
						<span class="desc">
              AirPods Max<br>
              AirPods Pro2<br>
              AirPods Pro<br>
              AirPods2<br>
            </span>
          </li>
          <li>
						<span class="sub_title" style="font-weight: bold; color: #0b0a0a;">20만원 할인판매</span><br>
						<span class="desc">스마트 워치 : Apple Watch 7, SE, 갤럭시 워치5</span>
          </li>
        </ol>
			</div>
      <div class="details-inner">
				<h2 class="main-title">일정 및 장소</h2>
				<dl>
					<dd>
						<span class="sub_title">일정</span>
						<span class="desc" style="width: 255px;">11월~매진시까지</span>
					</dd>
					<dd>
						<span class="sub_title">장소</span>
						<span class="desc">T Factory 1층 무인매장</span>
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
  name: 'Program258',
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
