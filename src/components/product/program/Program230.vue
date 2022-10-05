<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
			<img ref="shareImage" src="../../../assets/images/program/class230-slide1.jpg" alt="VLOG 만들기 (feat.시네마틱모드)">
		</div>
    <!-- //slide -->
    <!-- details -->
    <div class="details">
      <div class="details-header" style="padding: 32px 20px 40px;">
        <kakao-share
          title="[Crew Class for New 0’s] VLOG 만들기 (feat.시네마틱모드)"
          description="에디&딘과 함께하는 iPhone14 시네마틱모드를 활용한 입문자용 원데이클래스"
        ></kakao-share>

        <em class="flag-solid7">MEDIA CLASS</em>
        <h2 class="details-tit">
          [Crew Class for New 0’s]<br>VLOG 만들기<br>(feat.시네마틱모드)
        </h2>
        <div class="tags">
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">VLOG</span>
          <span class="flag-basic">iPhone14</span>
        </div>
        <p class="desc type2">
          에디&딘과 함께하는 iPhone14 시네마틱모드를<br>활용한 입문자용 원데이클래스
        </p>
        <h3 class="subtit">클래스 소개</h3>
        <p style="margin-top: 12px;">
          최소한의 장비, 스마트폰으로 최대한의 효과를 얻는 방법을 알고 싶나요? iPhone14 하나만으로 가장 쉽고 빠르게 촬영과 편집을 배워보는 클래스입니다. iPhone14로 영상 제작을 재미있게 시작하고 소중한 나만의 추억을 기록해보세요!
        </p>
        <h3 class="subtit">추천 대상</h3>
        <ol class="step-list" start="margin-top:12px">
          <li>iPhone 14/Pro의 시네마틱모드의 기능을 제대로<br> 알고 싶으신 분</li>
          <li>영상을 시작하고 싶은데 어떻게 시작해야 될지<br> 모르겠는 분</li>
        </ol>
      </div>
      <div class="details-inner">
				<h3 class="subtit">소요시간 및 장소</h3>
				<dl>
					<dd>
						<span class="sub_title" style="width: 52px;">소요시간</span>
						<span class="desc">1시간</span>
					</dd>
					<dd>
						<span class="sub_title" style="width: 52px;">장소</span>
						<span class="desc">T Factory 2층, 애플 CSP</span>
					</dd>
				</dl>
			</div>
      <div class="details-inner notification" style="padding: 40px 20px 20px;">
				<h3 class="subtit">유의사항</h3>
				<ul>
					<li>※해당 클래스는 약 1시간 소요됩니다.</li>
					<li>※동일한 클래스에 중복 참여는 불가합니다.</li>
					<li>※본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
					<li>※본 클래스 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
				</ul>
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

export default {
  name: 'Program230',
  components: {
    KakaoShare,
    ProgramButton
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/product';
</style>
