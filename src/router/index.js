import Vue from 'vue'
import Router from 'vue-router'

import pagelist from '../pages/_pagelist'
import guide from '../pages/_guide'

// 확인용
import AllMenuConfirm from '../pages/_confirmation/page-all-menu'
import AllMenuLoginConfirm from '../pages/_confirmation/page-all-menu-login'
import WishNoneConfirm from '../pages/_confirmation/page-wish-none'
import BookingNone from '../pages/_confirmation/page-booking-none'
import BookingInfoLogout from '../pages/_confirmation/page-booking-info-logout'
import FaqNone from '../pages/_confirmation/page-faq-none'
import CounselorComplete from '../pages/_confirmation/page-counselor-complete'
import MainIsLogin from '../pages/_confirmation/page-main-login'
import PayNone from '../pages/_confirmation/page-pay-none'
import BookingListNone from '../pages/_confirmation/page-booking-list-none'
import SettingLogout from '../pages/_confirmation/page-setting-logout'
import ProductButtonCase from '../pages/_confirmation/page-product-button-case'

// comm
import Error400 from '../pages/error/page-error400'
import Error500 from '../pages/error/page-error500'
import SystemCheck from '../pages/error/page-system-check'

// main
import Main from '../pages/page-main'
import MainLogin from '../pages/main/page-main-login'
import MainAppDown from '../pages/main/page-main-appdown'

// mytag
import MyTagLogin from '../pages/mytag/page-tag-login'
import MyTagCertify from '../pages/mytag/page-tag-certify'
import MyTagReissue from '../pages/mytag/page-tag-reissue'
import MyTagServey from '../pages/mytag/page-tag-survey'
import MyTagMms from '../pages/mytag/page-tag-mms'
import MyTagAdditional from '../pages/mytag/page-tag-additional'

// prd
import Product from '../pages/product/page-product'
import Experience from '../pages/product/page-experience'

// pay
import PayLogin from '../components/pay/ModalPayLogin'
import Pay from '../pages/pay/page-pay'
import PayComplete from '../pages/pay/page-pay-complete'
import PayFail from '../pages/pay/page-pay-fail'

// sev
import ProgramSurvey from '../pages/service/page-program-survey'
import Application from '../pages/service/page-application'
import ApplicationSurvey from '../pages/service/page-application-survey'
import ApplicationComplete from '../pages/service/page-application-complete'
import Booking from '../pages/service/page-booking'
import BookingDate from '../pages/service/page-booking-date'
import BookingInfo from '../pages/service/page-booking-info'
import BookingSurvey from '../pages/service/page-booking-survey'
import BookingSurveyComplete from '../pages/service/page-booking-survey-complete'
import BookingComplete from '../pages/service/page-booking-complete'
import ReadMap from '../components/service/booking/ModalReadMap'
import Counselor from '../pages/service/page-counselor'
import Faq from '../pages/service/page-faq'
import Consult from '../pages/service/page-consult'
import ConsultComplete from '../pages/service/page-consult-complete'

// my
import Wish from '../pages/mypage/page-wish'
import MyPayList from '../pages/mypage/page-pay-list'
import PayReceipt from '../components/mypage/ModalPayReceipt'
import MyBookingInquiry from '../pages/mypage/page-booking-inquiry'
import MyBookingList from '../pages/mypage/page-booking-list'
import MyBookingDetail from '../pages/mypage/page-booking-detail'
import MyBookingModify from '../pages/mypage/page-booking-modify'
import MyBookingSurvey from '../pages/mypage/page-booking-survey'
import MyBookingComplete from '../pages/mypage/page-booking-complete'
import Checkin from '../pages/mypage/page-checkin'
import CheckinModify from '../pages/mypage/page-checkin-modify'
import CheckinRegister from '../pages/mypage/page-checkin-register'
import MyCouponList from '../pages/mypage/page-coupon-list'
import MyApplicationModify from '../pages/mypage/page-application-modify'
import SatisfactionSurvey from '../pages/mypage/page-satisfaction-survey'

// sso
import Login from '../pages/sso/page-login'
import Kiosk from '../pages/sso/page-kiosk'
import Success from '../pages/sso/page-success'
import Certify from '../pages/sso/page-certify'
import DTLogin from '../pages/sso/page-dt-cert'
import Inactive from '../pages/sso/page-inactive'

// shop
import ShopList from '../pages/shop/page-shop'
import ShopDetail from '../pages/shop/page-shop-detail'

// etc
import FamilySite from '../pages/etc/page-family-site'
import CorpInfo from '../pages/etc/page-corp-info'
import Setting from '../pages/etc/page-setting'
import Member from '../pages/etc/page-member'
import Terms from '../pages/etc/page-terms'
import Leave from '../pages/etc/page-leave'
import LeaveComplete from '../pages/etc/page-leave-complete'
import PolicyPrivacyUse from '../pages/etc/page-policy-use'
import PolicyBio from '../pages/etc/page-policy-bio'
import PolicyPrivacy from '../pages/etc/page-policy-privacy'
import PolicyPrivacyOpt from '../pages/etc/page-policy-privacy-opt'
import PolicyService from '../pages/etc/page-policy-service'
import PolicyConflict from '../pages/etc/page-conflict-process'
import Combine from '../pages/etc/page-combine'
import CombineCertify from '../pages/etc/page-combine-certify'
import Join from '../pages/etc/page-join'
import JoinNumber from '../pages/etc/page-join-number'
import JoinCertify from '../pages/etc/page-join-certify'
import LineInfo from '../pages/etc/page-line-info'
import Qrcode from '../pages/etc/page-qrcode'

// event
import EventList from '../pages/event/page-event-list'
import EventView from '../pages/event/page-event-view'

// test
import TestFaceVerify from '../pages/page-test-verify'

import Redirect from '../pages/page-redirect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {path: '/', redirect: {name: 'Main'}},

    {path: '/pagelist', name: 'pagelist', component: pagelist},
    {path: '/guide', name: 'guide', component: guide},

    // 확인용
    {path: '/confirm/allmenu', name: 'AllMenuConfirm', component: AllMenuConfirm}, // 전체메뉴
    {path: '/confirm/allmenulogin', name: 'AllMenuLoginConfirm', component: AllMenuLoginConfirm}, // 전체메뉴 - 로그인
    {path: '/confirm/wishnone', name: 'WishNoneConfirm', component: WishNoneConfirm}, // 관심상품 none
    {path: '/confirm/:type/none', name: 'BookingNone', component: BookingNone}, // 프로그램, 체험존, 상담 예약
    {path: '/confirm/readmap', name: 'ReadMap', component: ReadMap}, // 지도보기
    {path: '/confirm/faqnone', name: 'FaqNone', component: FaqNone}, // 이용안내 none
    {path: '/confirm/infologout', name: 'BookingInfoLogout', component: BookingInfoLogout}, // 이용안내 none
    {path: '/confirm/counselorcomplete', name: 'CounselorComplete', component: CounselorComplete}, // 상담원 호출
    {path: '/confirm/paylogin', name: 'PayLogin', component: PayLogin}, // 구매 로그인
    {path: '/confirm/main', name: 'MainIsLogin', component: MainIsLogin}, // 메인 로그인
    {path: '/confirm/receipt', name: 'PayReceipt', component: PayReceipt}, // 영수증
    {path: '/confirm/paylistnone', name: 'PayNone', component: PayNone}, // 구매내역 none
    {path: '/confirm/bookinglistnone', name: 'BookingListNone', component: BookingListNone}, // 서비스 예약 내역 none
    {path: '/confirm/settinglogout', name: 'SettingLogout', component: SettingLogout}, // 설정
    {path: '/confirm/productbuttoncase', name: 'ProductButtonCase', component: ProductButtonCase}, // 설정
    {path: '/confirm/mytag/servey', name: 'MyTagServey', component: MyTagServey}, // My Tag 만들기

    // comm
    {path: '/error/400', name: 'Error400', component: Error400}, // 400 에러
    {path: '/error/500', name: 'Error500', component: Error500}, // 500 에러
    {path: '/error/check', name: 'SystemCheck', component: SystemCheck}, // 시스템점검

    // main
    {path: '/main/:menu', name: 'Main', component: Main}, // 메인, //store, program, qr, mytag
    {path: '/mainlogin', name: 'MainLogin', component: MainLogin}, // 메인 로그인유도
    {path: '/mainappdown', name: 'MainAppDown', component: MainAppDown}, // 메인 앱다운로드

    // my tag
    {path: '/mytag/login', name: 'MyTagLogin', component: MyTagLogin}, // my tag 로그인
    {path: '/mytag/certify/:mdn', name: 'MyTagCertify', component: MyTagCertify}, // my tag 인증
    {path: '/mytag/reissue', name: 'MyTagReissue', component: MyTagReissue}, // my tag 재발급
    {path: '/mytag/mms/:mdn', name: 'MyTagMms', component: MyTagMms}, // mms 접근
    {path: '/mytag/additional', name: 'MyTagAdditional', component: MyTagAdditional}, // 부가서비스

    // prd
    {path: '/prd/:productId?', name: 'Product', component: Product}, // 상품상세
    {path: '/experience', name: 'Experience', component: Experience}, // 상품상세 - 체험존
    {path: '/experience/:programId', name: 'InProgressProgram', component: Experience}, // 진행중인 프로그램

    // pay
    {path: '/pay', name: 'Pay', component: Pay}, // 구매 상세
    {path: '/pay/complete', name: 'PayComplete', component: PayComplete}, // 구매 완료
    {path: '/pay/complete/vm', name: 'PayCompleteVm', component: PayComplete}, // 구매 완료 (밴딩머신)
    {path: '/pay/fail', name: 'PayFail', component: PayFail}, // 결제 실패

    // sev
    {path: '/sev/booking/:type', name: 'Booking', component: Booking}, // 프로그램, 체험존, 상담 예약 - type: program, experience, counseling
    {path: '/sev/booking/:type/date/:selectType', name: 'BookingDate', component: BookingDate}, // 예약 일자
    {path: '/sev/booking/:type/complete', name: 'BookingComplete', component: BookingComplete}, // 예약 완료
    {path: '/sev/booking/:type/info', name: 'BookingInfo', component: BookingInfo}, // 신청 정보
    {path: '/sev/booking/:type/survey', name: 'Survey', component: BookingSurvey}, // 기초 설문
    {path: '/sev/booking/:type/surveycomplete', name: 'SurveyComplete', component: BookingSurveyComplete}, // 기초 설문
    {path: '/sev/counselor', name: 'Counselor', component: Counselor}, // 상담원 호출
    {path: '/sev/faq', name: 'faq', component: Faq}, // 이용 안내
    {path: '/sev/consult', name: 'Consult', component: Consult}, // 상담 신청하기
    {path: '/sev/consult/complete', name: 'ConsultComplete', component: ConsultComplete}, // 상담 신청 완료
    // sev - 프로그램
    {path: '/sev/application', name: 'Application', component: Application}, // 신청
    {path: '/sev/applicationSurvey', name: 'ApplicationSurvey', component: ApplicationSurvey}, // 신청 설문 조사
    {path: '/sev/applicationComplete', name: 'ApplicationComplete', component: ApplicationComplete}, // 신청 완료
    {path: '/sev/programSurvey', name: 'ProgramSurvey', component: ProgramSurvey}, // 프로그램 서베이

    // my
    {path: '/my/wish', name: 'Wish', component: Wish}, // 관심상품
    {path: '/my/paylist', name: 'MyPayList', component: MyPayList}, // 구매내역
    {path: '/my/booking/inquiry', name: 'MyBookingInquiry', component: MyBookingInquiry}, // 비회원 예약 조회
    {path: '/my/booking/list', name: 'MyBookingList', component: MyBookingList}, // 예약 내역
    {path: '/my/booking/:type/detail/:status', name: 'MyBookingDetail', component: MyBookingDetail}, // 예약 상세
    {path: '/my/booking/:type/modify', name: 'MyBookingModify', component: MyBookingModify}, // 예약 수정
    {path: '/my/booking/:type/survey', name: 'MyBookingSurvey', component: MyBookingSurvey}, // 기초 설문
    {path: '/my/booking/:type/complete', name: 'MyBookingComplete', component: MyBookingComplete}, // 예약 완료
    {path: '/my/checkin', name: 'Checkin', component: Checkin}, // 빠른 체크인 등록
    {path: '/my/modify', name: 'CheckinModify', component: CheckinModify}, // 빠른 체크인 수정
    {path: '/my/register', name: 'CheckinRegister', component: CheckinRegister}, // 빠른 체크인 얼굴 등록
    {path: '/my/coupon', name: 'MyCouponList', component: MyCouponList}, // 쿠폰 관리
    {path: '/my/satisfaction', name: 'SatisfactionSurvey', component: SatisfactionSurvey}, // 만족도 조사
    // sev - 프로그램 신청 수정
    {path: '/my/applicationModify', name: 'MyApplicationModify', component: MyApplicationModify}, // 예약 수정

    // sso
    {path: '/sso/login', name: 'Login', component: Login}, // 로그인
    {path: '/sso/kiosk', name: 'Kiosk', component: Kiosk}, // kiosk 로그인
    {path: '/sso/success', name: 'Success', component: Success}, // kiosk 로그인 성공
    {path: '/sso/certify', name: 'Certify', component: Certify}, // 빠른 체크인
    {path: '/sso/dt', name: 'DTLogin', component: DTLogin}, // 빠른 체크인
    {path: '/sso/inactive', name: 'Inactive', component: Inactive}, // 휴면계정

    // shop
    {path: '/shop/list', name: 'Shop', component: ShopList}, // 매장찾기
    {path: '/shop/detail', name: 'ShopDetail', component: ShopDetail}, // 매장찾기 상세
    {path: '/shop/detail/:storeId', name: 'StoreDetail', component: ShopDetail}, // 스토어 상세

    // etc
    {path: '/familysite', name: 'FamilySite', component: FamilySite}, // 패밀리 사이트
    {path: '/corpinfo', name: 'CorpInfo', component: CorpInfo}, // 패밀리 사이트
    {path: '/setting', name: 'Setting', component: Setting}, // 설정
    {path: '/member', name: 'Member', component: Member}, // 회원관리
    {path: '/terms', name: 'Terms', component: Terms}, // 약관 상세
    {path: '/leave', name: 'Leave', component: Leave}, // 회원 탈퇴
    {path: '/leave/complete', name: 'LeaveComplete', component: LeaveComplete}, // 회원 탈퇴 완료
    {path: '/policy/privacyuse', name: 'PolicyPrivacyUse', component: PolicyPrivacyUse}, // 이용안내(footer)
    {path: '/policy/bio', name: 'PolicyBio', component: PolicyBio}, // 생체(얼굴)정보 수집이용 동의
    {path: '/policy/privacy', name: 'PolicyPrivacy', component: PolicyPrivacy}, // 임시회원 개인정보 수집이용 동의 (필수동의)
    {path: '/policy/privacyopt', name: 'PolicyPrivacyOpt', component: PolicyPrivacyOpt}, // 개인정보 수집이용 동의 (선택동의)
    {path: '/policy/service', name: 'PolicyService', component: PolicyService}, // 서비스 이용약관_인스턴트바이 반영
    {path: '/policy/conflict', name: 'PolicyConflict', component: PolicyConflict}, // 서비스 이용약관_인스턴트바이 반영
    {path: '/combine', name: 'Combine', component: Combine}, // 회원 정보 통합
    {path: '/combine/certify', name: 'CombineCertify', component: CombineCertify}, // 회원 정보 통합 - 인증 번호
    {path: '/join', name: 'Join', component: Join}, // 회원 가입
    {path: '/join/number', name: 'JoinNumber', component: JoinNumber}, // 회원 가입 - 인증 번호
    {path: '/join/certify', name: 'JoinCertify', component: JoinCertify}, // 회원 가입 - 인증 번호
    {path: '/lineinfo', name: 'LineInfo', component: LineInfo}, // 회선 정보 관리
    {path: '/qrcode', name: 'Qrcode', component: Qrcode}, // Qrcode

    // event
    {path: '/event/list', name: 'EventList', component: EventList}, // 목록
    {path: '/event/view/:type', name: 'EventView', component: EventView}, // 상세

    // test
    {path: '/test/verify', name: 'TestFaceVerify', component: TestFaceVerify},

    {path: '/redirect', name: 'Redirect', component: Redirect}

  ]
})
