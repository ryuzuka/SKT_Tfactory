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
          description="인기 뮤지션과 대학생 뮤지션이 꾸미는 스페셜 무대! - 크림슨"
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
        <h2 class="main-title" style="margin-top:4px;">크림슨</h2>
        <div class="thumbnail"><img src="../../../../assets/images/program/tuf_tumf13_musician.jpg" alt="tuf_tumf13_musician"></div>
        <p style="margin-top: 8px;">
          크림슨은 1988년 12월 설립된 고려대학교 실력지향 락밴드로 다양한 음악 취향의 사람들이 만나 함께 합을 맞추고 어울리며 음악을 즐기고 공유하는 동아리다.
        </p>
        <p style="margin-top: 22px;">
          음악에 대한 열정과 사랑으로 뭉친 구성원들은 정기공연과 타대학 밴드와의 연합 공연 등을 준비하며 악기를 연습하고 실력을 다지고 있다. 특히, 크림슨은 다양한 구성원들의 취향을 존중하고 그 취향을 실제로 공연에 반영하는 과정에서 타 동아리에서보다 많은 시간의 연습을 하게 된다. 이를 통해 회원들은 이전보다 월등히 높은 연주 실력을 함양하게 되고, 그들의 경험이 아래 기수에게 전해져 실력 향상의 선순환을 이루는 것이 크림슨의 궁극적 목표 중 하나이다.
        </p>
        <p style="margin-top: 22px;">
          또한, 음악을 좋아하는 사람들이 한 곳에 모여 다양한 종류의, 음악적인 공감대를 형성할 수 있는 곳이 크림슨이며 이러한 보금자리를 계속 유지하는 것이 크림슨의 두 번째 궁극적 목표라 할 수 있다. 크림슨의 회원들은 항상 각자의 취향을 존중하고, 이해하려 노력하고 공유하며 그 과정에서 서로 간의 화합을 다지고 있다. 현재 활동 중인 33기는 작년과 올해 유니브 페스티벌 공연, 고려대 총학생회 OT 공연, 고려대 동아리 박람회 공연, 대학 밴드 연합공연에 참가해오며 실력을 쌓아가고 있다.
        </p>
      </div>
      <div class="details-inner">
        <h2 class="main-title">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 55px;">공연 기간</span>
            <span class="desc">5월 중 <em>*일정 추후 공지 예정</em></span>
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
  name: 'Tumf13',
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
