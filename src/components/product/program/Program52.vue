<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd swiper-top">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="thumb"><img src="../../../assets/images/program/class52-slide1.jpeg" alt=""></div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb"><img src="../../../assets/images/program/class52-slide2.jpeg" alt=""></div>
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
          IT와 미술이 만나 탄생한 나의 그림!<br>
          평소 드로잉에 관심은 있었지만 시작하기 어려우셨던 분들께, 아이패드를 통해 누구나 손쉽게 나만의 드로잉을 완성할 수 있도록 도와드립니다.<br>
          나만의 작품을 완성해보세요!
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>아이패드및 드로잉 앱 세팅</li>
          <li>드로잉 주제 선택
            <ul class="texts-list" style="margin-top:2px;">
              <li>나만의 스마트폰 배경화면</li>
              <li>지인에게 선물 할 그림 엽서</li>
              <li>평소 그리고 싶었던 풍경, 수채화 그림</li>
              <li>나에게 주는 힐링 그림</li>
            </ul>
          </li>
          <li>스케치 아이디어 선정</li>
          <li>아이패드를 통해 스케치 및 채색</li>
        </ol>
        <h3 class="subtit">준비물</h3>
        <p>아이패드와 애플 펜슬 (대여 가능)</p>
        <h3 class="subtit">추천 대상</h3>
        <ul class="texts-list">
          <li>아이패드를 활용한 드로잉을 체험하고 싶으신 분</li>
          <li>그림을 즐겨 그리지만 함께 그리는 친구가 필요하신 분</li>
          <li>그림에 관심있지만, 곰손이라 겁먹으신 분</li>
          <li>친구, 연인, 가족에게 그림을 선물하고 싶으신 분</li>
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
      </div>
    </div>
    <!-- //details -->
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
