<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class53-slide1.jpg" alt="셀린&루나와 함께하는 릴스 만들기 원데이 클래스">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="[1DAY 릴스 제작] 요즘 유행하는 릴스의 모든 것!"
          description="셀린&루나와 함께하는 릴스 만들기 원데이 클래스"
        ></kakao-share>

        <em class="flag-solid7">MEDIA CLASS</em>
        <h2 class="details-tit">
          [1DAY 릴스 제작]<br>요즘 유행하는 릴스의 모든 것!
        </h2>
        <div class="tags">
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">초보용</span>
          <span class="flag-basic">릴스</span>
          <span class="flag-basic">SNS</span>
        </div>
        <p class="desc type2">인스타그램 200% 활용법<br>감각있는 릴스 만들기!</p>
        <p class="desc type2">셀린&루나와 함께하는 릴스 만들기 원데이 클래스</p>
        <ul class="texts-info" style="padding-left: 13px; text-indent: -13.4px;">
          <li>※ 본 프로그램은 SKT의 IT/문화체험 증진 프로그램의 일환으로 무료로 진행됩니다.</li>
        </ul>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          이제 피드만 있는 인스타그램은 그만!<br>
          남들 다 하는 릴스, 나도 해보고 싶다면?<br>
          요즘 유행하는 릴스의 기초부터 심화과정까지 초보자분<br>들을 위한 맞춤 클래스를 준비했습니다.
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>릴스 알아보기</li>
          <li>미리 찍은 사진/영상으로 릴스 만들어보기</li>
          <li>요새 유행하는 릴스 챌린지 알아보기</li>
          <li>릴스 편집기능 활용해보기</li>
          <li>실습</li>
        </ol>
        <h3 class="subtit">준비물</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>스마트폰</li>
          <li>인스타그램 계정</li>
          <li>열정과 적극적인 참여!</li>
        </ol>
        <h3 class="subtit">추천 대상</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>인스타그램 입문자</li>
          <li>릴스를 한번도 해본 적 없지만 사용해보고 싶은 분</li>
          <li>유행하는 챌린지 참여하고 싶은데 혼자서 하기 힘드신 분</li>
        </ol>
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

    <!-- button set -->
    <program-button></program-button>
    <!-- // button set -->
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
  .texts-info{
    margin-top: 3px;
    padding-left: 12px;
    font-size: 12px;
    line-height: 18px;
    text-indent: -13.4px;
  }
</style>
