<template>
	<div class="contents" :class="{'bottom-sticky': isBookingYn}" ref="contents">
		<!-- slide -->
		<div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class291-slide1.jpg" alt="사진 작가가 직접 알려주는 Photo Class | 동원 작가">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="사진 작가가 직접 알려주는 Photo Class"
          description="사진 작가가 직접 알려주는 Photo Class"
        ></kakao-share>

        <em class="main-subtitle">[CLASS]</em>
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">사진 작가가 직접 알려주는<br />Photo Class | 동원 작가</h2>
        <p class="desc2" style="margin-top:24px;">
          우리가 매일 마주하는 일상의 풍경에서 새로운 모습과
          색감을 포착하는 동원(@hello_dongwon), 한기재(@__hanfolk) 작가의 사진 클래스. 두 작가가 순간을 담는 방법과 시선, 그 속에 담긴 생각을 T Factory에서 함께 만나보아요.
        </p>
      </div>
      <div class="details-inner" style="padding: 20px 20px 40px;">
        <h2 class="main-title" style="margin-top:9px; font-size: 24px;">일정 및 장소</h2>

        <ul>
          <li style="margin-bottom: 32px;">
            <p class="sub-title" style="margin-top:9px; margin-bottom: 16px; font-size: 20px; color: #000; font-weight: 500;">동원 작가</p>
            <dl style="margin-bottom: 24px;">
              <dd>
                <span class="sub_title">클래스 일정</span>
                <span class="desc" style="margin-left: 12px;">4/28(금) 오후 7시</span>
              </dd>
              <dd>
                <span class="sub_title">응모일정</span>
                <span class="desc" style="margin-left: 28px;">4/14(금) ~ 4/20(목)</span>
              </dd>
              <dd>
                <span class="sub_title">당첨자 발표</span>
                <span class="desc" style="margin-left: 12px;">4/21(금) 발표</span>
              </dd>
            </dl>
            <div class="btn-wrap" style="margin-top: 12px">
              <a class="btn-line big disabled" disabled to="/experience/program291?classId=251">
                클래스 예약하기
              </a>
            </div>
          </li>
          <li>
            <dl>
              <dd>
                <span class="sub_title">장소</span>
                <span class="desc" style="margin-left: 12px;">T Factory 2층 O Stage</span>
              </dd>
            </dl>
          </li>
        </ul>

      </div>

      <div class="details-inner notification">
        <h2 class="main-title">유의사항</h2>
        <ul class="info_text">
          <li>※해당 클래스는 약 1시간 소요됩니다.</li>
          <li>※동일한 클래스에 중복 참여는 불가합니다.</li>
          <li>※본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
          <li>※본 클래스 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
        </ul>
      </div>
    </div>
    <!-- //details -->

    <!-- button set -->
		<program-button v-show="false"></program-button>
		<!-- // button set -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program281',
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
		  const redirectURL = 'https://www.instagram.com/tfactory_official/'
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
