<template>
  <div id="guide" ref="loadingContainer" class="wrap">
    <header class="header">
      <a class="btn-back" href="#" @click.prevent="$router.go(-1)"><span class="blind">{{ $t('comm.back') }}</span></a>
      <h1 class="page-tit">UI Elements</h1>
    </header>
    <div class="contents">
      <!-- <section class="row">
        <h2>typo scale</h2>
        <p>@font-set28</p>
        <p>@font-set24</p>
        <p>@font-set20</p>
        <p>@font-set18</p>
        <p>@font-set16</p>
        <p>@font-set14</p>
        <p>@font-set12</p>
      </section> -->

      <section class="row">
        <h2></h2>
        <div class="btn-wrap">
          <button class="btn-line big" id="kakaoShare">카카오 공유하기</button>
          <button class="btn-solid big" @click="copyLink">링크 복사</button>
        </div>
      </section>

      <section class="row">
        <h2>form</h2>
        <h3>checkbox</h3>
        <input type="checkbox" name="chk1" id="chk1-1" checked><label for="chk1-1">CCTV</label>
        <input type="checkbox" name="chk1" id="chk1-2"><label for="chk1-2">출동 경비</label>
        <input type="checkbox" name="chk1" id="chk1-3" disabled><label for="chk1-3">출동 경비</label>
        <h3>radio</h3>
        <input type="radio" name="rdo1" id="rdo1-1" checked><label for="rdo1-1">남자</label>
        <input type="radio" name="rdo1" id="rdo1-2"><label for="rdo1-2">여자</label>
        <input type="radio" name="rdo1" id="rdo1-3" disabled><label for="rdo1-3">여자</label>
        <h3>Dropdown</h3>
        <span>v-model: {{ selectModel }}</span>
        <ui-select
          v-model="selectModel"
          @change="changeUiSelect"
          tag="a"
          :data="[
            {text: 'Wave', value: 'value0'},
            {text: 'FLO', value: 'value1'},
            {text: 'X cloud', value: 'value2'},
            {text: 'Jump AR/VR', value: 'value3'},
            {text: 'Wave2', value: 'value4', selected: true}
          ]"
        ></ui-select>
        <h3>input</h3>
        <h4>text field</h4>
        <div class="input-box">
          <input type="text" placeholder="이름을 입력하세요">
        </div>
        <h4>search</h4>
        <div class="input-box search">
          <input type="search" placeholder="강남구 서초동">
          <button type="button" class="btn-del"><span class="blind">삭제</span></button> <!-- 검색창에서 입력 시 노출 -->
          <button type="button" class="btn-search"><span class="blind">검색</span></button>
        </div>
        <h4>invalid</h4>
        <div class="input-box invalid">
          <input type="text" required>
          <span class="info">입력시간 초과</span>
        </div>
        <h4>disabled</h4>
        <div class="input-box">
          <input type="text" value="강남구 서초동" disabled>
        </div>
        <h4>mobile</h4>
        <div class="input-box mobile">
          <ui-select
            :data="[
              {text: '010', value: 'value0', selected: true},
              {text: '011', value: 'value1'},
              {text: '017', value: 'value2'},
              {text: '018', value: 'value3'},
              {text: '019', value: 'value4'},
            ]"
          ></ui-select>
          <input type="tel" id="info1-1" placeholder="- 없이 숫자만 입력">
          <p>
            <input type="checkbox" id="info1-2"><label for="info1-2">개인정보 수집 및 이용동의</label>
            <a href="#" class="btn-link">전문 보기</a>
          </p>
        </div>
        <h4>form-group</h4>
        <dl class="form-group">
          <dt>
            <label for="info3-1">수강생<span class="required"><span class="blind">필수선택</span></span></label>
            <span class="chk-side"><input type="checkbox" id="info3-2"><label for="info3-2">신청자와 동일</label></span>
          </dt>
          <dd class="input-box"><input type="text" id="info3-1" placeholder="이름을 입력하세요"></dd>
        </dl>
        <h4>form-group-row</h4>
        <dl class="form-group-row">
          <dt>신청자<span class="required"><span class="blind">필수선택</span></span></dt>
          <dd>김티플</dd>
          <dt><label for="info1-1">연락처<span class="required"><span class="blind">필수선택</span></span></label></dt>
          <dd>010-1234-1234</dd>
        </dl>
      </section>
      <section class="row">
        <h2>Select option</h2>
        <h3>date picker</h3>
        <swiper class="datepicker" :options="dateSwiperOption">
          <swiper-slide style="width: auto">
            <ul class="list-date">
              <li v-for="(date, index) in dateList" :key="index">
                <input type="radio" v-model="selectDate" :value="date.year + date.month + date.date" name="date" :id="'date' + index"> <!-- 비활성화 disabled 추가 -->
                <label :for="'date' + index">
                  <span v-if="index === 0">오늘</span>
                  <span v-if="index > 0">{{ date.day }}</span>
                  <span class="date">{{ date.date }}</span>
                </label>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
        <h3>col3 type</h3>
        <ul class="list-option col3">
          <li><input type="radio" name="option" id="option1"><label for="option1">20대 미만</label></li>
          <li><input type="radio" name="option" id="option2"><label for="option2">20대</label></li>
          <li><input type="radio" name="option" id="option3" checked><label for="option3">30대</label></li>
          <li><input type="radio" name="option" id="option4"><label for="option4">40대</label></li>
          <li><input type="radio" name="option" id="option5"><label for="option5">50대</label></li>
          <li><input type="radio" name="option" id="option6"><label for="option6">60대 이상</label></li>
        </ul>
        <h3>col4 type</h3>
        <ul class="list-option col4">
          <li>
            <input type="radio" name="option2" id="option2-1"><label for="option2-1">09:00</label>
            <span class="num">13/25</span>
          </li>
          <li>
            <input type="radio" name="option2" id="option2-2"><label for="option2-2">09:30</label>
            <span class="num">13/25</span>
          </li>
          <li>
            <input type="radio" name="option2" id="option2-3" checked><label for="option2-3">10:00</label>
            <span class="num">13/25</span>
          </li>
          <li>
            <input type="radio" name="option2" id="option2-4"><label for="option2-4">10:30</label>
            <span class="info">대기접수</span>
          </li>
          <li>
            <input type="radio" name="option2" id="option2-5" disabled><label for="option2-5">11:00</label>
            <span class="num">25/25</span>
          </li>
        </ul>
        <h3>flexible type</h3>
        <ul class="list-option flexible">
          <li><input type="checkbox" name="option3" id="option3-1" checked><label for="option3-1">T프리미엄 스토어</label></li>
          <li><input type="checkbox" name="option3" id="option3-2"><label for="option3-2">바로 픽업</label></li>
          <li><input type="checkbox" name="option3" id="option3-3"><label for="option3-3">애플스토어</label></li>
          <li><input type="checkbox" name="option3" id="option3-4"><label for="option3-4">애플스토어</label></li>
          <li><input type="checkbox" name="option3" id="option3-5" checked><label for="option3-5">T프리미엄 스토어</label></li>
        </ul>

        <h3>filter</h3>
        <h4>type1</h4>
        <ul class="list-option flexible type1">
          <li><input type="checkbox" name="optiontype1" id="optiontype1-1"><label for="optiontype1-1">바로 픽업</label></li>
          <li><input type="checkbox" name="optiontype1" id="optiontype1-2" checked><label for="optiontype1-2">애플스토어</label></li>
          <li><input type="checkbox" name="optiontype1" id="optiontype1-3"><label for="optiontype1-3">SK 브로드밴드</label></li>
        </ul>
        <h4>type2</h4>
        <ul class="list-option flexible type2">
          <li><input type="checkbox" name="optiontype2" id="optiontype2-1" checked><label for="optiontype2-1">보안상담</label></li>
          <li><input type="checkbox" name="optiontype2" id="optiontype2-2"><label for="optiontype2-2">유선상담</label></li>
          <li><input type="checkbox" name="optiontype2" id="optiontype2-3"><label for="optiontype2-3">SK매직</label></li>
        </ul>
        <h4>type3</h4>
        <ul class="list-option flexible type3">
          <li><input type="checkbox" name="optiontype3" id="optiontype3-1"><label for="optiontype3-1">X Cloud</label></li>
          <li><input type="checkbox" name="optiontype3" id="optiontype3-2"><label for="optiontype3-2">FLO</label></li>
          <li><input type="checkbox" name="optiontype3" id="optiontype3-3"><label for="optiontype3-3">Wave</label></li>
          <li><input type="checkbox" name="optiontype3" id="optiontype3-4" checked><label for="optiontype3-4">Jump AR/VR</label></li>
        </ul>
        <h4>type4</h4>
        <ul class="list-option flexible type4">
          <li><input type="checkbox" name="optiontype4" id="optiontype4-1"><label for="optiontype4-1">코딩 교실</label></li>
          <li><input type="checkbox" name="optiontype4" id="optiontype4-2" checked><label for="optiontype4-2">동영상 교실</label></li>
          <li><input type="checkbox" name="optiontype4" id="optiontype4-3"><label for="optiontype4-3">동영상 교실</label></li>
        </ul>
        <h4>type5</h4>
        <ul class="list-option flexible type5">
          <li><input type="checkbox" name="optiontype5" id="optiontype5-1" checked><label for="optiontype5-1">주차 가능</label></li>
          <li><input type="checkbox" name="optiontype5" id="optiontype5-2"><label for="optiontype5-2">장애인 경사로 설치</label></li>
        </ul>
      </section>
      <section class="row">
        <h2>button</h2>
        <div class="btn-wrap">
          <button class="btn-basic big">Basic</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-line big">Line</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-solid big">Solid</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-solid big">Solid<i class="ico-check"></i></button>
        </div>
        <div class="btn-wrap">
          <button class="btn-basic xsmall">xsmall</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-basic small">small</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-basic medium">medium</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-basic big">big</button>
        </div>
        <div class="btn-wrap">
          <a href="#" class="btn-more">더보기</a>
        </div>
        <div class="btn-wrap">
          <button class="btn-line big">미동의</button>
          <button class="btn-solid big">동의</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-line big">구매내역 조회</button>
          <button class="btn-line big">영수증 보기</button>
        </div>
        <div class="btn-wrap">
          <button class="btn-line big">상담 예약</button>
          <button class="btn-buy big">다이렉트샵 주문</button>
        </div>
        <div>
          <a href="#" class="btn-link">위치기반 서비스 이용약관 보기</a>
          <a href="#" class="btn-link-point">전문 보기</a>
        </div>
      </section>
      <section class="row">
        <h2>header</h2>
        <header class="header">
          <a class="btn-home" href="#"><span class="blind">{{ $t('comm.back') }}</span></a>
          <h1 class="page-tit">관심 상품</h1>
        </header>
        <header class="header">
          <a class="btn-back" href="#"><span class="blind">{{ $t('comm.back') }}</span></a>
          <h1 class="page-tit">관심 상품</h1>
        </header>
        <header class="header">
          <a class="btn-back" href="#"><span class="blind">{{ $t('comm.back') }}</span></a>
          <h1 class="blind">매장찾기</h1>
          <div class="input-box">
            <input type="text" placeholder="매장명 또는 주소 키워드 입력">
            <button type="button" class="btn-del"><span class="blind">삭제</span></button>
          </div>
          <a href="#" class="btn-search"><span class="blind">검색</span></a>
        </header>
      </section>
      <section class="row">
        <h2>tab</h2>
        <div class="tab-wrap">
          <ul class="tabs">
            <li class="active"><button type="button">tab1</button></li>
            <li><button type="button">tab2</button></li>
          </ul>
          <section class="tab-conts active">
            tab1
          </section>
          <section class="tab-conts">
            tab2
          </section>
        </div>
        <div class="tab-wrap">
          <ul class="tabs scroll">
            <li class="active"><button type="button">tab1</button></li>
            <li><button type="button">tab2</button></li>
            <li><button type="button">tab3</button></li>
            <li><button type="button">tab4</button></li>
            <li><button type="button">tab5</button></li>
            <li><button type="button">tab6</button></li>
            <li><button type="button">tab7</button></li>
            <li><button type="button">tab8</button></li>
            <li><button type="button">tab9</button></li>
            <li><button type="button">tab10</button></li>
            <li><button type="button">tab11</button></li>
            <li><button type="button">tab12</button></li>
          </ul>
          <section class="tab-conts active">
            tab1
          </section>
          <section class="tab-conts">
            tab2
          </section>
        </div>
        <ul class="tabs-page">
          <li class="active"><a href="#">메뉴1</a></li>
          <li><a href="#">메뉴2</a></li>
        </ul>
      </section>

      <section class="row">
        <h2>texts</h2>
        <p class="texts-info">* 매장 사정에 따라 변동이 있을 수 있으니, 예약 후 받으신 메시지의 번호로 확인 전화 부탁드립니다.</p>
        <ul class="texts-info">
          <li>* 매장 사정에 따라 변동이 있을 수 있으니, 예약 후 받으신 메시지의 번호로 확인 전화 부탁드립니다.</li>
          <li>* 매장 사정에 따라 변동이 있을 수 있으니, 예약 후 받으신 메시지의 번호로 확인 전화 부탁드립니다.</li>
        </ul>
      </section>

      <section class="row">
        <h2>flag</h2>
        <span class="flag-solid1">추천</span>
        <span class="flag-solid2">관심상품</span>
        <span class="flag-solid3">MY</span>
        <span class="flag-solid4">이용중</span>
        <span class="flag-solid5">완료</span>
        <span class="flag-solid6">T 프리미엄 스토어</span>
        <span class="flag-line1">처리업무</span>
        <span class="flag-line2">전문상담업무</span>
        <span class="flag-line3">체험존</span>
        <span class="flag-line4">교육 프로그램</span>
        <span class="flag-solid8">모집중</span>
        <span class="flag-solid9">모집마감</span>
        <span class="flag-solid10">모집예정</span>
        <span class="flag-basic">프로그램</span>
      </section>

      <section class="row">
        <h2>Rating</h2>
        <div class="rate">
          <span class="star-rate"><span style="width:80%;"></span></span>
          <em>평점</em> <strong>4</strong> (<span class="blind">평가 인원</span><span class="num">0</span>명)
        </div>
        <div class="rate">
          <span class="star-rate"><span style="width:70%;"></span></span>
          <em>평점</em> <strong>3.5</strong> (<span class="blind">평가 인원</span><span class="num">0</span>명)
        </div>
      </section>
      <section class="row">
        <h2>swiper</h2>
        <swiper :options="swiperOption" ref="swiper">
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </section>
      <section class="row">
        <h2>multiple swiper</h2>
        <swiper :options="multipleSwiperOption" ref="multipleSwiper">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <section class="row">
        <h2>modal</h2>
        <div class="btn-wrap">
          <button @click="openDynamic" class="btn-line medium">dynamic</button>
          <button @click="openDynamicFull" class="btn-line medium">dynamic full</button>
          <button @click="openAlert" href="#" class="btn-line medium">alert</button>
          <button @click="openConfirm" href="#" class="btn-line medium">confirm</button>
        </div>
      </section>
      <section class="row">
        <h2>loading</h2>
        <div class="btn-wrap">
          <button @click="clickLoading" class="btn-line medium">loading</button>
        </div>
      </section>
      <section class="row">
        <h2>chart</h2>
        <ui-chart
          id="chart"
          :data="[60, 20, 10, 10]"
        ></ui-chart>
      </section>

      <top @complete-scroll="completeScroll"></top>

      <modals-container></modals-container>
      <v-dialog></v-dialog>
    </div>
  </div>
</template>

<script>
import UiSelect from '../ui/UiSelect'
import UiChart from '../ui/UiChart'
import booking from './_guide/Modal'
import Top from '../components/common/Top'

import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

export default {
  name: 'guide',
  components: {
    UiSelect,
    UiChart,
    Top
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          // type: 'progressbar',
          el: '.swiper-pagination',
          clickable: true
          // renderBullet: (index, className) => {
          //   return ''
          // }
        },
        initialSlide: 0,
        speed: 300,
        loop: true,
        // autoplay: {delay: 1000},
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        on: {
          slideChangeTransitionStart: () => {
            if (this.$refs.swiper.swiper) {
              let realIndex = this.$refs.swiper.swiper.realIndex
              this.$refs.multipleSwiper.swiper.slideTo(realIndex)
            }
          },
          slideChange: () => {
            // console.log('slide-change')
          },
          sliderMove: () => {
            // console.log('slide-move')
          },
          slideChangeTransitionEnd: () => {
            // console.log('slide-end')
          },
          touchStart: () => {
            // console.log('touch-start')
          },
          touchEnd: () => {
            // console.log('touch-end')
          },
          resize: () => {
            // console.log('resize')
          },
          observerUpdate: () => {
            // console.log('observer-update')
          }
        }
      },
      multipleSwiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        touchRatio: 0.2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      dateSwiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },
      selectModel: 'value1',
      dateList: [],
      selectDate: this.$moment().format('YYYYMMDD')
    }
  },
  methods: {
    kakaoShare () {
      let Kakao = window.Kakao
      let shareLink = 'https://www.tfactory.co.kr'

      Kakao.Link.createDefaultButton({
        container: '#kakaoShare',
        objectType: 'feed',
        content: {
          title: '제목 입력',
          description: '내용 입력',
          imageUrl: 'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            webUrl: shareLink,
            mobileWebUrl: shareLink
          }
        },
        social: {
          likeCount: 10,
          commentCount: 20,
          sharedCount: 30
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: shareLink,
              mobileWebUrl: shareLink
            }
          },
          {
            title: '앱으로 보기',
            link: {
              webUrl: shareLink,
              mobileWebUrl: shareLink
            }
          }
        ]
      })
    },
    copyLink () {
      let linkUrl = window.document.location.href
      this.$copyText(linkUrl)
      console.log(window.document.location.href)
    },
    completeScroll () {
      console.log('complete-scroll')
    },
    clickLoading () {
      this.$loading.start()
      setTimeout(() => {
        this.$loading.stop()
      }, 1000)
    },
    openDynamic () {
      this.$modal.show(booking, {
        // component props
        test: 'test'
      }, {
        // modal props,
        // clickToClose: true
      }, {
        // event
        'before-open': () => { console.log('before-open') },
        'opened': () => { console.log('opened') },
        'before-close': () => { console.log('before-close') },
        'closed': () => { console.log('closed') },
        'event-test': (e) => { console.log('event-test', e) }
      })
    },
    openDynamicFull () {
      this.$modal.show(booking, {
        // component props,
        test: 'test'
      }, {
        // props
        type: 'full'
      }, {
        // event
        'before-open': () => { console.log('before-open') },
        'opened': () => { console.log('opened') },
        'before-close': () => { console.log('before-close') },
        'closed': () => { console.log('closed') },
        'event-test': (e) => { console.log('event-test', e) }
      })
    },
    openAlert () {
      this.$modal.show('dialog', {
        title: '상담직원 배정이 취소되었습니다.',
        buttons: [
          {
            title: '확인'
          }
        ]
      })
    },
    openConfirm () {
      this.$modal.show('dialog', {
        title: '잠시만요! 상담직원에게 <br> 셀프 플래닝 컨설팅을 받아 보셨나요?',
        text: '셀프 플래닝 내용을 상담직원에게 보여주고 <br> 더 많은 혜택을 받아보세요.',
        buttons: [
          {
            title: '체크아웃',
            class: 'btn-line',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: '상담원 배정',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    },
    changeUiSelect (value) {
      console.log('select value: ', value)
    },
    getDates (startDate, stopDate) {
      let days = ['일', '월', '화', '수', '목', '금', '토']
      let dateArray = []
      let currentDate = this.$moment(startDate)
      stopDate = this.$moment(stopDate)
      while (currentDate <= stopDate) {
        let date = this.$moment(currentDate)
        dateArray.push({
          year: date.year(),
          month: String(date.month() + 1).length === 1 ? '0' + (date.month() + 1) : date.month() + 1,
          date: String(date.date()).length === 1 ? '0' + date.date() : date.date(),
          day: days[date.day()]
        })
        currentDate = this.$moment(currentDate).add(1, 'days')
      }
      return dateArray
    }
  },
  mounted () {
    this.kakaoShare()
  },
  created () {
    /// get date list
    this.dateList = this.getDates(this.$moment(), this.$moment().add(29, 'day'))
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/common.scss';
  .row {
    padding:0 20px;
    h2 {
      position:-webkit-sticky;
      position:sticky;
      top:56px;
      z-index:9;
      margin:0 -20px 24px;
      padding:13px 20px;
      background-color:#fff;
      border-bottom:1px solid #e8e8e8;
      @include font-set20;
      font-weight:$fw-bold;
      text-transform:capitalize;
    }
    .btn-wrap {
      position:relative;
      & + .btn-wrap {
        margin-top:8px;
      }
    }
    .header {
      position:relative;
      z-index:0;
      width:calc(100% + 40px);
      margin:0 -20px;
      & + header {
        margin-top:20px;
      }
    }
    [class*="tabs"] {
      width:calc(100% + 40px);
      margin:0 -20px;
    }
  }
  .swiper-container:not(.datepicker) {
    width: 100%;
    .swiper-slide {
      height:100px;
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .swiper-pagination {
      position:static;
      margin-top:20px;
      font-size:0;
      &-bullet {
        vertical-align:top;
      }
    }
  }

  h3 {
    margin-bottom:12px;
    @include font-set16;
    font-weight:$fw-medium;
    text-transform:capitalize;
    &:nth-of-type(n+2) {
      margin-top:20px;
    }
    &:before {
      content:'* ';
    }
  }
  h4 {
    margin-bottom:8px;
    @include font-set14;
    text-transform:capitalize;
    &:nth-of-type(n+2) {
      margin-top:12px;
    }
    &:before {
      content:'- ';
    }
  }
</style>
