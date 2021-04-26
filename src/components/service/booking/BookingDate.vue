<template src="../../../assets/html/service/booking/booking-date.html"></template>

<script>
import UiSelect from '../../../ui/UiSelect'
import ModalReadMap from './ModalReadMap'
import timezone from 'moment-timezone'
import Consult from '../Consult'
import ModalConsign from './ModalConsign' // 08.19 개인정보취급위탁 추가

import * as STORE from '../../../js/store.js'
import _ from 'lodash'

export default {
  name: 'BookingDate',
  mixins: [Consult],
  components: {
    UiSelect,
    ModalConsign // 08.19 개인정보취급위탁 추가
  },
  props: {
    bookingType: String,
    selectType: String
  },
  data () {
    return {
      storeId: this.$route.query.store_id,
      classId: this.$route.query.classId,
      selectedService: this.$route.query.selectedService,
      storeInfo: {},
      storeImageUrl: '',
      counselingList: [],
      counselingListName: [],
      contactNumber: '',
      counseling: {},
      isModify: false,
      days: [this.$t('sev.sun'), this.$t('sev.mon'), this.$t('sev.tue'), this.$t('sev.wed'), this.$t('sev.thu'), this.$t('sev.fri'), this.$t('sev.sat')],
      dateList: [],
      timeList: [],
      programList: [],
      programTimeList: [{text: '날짜/시간을 선택해주세요.', value: 'value0', selected: true}],
      HHforNow: 0,
      accordionData: [{}],
      isActiveAccordion: [false],
      selectedTime: '',
      selectedTimeList: [],
      selectedProgram: '',
      selectedDate: '',
      selectedDateText: '',
      modifyScheduleId: 0,
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },
      bookingModify: false,
      isSurvey: false,
      applicationType: ''
    }
  },
  mounted () {
    if (this.storeId) {
      this.setStoreInfo()
    }

    if (this.selectedService) {
      this.setCounselingInfo()
    }

    if (this.bookingType === 'program' && this.classId) {
      this.getProgramClass(this.classId)
    }

    this.HHforNow = timezone().tz('Asia/Seoul').format('HH')
    this.dateList = this.getDates(this.$moment(), this.$moment().add(29, 'day'))
  },
  methods: {
    openModal () {
      this.$modal.show(ModalConsign, {}, {type: 'full'}, {
        'before-open': () => { console.log('before-open') },
        'opened': () => { console.log('opened') },
        'before-close': () => { console.log('before-close') },
        'closed': () => { console.log('closed') },
        'event-test': (e) => { console.log('event-test', e) }
      })
    },
    // --- program
    getProgramClass (classId) {
      STORE.getProgramClass(classId).then(result => {
        this.selectedService = result['PROGRAM_CLASS']
        this.isSurvey = this.selectedService['SURVEY_YN']
        this.applicationType = this.selectedService['BOOKING_TYPE']
        this.getProgramList(classId)
      })
    },
    getProgramList (classId) {
      STORE.getProgramTimeTable(this.storeId, classId).then(result => {
        this.scheduleList = result['SCHEDULE_LIST']
        _.forEach(this.dateList, date => {
          date.disabled = true
          this.scheduleList.forEach(program => {
            if (this.$moment(program['START_YMDT']).format('MMDD') === date.month + date.date) {
              date.disabled = false
            }
          })
        })
        this.selectedDate = this.$moment(this.scheduleList[0]['START_YMDT']).format('YYYY.MM.DD')
        this.$forceUpdate()
        this.$nextTick(() => {
          this.changeProgramDate(this.selectedDate)
        })
      })
    },
    changeProgramDate (date) {
      let moment = this.$moment(date.replace(/\./g, ''))
      this.selectedDateText = (moment.month() + 1) + this.$t('sev.month') + ' ' + String(moment.date()) + this.$t('sev.date') + ' ' + this.days[moment.day()] + this.$t('sev.day')

      this.programList = []
      _.forEach(this.scheduleList, (program, index) => {
        if (this.selectedDate === this.$moment(program.START_YMDT).format('YYYY.MM.DD')) {
          program.START_TIME = this.$moment(program.START_YMDT).format('HH:mm')
          program.isBooked = this.ALREADY_BOOKED
          if (parseInt(program.CAPACITY) <= parseInt(program.BOOKING_COUNT)) {
            program.disabled = true
          }
          if (program.ALREADY_BOOKED) {
            program.isBooked = true
          }
          this.programList[index] = program
        }
      })
    },
    changeProgram (program) {
      if (program.isBooked) {
        this.alertExperienceOnceToday()
        this.$nextTick(() => {
          this.selectedProgram = null
        })
      }
    },
    // program --- //
    nextButton () {
      // 방문 목적을 선택해주세요.
      if (!this.selectedService) {
        this.alertSelectService()
        return
      }

      // 예약 정보를 연락처로 보내드립니다. 연락처를 입력해주세요.
      if (!this.contactNumber || this.contactNumber.length < 7) {
        this.alertContactNumber()
        return
      }

      if (this.bookingType === 'counseling') {
        /** counseling **********************************************************************************/

        // 예약 날짜/시간을 선택해주세요.
        if (!this.selectedTime) {
          this.alertSelectTime()
          return
        }

        if (this.selectedTime === 'BOOKED') {
          // 같은 시간대에 예약 내역이 존재합니다.
          this.alertCounselingOnceToday()
          return
        }

        this.$store.state.constants.COUNSELING_MODIFY.MODIFY_FLAG = this.$route.path.includes('modify')
        this.$store.state.constants.COUNSELING = {
          'STORE_ID': this.storeId,
          'DAY': (this.selectedDate).split('.').join('-'),
          'TIMETABLE_ID': this.selectedTime,
          'COUNSELING_ID': this.selectedService,
          'MDN': this.contactNumber
        }
        this.next(this.bookingType)
      } else if (this.bookingType === 'program') {
        /** program **********************************************************************************/

        // 예약 날짜/시간을 선택해주세요.
        if (!this.selectedProgram) {
          this.alertSelectTime()
          return
        }

        let bookInfo = {
          'PROGRAM_SCHEDULE_ID': this.selectedProgram,
          'USER_NAME': this.$cookies.get('MY_INFO').NAME,
          'USER_PHONE_NUMBER': '010' + this.contactNumber
        }

        if (this.$route.path.includes('modify')) {
          bookInfo.BOOK_ID = parseInt(this.$route.query.book_id)
          if (this.isSurvey) {
            sessionStorage.setItem('scheduleId', this.selectedProgram)
            sessionStorage.setItem('contactNumber', '010' + this.contactNumber)
            this.$router.push('/sev/programSurvey?type=basic&store_id=' + this.storeId + '&classId=' + this.classId + '&bookId=' + bookInfo.BOOK_ID)
          } else {
            STORE.modifyProgram(bookInfo).then(result => {
              this.next(this.bookingType, result.BOOK_ID)
            }).catch(() => {
              this.alretError()
            })
          }
        } else {
          bookInfo.STORE_ID = parseInt(this.storeId)
          if (this.selectedService.SURVEY_YN) {
            sessionStorage.setItem('scheduleId', this.selectedProgram)
            sessionStorage.setItem('contactNumber', '010' + this.contactNumber)
            this.$router.push('/sev/programSurvey?type=basic&store_id=' + this.storeId + '&classId=' + this.classId)
          } else {
            STORE.bookProgram(bookInfo).then(result => {
              this.$router.push('/sev/booking/program/complete?PROGRAM_BOOK_ID=' + result.BOOK_ID)
            }).catch(() => {
              this.alretError()
            })
          }
        }
      }
    },
    next (type, bookID) {
      let url = '/sev/booking/' + type
      if (type === 'program') {
        url += '/complete?PROGRAM_BOOK_ID=' + bookID
        this.$router.push(url)
      } else if (type === 'experience') {
        url += '/complete'
      } else if (type === 'counseling') {
        url += '/survey'
        this.$router.push(url)
      }
    },
    setUserInfo () {
      let myInfo = this.$cookies.get('MY_INFO')
      myInfo.LINE_LIST.forEach(line => {
        if (line.SERVICE_MGMT_NUMBER === sessionStorage.getItem('SVC_NUM')) {
          this.contactNumber = line.MDN.slice(3)
        }
      })
    },
    setStoreInfo () {
      STORE.getStoreInfo(this.storeId).then(result => {
        this.storeInfo = result.STORE
        if (this.storeInfo.IMAGES) {
          this.storeImageUrl = 'url(' + JSON.parse(this.storeInfo.IMAGES)[0] + ')'
        } else {
          this.storeImageUrl = 'url(' + require('@/assets/images/dummy/@img_shop.jpg') + ')'
        }
      })
      if (this.bookingType === 'counseling') {
        this.getCounselingList()
        this.selectDate(this.selectedDate)
      }
    },
    setCounselingInfo () {
      STORE.getCounselingList().then(result => {
        result.COUNSELING_LIST.forEach(counseling => {
          if (counseling.COUNSELING_ID.toString() === this.$route.query.selectedService) {
            this.counseling = counseling
          }
        })
      })
    },
    clickModify () {
      this.isModify = !this.isModify ? Boolean(true) : Boolean(false)
      this.isTimeout = true
      this.contactNumber = ''
      this.certificationNumber = ''
    },
    getDates (startDate, stopDate) {
      let dateArray = []
      let currentDate = this.$moment(startDate)
      stopDate = this.$moment(stopDate)
      while (currentDate <= stopDate) {
        let date = this.$moment(currentDate)
        dateArray.push({
          year: date.year(),
          month: String(date.month() + 1).length === 1 ? '0' + (date.month() + 1) : date.month() + 1,
          date: String(date.date()).length === 1 ? '0' + date.date() : date.date(),
          day: this.days[date.day()]
        })
        currentDate = this.$moment(currentDate).add(1, 'days')
      }
      return dateArray
    },
    clickReadMap () {
      this.$modal.show(ModalReadMap, {}, {
        type: 'full'
      }, {})
    },
    selectDate (date) {
      let moment = this.$moment(date.replace(/\./g, ''))
      this.selectedDateText = (moment.month() + 1) + this.$t('sev.month') + ' ' + String(moment.date()) + this.$t('sev.date') + ' ' + this.days[moment.day()] + this.$t('sev.day')

      STORE.getAvailableDate(this.storeId, date.split('.').join('-')).then(result => {
        this.setTimeTable(result)
      })
    },
    selectTime (isBooked) {
      if (isBooked) {
        // 같은 시간대에 예약 내역이 존재합니다.
        this.alertCounselingOnceToday()
        this.selectedTime = 'BOOKED'
      }
    },
    setTimeTable (table) {
      this.timeList = table.SLOT_LIST
      this.timeList.forEach((time) => {
        let timeDuration = {
          'START_TIME': time.START_TIME,
          'END_TIME': time.END_TIME
        }
        this.selectedTimeList[time.TIMETABLE_ID] = timeDuration

        let tempTime = time.START_TIME.slice(0, 2).concat(time.START_TIME.slice(3, 5))
        if (this.selectedDate === this.$moment().format('YYYY.MM.DD')) {
          if (parseInt(timezone().tz('Asia/Seoul').add(70, 'm').format('HHmm')) >= parseInt(tempTime)) {
            time.disabled = true
          }
          if (parseInt(timezone().tz('Asia/Seoul').format('HHmm')) > 2250) {
            time.disabled = true
          }
        }

        if (time.CAPACITY <= time.BOOKING_COUNT) {
          time.disabled = true
        }
        if (time.ALREADY_BOOKED) {
          time.isBooked = true
        }
      })
    },
    getCounselingList () {
      STORE.getCounselingListForStore(this.storeId).then(result => {
        result.STORE_COUNSELING_LIST.forEach(type => {
          this.counselingListName[type.COUNSELING_ID] = type.NAME
          let counseling = {
            text: type.NAME,
            value: type.COUNSELING_ID
          }
          this.counselingList.push(counseling)
        })
      })
    },
    activeAccordion (idx) {
      this.isActiveAccordion = this.isActiveAccordion.map((val, index) => {
        if (idx === index) {
          val = (val === true) ? Boolean(false) : Boolean(true)
        } else {
          val = false
        }
        return val
      })
    },
    getExperienceList () {
      // FIXME
      let counseling = {
        text: '체험존 1',
        value: 999999999
      }
      this.counselingList.push(counseling)
    },
    readTerm () {
      this.$router.push({name: 'Terms'})
    },
    alertSelectService () {
      // 방문 목적을 선택해주세요.
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-select-booking-service'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertSelectTime () {
      // 예약 날짜/시간을 선택해주세요.
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-select-booking-date'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertCounselingOnceToday () {
      // 같은 시간대에 예약 내역이 존재합니다.
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-counseling-once-today'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertContactNumber () {
      // 예약 정보를 연락처로 보내드립니다. 연락처를 입력해주세요.
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-contact-number'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertCertificationAgree () {
      // 필수 약관에 동의해주세요.
      return new Promise(resolve => {
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-certification-agree'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertExperienceOnceToday () {
      return new Promise(resolve => {
        // 해당 시간에 신청 내역이 있습니다.
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-experience-once-today'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alertAnotherTime () {
      return new Promise(resolve => {
        // 해당 시간에 신청이 불가능 합니다. 다른 시간을 선택 해주세요.
        this.$modal.show('dialog', {
          title: this.$t('sev.alert-choose-another-time'),
          buttons: [{
            title: this.$t('comm.confirm'),
            handler: () => {
              resolve()
              this.$modal.hide('dialog')
            }
          }]
        })
      })
    },
    alretError () {
      this.$modal.show('dialog', {
        title: `오류가 발생했습니다.<br>관리자에게 문의해주세요.`,
        buttons: [{
          title: '확인',
          handler: () => {
            this.$modal.hide('dialog')
            this.$router.push(this.selectedService['PROGRAM_CLASS_LINK_URL'] + '?classId=' + this.classId)
          }
        }]
      })
    }
  },
  filters: {
    mdnFilter (data) {
      let mdn = data.replace(/[^0-9]/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3').replace('--', '-')
      return mdn
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
