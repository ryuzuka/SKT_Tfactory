<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd swiper-top">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="thumb"><img src="../../../assets/images/program/class52-slide1.jpg" alt=""></div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb"><img src="../../../assets/images/program/class52-slide2.jpg" alt=""></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="IT와 미술의 만남 아이패드로 쉽게 드로잉하기"
          description="비아와 함께하는 입문자용 드로잉 원데이 클래스"
        ></kakao-share>

        <em class="flag-solid7">ART CLASS</em>
        <h2 class="details-tit">
          IT와 미술의 만남<br>
          아이패드로 쉽게 드로잉하기
        </h2>
        <div class="tags">
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">초보용</span>
          <span class="flag-basic">드로잉</span>
        </div>
        <p class="desc type2">비아와 함께하는 입문자용 드로잉 원데이 클래스</p>
        <ul class="texts-info" style="margin-top: 8px; padding-left: 18px; font-size:14px; text-indent: -18px; line-height:22px;">
          <li>※ 본 프로그램은 SKT의 IT/문화체험 증진 프로그램의 일환으로 무료로 진행됩니다.</li>
        </ul>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          IT와 ART가 만나 탄생시키는 나만의 ARTWORK<br>
          평소 드로잉에 관심은 있었지만 시작하기 어려웠던 분들께, iPad를 통해 손쉽게 나만의 부캐를 완성해보는 시간!<br>
          나만의 ARTWORK를 드로잉해보세요!
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>드로잉 앱 세팅</li>
          <li>컨셉 선택</li>
          <li>부캐 선택</li>
          <li>iPad를 통해 스케치 및 채색</li>
          <li>제출하는 경우 - 미승인 시 꿀팁</li>
        </ol>
        <p style="margin-top:24px;">클래스에서의 드로잉 활용</p>
        <ul class="texts-list" style="margin-top:2px;">
          <li>움직이는 이모티콘 제출하기</li>
          <li>스마트기기 배경화면 (스마트폰, 탭)</li>
          <li>나에게 선물하는 나의 부캐로 힐링</li>
        </ul>
        <h3 class="subtit">준비물</h3>
        <p>procreate 앱 (애플스토어)</p>
        <h3 class="subtit">추천 대상</h3>
        <ul class="texts-list">
          <li>그림을 즐기고 싶지만, 곰손일까 겁에 질리신 분</li>
          <li>나만의 부캐를 만들고 싶으신 분</li>
          <li>이모티콘을 만들어 제출하고 싶으신 분</li>
          <li>나의 드로잉에 대해 같이 의견을 나누고 싶으신 분</li>
        </ul>
        <h3 class="subtit">소요시간 및 장소</h3>
        <p>
          1시간<br>
          T Factory 2층, Apple Zone
        </p>
        <h3 class="subtit">{{ $t('prd.leader-introduction')}}</h3>
        <div class="thumb"><img src="../../../assets/images/program/class52-conts.jpg" alt=""></div>
        <div class="profile">
          <span>
            BIA<br>
            비아
          </span>
        </div>
        <ul class="texts-list">
          <li>Ethan School 미술교육 진행</li>
          <li>대림미술관 교육 프로그램 진행</li>
          <li>현대모터스튜디오 키즈 프로그램 진행</li>
          <li>현대모터스튜디오 성인 프로그램 진행</li>
        </ul>
        <div class="notice">
          <h4 class="subtit">방역패스 안내사항</h4>
          <ul class="texts-info">
            <li style="display:flex;">1. 백신 접종 완료자 :<span style="margin-left:4px;">COOV / 카카오톡 /<br>네이버 동의 증명서 / 예방접종 스티커</span></li>
            <li>2. PCR 음성 확인서 (48시간 이내)</li>
            <li>3. 만 18세 이하 청소년</li>
            <li>4. 확진 후 완치자 (격리해제 확인서)</li>
            <li>5. 백신접종 예외자 (보건소 발급소견서)</li>
          </ul>
          <p class="texts-notice" style="margin-top:20px;">본 클래스/투어/덕콘은 방역수칙 준수를 위해<br>방역패스 인증자에 한해 참여가 가능합니다.</p>
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

export default {
  name: 'Program52',
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
  .texts-list li:nth-child(2):before {
    content: '-' !important;
    margin-left: -9px;
  }
</style>
