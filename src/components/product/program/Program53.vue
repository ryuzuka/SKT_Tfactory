<template>
  <div class="contents" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class53-slide1.jpg" alt="">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="인스타용 느낌있는 사진 찍기"
          description="셀린&루나와 함께하는 입문자용 사진 촬영/편집 원데이 클래스"
        ></kakao-share>

        <em class="flag-solid7">MEDIA CLASS</em>
        <h2 class="details-tit">
          인스타용<br>
          느낌있는 사진 찍기
        </h2>
        <div class="tags">
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">초보용</span>
          <span class="flag-basic">사진</span>
        </div>
        <p class="desc type2">셀린&루나와 함께하는 입문자용 사진 촬영/편집 원데이 클래스</p>
        <ul class="texts-info" style="margin-top: 8px; padding-left: 18px; font-size:14px; text-indent: -18px; line-height:22px;">
          <li>※ 본 프로그램은 SKT의 IT/문화체험 증진 프로그램의 일환으로 무료로 진행됩니다.</li>
        </ul>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          스마트폰 카메라로도 느낌있게~<br>
          나만의 감성있는 인스타그램 피드 꾸미는 방법.
        </p>
        <p>
          기초적인 카메라 설정부터 피드꾸미는 꿀팁까지!<br>
          감각있는 사진으로 인스타그램 피드를 마음껏 꾸며보세요
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>스마트폰 기본셋팅</li>
          <li>인물사진 모드 활용</li>
          <li>기본카메라 편집 활용</li>
          <li>보정어플 활용</li>
          <li>인스타그램 피드 꾸미는 어플 추천</li>
        </ol>
        <h3 class="subtit">준비물</h3>
        <p>스마트폰</p>
        <h3 class="subtit">추천 대상</h3>
        <ul class="texts-list">
          <li>스마트폰 내 기본카메라 기능을 잘 모르셨던 분</li>
          <li>사진 좀 잘 찍으라는 친구의 구박에서<br>
            벗어나고 싶으신 분
          </li>
          <li>인스타그램 피드를 예쁘게 꾸미고 싶으신 분</li>
          <li>사진을 감각있게 편집하고 싶으신 분</li>
        </ul>
        <h3 class="subtit">소요시간 및 장소</h3>
        <p>
          1시간<br>
          T Factory 2층, Consulting Zone
        </p>
        <h3 class="subtit">{{ $t('prd.leader-introduction')}}</h3>
        <div class="thumb"><img src="../../../assets/images/program/class53-conts.jpg" alt=""></div>
        <div class="profile">
          <span>
            CELINE<br>
            셀린
          </span>
          <span style="margin-top:12px;">
            LUNA<br>
            루나
          </span>
        </div>
      </div>
    </div>
    <!-- //details -->
  </div>
</template>

<script>
import KakaoShare from '../../common/KakaoShare'
import ProgramButton from './components/ProgramButton'

export default {
  name: 'Program53',
  components: {
    KakaoShare,
    ProgramButton
  },
  data () {
    return {
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
