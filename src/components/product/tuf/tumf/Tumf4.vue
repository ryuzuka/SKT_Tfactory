<template>
  <div class="contents" ref="contents">
	  <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../../assets/images/program/class111-slide1.jpg" alt="T University Music Festival">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 31px 12px 40px 20px;">
        <kakao-share
          title="T University Music Festival"
          description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대! - ReleAse"
        ></kakao-share>

        <em class="main-subtitle">T University Music Festival</em>
        <h2 class="main-title" style="margin-top:4px;">인기 뮤지션과<br>대학생 뮤지션이 꾸미는<br>스페셜 무대</h2>
        <p class="desc2">
          대학생 뮤지션들이 꾸미는 THECON의 무대.<br>T Factory에 방문하셔서 대학생 뮤지션들과 함께 축제를 즐겨주세요.
        </p>
      </div>
      <div class="line">
        <span>THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THECON&nbsp;&nbsp;&nbsp; THE</span>
        <img src="../../../../assets/images/program/line-bg.png" alt="THECON line-bg">
      </div>
      <div class="details-header" style="padding: 40px 20px;">
        <em class="main-subtitle">대학생 뮤지션 소개</em>
        <h2 class="main-title" style="margin-top:4px;">ReleAse</h2>
        <div class="thumbnail"><img src="../../../../assets/images/program/tuf_tumf4_musician.jpg" alt="tuf_tumf4_musician"></div>
        <p style="margin-top: 8px;">
          이화여자대학교 중앙 락밴드 동아리 밴드 &lt;ReleAse&gt;는 이화여자대학교의 “해방 이화”정신에서 비롯되어 2002년부터 시작된 이화여자대학교 중앙 락밴드 동아리로 기본적으로 록의 범주 안에서 메이저 락밴드, 포스트모던 인디락, 하드락, 얼터너티브, 메탈, 록큰롤, 및 다양한 대중적인 노래 등의 넓은 스펙트럼의 노래를 커버하는 밴드다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 55px;">공연 기간</span>
            <span class="desc">2022년 5월 7일 (토) PM 4:00</span>
          </dd>
           <dd>
            <span class="sub_title" style="width: 55px;">장소</span>
            <span class="desc">SK텔레콤 플래그십스토어 T Factory<br>(홍대입구역 9번 출구)</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner" style="padding: 40px 20px;">
        <h2 class="main-title">안내사항</h2>
        <ul>
          <li>※ 본 전시는 T Factory 홍대점을 방문하여 스마트폰으로 체크인 한 경우에만 참여 가능합니다. (체크인 가능 연령: 만 14세 이상)</li>
          <li>※ 본 전시 세부 사항들은 업체 사정에 따라 별도의 안내 없이 중단 또는 변경될 수 있습니다.</li>
        </ul>
      </div>
      <div class="details-inner" style="padding: 40px 0 20px">
        <h2 class="main-title" style="padding: 0 20px; color: #000;">함께즐겨요!</h2>
        <div class="program">
	        <router-link to="/experience/program110?classId=156">
	          <div class="desc">
	            <p class="detail" style="margin-bottom: 25px;">Woluld you, 우주?</p>
	            <span class="topic">T대학 우주 축제, TUF</span>
              <img style="right: -61px;" src="../../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
	          </div>
	        </router-link>
        </div>
        <div class="program">
	        <router-link to="/experience/program112?classId=155">
	          <div class="desc">
	            <p class="detail">미술 전공 대학생들의<br>일러스트로 꾸며진 팝업전시<br>POP-UP Exhibition X University</p>
	            <span class="topic">TUAF</span>
              <img style="bottom: -7px; right: 165px;" src="../../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../../assets/images/program/class107-conts3.jpg" alt="POP-UP Exhibition X University">
	          </div>
	        </router-link>
        </div>
        <div class="program">
	        <router-link to="/experience/program4?classId=63">
	          <div class="desc">
	            <p class="detail">나도 작곡가!<br>아이패드로 곡 만들기</p>
	            <span class="topic">크루 클래스-음악</span>
              <img style="bottom: -7px; right: -48px;" src="../../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../../assets/images/program/class111-conts3.jpg" alt="크루 클래스-음악">
	          </div>
	        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as NATIVE from '../../../../js/native'
import KakaoShare from '../../../common/KakaoShare'

export default {
  name: 'Tumf4',
  components: {
	  KakaoShare
  },
  data () {
    return {
    }
  },
  created () {
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
      .thumbnail img {
        height: 340px;
      }
      p{
        margin-top: 0;
        line-height: 20px;
      }
    }
    &-inner {
      padding:40px 20px;
      dl dd .desc{
        margin-left: 21px;
      }
      dl dd .desc em{
        color: #3617ce;
      }
      ul{
        font-size: 12px;
        line-height: 19px;
        color: #787878;
      }
    }
  }
</style>
