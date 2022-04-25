<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img ref="shareImage" src="../../../assets/images/program/class112-slide2.jpg" alt="POP-UP Exhibition X University">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header" style="padding: 28px 12px 40px 20px;">
        <kakao-share
         title="POP-UP Exhibition X University"
          description="미술 전공 대학생들이 축제, 나의 우주를 주제로 작업한 일러스트로 꾸며진 팝업전시"
        ></kakao-share>

        <em class="main-subtitle">미술 전공 대학생들이 축제, 나의 우주를<br>주제로 작업한 일러스트로 꾸며진 팝업전시</em>
        <h2 class="main-title" style="margin-top: 5px;">POP-UP Exhibition<br>X University</h2>
        <p class="desc2" style="margin-top: 0px;">
          미술작품 전시 기회가 줄어든 대학생들을 응원하고자 T대학 우주축제 기간 동안 특별 미술 전시를 준비했습니다.<br>T Factory 2층 POP-UP 전시존에서 진행되는 TUAF<br>POP-UP 전시는 작품 전시 뿐만 아니라 작품 거래까지 진행되니,<br> 방문하셔서 작품도 감상하고 유망 작가로 성장할 대학생 작가들을 함께 응원해주세요.
        </p>
        <p class="desc2" style="margin-top: 22px;">전시는 총 두 번에 나누어 진행됩니다.</p>
        <p class="desc2" style="margin-top: 20px;">TUAF Part 1.  : 2022.04.11 ~ 5.06 (4주)<br>TUAF Part 2.  : 2022.05.07 ~ 5.31 (4주)</p>
      </div>
      <div class="details-inner" style="padding: 40px 20px">
        <h2 class="main-title" style="margin-bottom: 0;">참여 작가 보기</h2>
        <p class="sub-title">TUAF Part 1. 참여 작가</p>
        <div class="details-artlist">
          <ul>
            <li>강태린</li>
            <li>김경준</li>
            <li>김기윤</li>
            <li>김동준</li>
            <li>김미효</li>
            <li>김민정</li>
          </ul>
          <ul style="padding-right: 65px;">
            <li>김서영</li>
            <li>김우진</li>
            <li>김지구</li>
            <li>김진우</li>
            <li>김하늘</li>
            <li>김현호</li>
          </ul>
          <ul>
            <li>박소현</li>
            <li>박주홍</li>
            <li>박준민</li>
            <li>박지원</li>
            <li>반효경</li>
            <li>배세아</li>
          </ul>
        </div>
        <p class="sub-title" style="margin-top: 32px">TUAF Part 2. 참여 작가</p>
        <div class="details-artlist">
          <ul>
            <li>김지수</li>
            <li>서우경</li>
            <li>손현주</li>
            <li>심유리</li>
            <li>유민진</li>
            <li>윤석원</li>
          </ul>
          <ul style="padding-right: 22px;">
            <li>윤여송</li>
            <li>윤지민</li>
            <li>이상우, 조은서</li>
            <li>이세현</li>
            <li>이재은</li>
            <li>이진주</li>
          </ul>
          <ul style="padding-right: 44px;">
            <li>정민성</li>
            <li>정세윤</li>
            <li>정유빈</li>
            <li>조영인</li>
            <li>지유신</li>
            <li>한국소년</li>
          </ul>
        </div>
        <router-link to="/experience/program115">
          <div class="btn-wrap" style="margin-top: 40px; padding: 0px 12px;" >
            <button class="btn-line big">웹도록보기</button>
          </div>
        </router-link>
      </div>
      <div class="details-inner">
        <h2 class="main-title" style="margin-bottom: 13px;">일정</h2>
        <dl>
          <dd>
            <span class="sub_title" style="width: 52px;">전시일정</span>
            <span class="desc" style="margin-left: 24px;">TUAF Part 1.  : 2022.04.11 ~ 5.06 (4주)<br>TUAF Part 2.  : 2022.05.07 ~ 5.31 (4주)</span>
          </dd>
          <dd>
            <span class="sub_title" style="width: 52px;">장소</span>
            <span class="desc" style="margin-left: 24px;">SK텔레콤 플래그십스토어<br>T Factory 2층 POP-UP 전시존<br>(홍대입구역 9번 출구)</span>
          </dd>
        </dl>
      </div>
      <div class="details-inner">
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
				      <img style="right: -61px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
			      </div>
			      <div class="images">
				      <img src="../../../assets/images/program/class107-conts2.jpg" alt="T대학 우주 축제, TUF">
			      </div>
		      </router-link>
	      </div>
        <div class="program">
          <router-link to="/experience/program111?classId=154">
            <div class="desc">
              <p class="detail">대학생 뮤지션이 꾸미는<br>덕콘의 스페셜 무대<br>THECON X University</p>
              <span class="topic">TUMF</span>
              <img style= "bottom: -7px; right: 85px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
            </div>
            <div class="images">
              <img src="../../../assets/images/program/class107-conts1.jpg" alt="TUMF">
            </div>
          </router-link>
        </div>
        <div class="program">
	        <router-link to="/experience/program52?classId=81">
	          <div class="desc">
	            <p class="detail">IT와 미술의 만남<br>아이패드로 쉽게 드로잉하기</p>
	            <span class="topic">크루클래스-아이패드로<br>이모티콘 만들기</span>
	            <img style="bottom: 8px; right: -48px;" src="../../../assets/images/program/leftarrow-bk.png" alt="leftarrow">
	          </div>
	          <div class="images">
	            <img src="../../../assets/images/program/class112-conts3.jpg" alt="크루클래스-아이패드로 이모티콘 만들기">
	          </div>
	        </router-link>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import * as NATIVE from '../../../js/native'

export default {
  name: 'Program112',
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
  &-inner {
  padding:40px 20px;
  ul{
    font-size: 12px;
    line-height: 19px;
    color: #787878;
    }
    .sub-title{
    margin-bottom: 12px;
    line-height: 24px;
    font-weight: bold;
    color: #000;
    }
  }
}
.details-artlist{
  display: flex;
  ul{
    padding-right: 68px;
    line-height: normal;
    font-size: 14px;
  }
}
</style>
