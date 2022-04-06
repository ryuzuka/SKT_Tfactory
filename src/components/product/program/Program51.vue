<template>
  <div class="contents bottom-sticky" ref="contents">
    <!-- slide -->
    <div class="slider-prd">
      <img src="../../../assets/images/program/class51-slide1.jpg" alt="">
    </div>
    <!-- //slide -->
    <!-- details -->
    <div class="details sticky">
      <div class="details-header">
        <kakao-share
          title="촬영부터 편집까지! 스마트폰으로 브이로그 만들기"
          description="영상 제작 전문 에디와 함께하는 입문자용 원데이 클래스"
        ></kakao-share>

        <em class="flag-solid7">MEDIA CLASS</em>
        <h2 class="details-tit">
          촬영부터 편집까지!<br>
          스마트폰으로 브이로그 만들기
        </h2>
        <div class="tags">
          <span class="flag-basic">원데이클래스</span>
          <span class="flag-basic">초보용</span>
          <span class="flag-basic">영상</span>
        </div>
        <p class="desc type2">영상 제작 전문 에디와 함께하는 입문자용 원데이 클래스</p>
        <ul class="texts-info" style="margin-top: 8px; padding-left: 18px; font-size:14px; text-indent: -18px; line-height:22px;">
          <li>※ 본 프로그램은 SKT의 IT/문화체험 증진 프로그램의 일환으로 무료로 진행됩니다.</li>
        </ul>
      </div>
      <div class="details-inner">
        <h3 class="subtit">클래스 소개</h3>
        <p>
          최소한의 장비, 스마트폰으로 최대한의 효과를 얻는 방법<br>
          휴대폰 하나만으로 가장 쉽고 빠르게 촬영과 편집을 배워보는 클래스!<br>
          영상제작을 재미있게 시작하고 소중한 나만의 추억을 기록해보세요.
        </p>
        <h3 class="subtit">클래스 구성</h3>
        <ol class="step-list" start="margin-top:20px">
          <li>스마트폰 기본셋팅</li>
          <li>기본적인 촬영기법 배우기</li>
          <li>영상촬영</li>
          <li>편집</li>
        </ol>
        <h3 class="subtit">준비물</h3>
        <p>스마트폰 (VLLO 어플 설치)</p>
        <h3 class="subtit">추천 대상</h3>
        <ul class="texts-list">
          <li>내가 가진 휴대폰의 카메라 기능에 대하여 제대로 알고 싶으신 분</li>
          <li style="word-break:unset;">영상을 시작하고 싶은데 어떻게 시작해야 될지 모르겠는 분</li>
        </ul>
        <h3 class="subtit">소요시간 및 장소</h3>
        <p>
          매주 월요일 오후 15시, 18시<br>
          T Factory 2층 Consulting Zone
        </p>
        <h3 class="subtit">{{ $t('prd.leader-introduction')}}</h3>
        <div class="thumb"><img src="../../../assets/images/program/class51-conts1.jpg" alt=""></div>
        <div class="profile">
          <em>MEDIA SPECIALIST</em>
          <span>
            EDDIE (오른쪽)<br>
            에디
          </span>
        </div>
        <ul class="texts-list">
          <li>삼성전자판매 스마트아카데미 진행</li>
          <li>서울예술대학교 예술경영학과 영상콘텐츠기획전공</li>
          <li>각종 홍보영상 제작</li>
          <li>서울아트비디오페스티벌 기획팀</li>
        </ul>
        <div class="profile" style="margin-top:16px;">
          <em>TECH SPECIALIST</em>
          <span>
            DEAN (왼쪽)<br>
            딘
          </span>
        </div>
        <ul class="texts-list">
          <li>애플, 삼성, LG 마스터즈 활동</li>
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
  name: 'Program51',
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
