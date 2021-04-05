<template src="../../../assets/html/service/booking/booking-date.html"></template>

<script>
import UiSelect from '../../ui/UiSelect'
import ModalReadMap from './booking/ModalReadMap'
import timezone from 'moment-timezone'
import Consult from './Consult'
import ModalConsign from './booking/ModalConsign' // 08.19 개인정보취급위탁 추가

import * as STORE from '../../js/store.js'
import * as TID from '../../js/tid.js'
import * as USER from '../../js/user.js'

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
      storeInfo: {},
      storeID: 0,
      storeImageUrl: '',
      counselingList: [],
      counselingListName: [],
      contactNumber: '',
      counseling: {},
      isModify: false,
      days: [this.$t('sev.sun'), this.$t('sev.mon'), this.$t('sev.tue'), this.$t('sev.wed'), this.$t('sev.thu'), this.$t('sev.fri'), this.$t('sev.sat')],
      dateList: [],
      timeList: [],
      programTimeList: [{text: '날짜/시간을 선택해주세요.', value: 'value0', selected: true}],
      HHforNow: 0,
      accordionData: [{}],
      isActiveAccordion: [false],
      selectedService: '',
      selectedTime: '',
      selectedTimeList: [],
      selectedProgram: '',
      selectedDate: this.$moment().format('YYYY.MM.DD'),
      selectedDateText: this.$moment().format('YYYY.MM.DD'),
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  },
  mounted () {
    /** ******* T world 예약 관련 ******* */
    /** ************** */

    if (this.$route.query.sso_login_id) {
      sessionStorage.setItem('SVC_NUM', this.$route.query.svc_num)
      localStorage.setItem('STORE_CODE', this.$route.query.store_code)
      let callback = window.location.origin + window.location.pathname
      TID.loginRedirectSso(this.$route.query.sso_login_id, callback)
    }

    if (this.$route.query.id_token) {
      USER.signInOrUpTID(this.$route.query).then(result => {
        if (result.RET_CODE === 0) {
          this.$cookies.set('USER_AUTH', result)
          this.setUserInfo()
          STORE.getStoreId(localStorage.getItem('STORE_CODE')).then(storeId => {
            this.storeID = storeId
            this.setStoreInfo()
          })
        } else {
          this.$router.push({name: 'Error500'})
        }
      })
    }
    /** ************** */
    /** ************** */

    if (this.$route.query.store_id) {
      this.storeID = this.$route.query.store_id
      this.setStoreInfo()
    }
    if (this.$route.query.selectedService) {
      this.setCounselingInfo()
    }

    if (this.$props.bookingType === 'program' && this.$route.query.classId) {
      this.getProgramClass(this.$route.query.classId)
    }

    this.selectedService = this.$route.query.selectedService
    this.HHforNow = timezone().tz('Asia/Seoul').format('HH')
    this.dateList = this.getDates(this.$moment(), this.$moment().add(29, 'day'))
  },
  methods: {
    openModal () {
      this.$modal.show(ModalConsign, {
        test: 'test'
      }, {
        type: 'full'
      }, {
        'before-open': () => { console.log('before-open') },
        'opened': () => { console.log('opened') },
        'before-close': () => { console.log('before-close') },
        'closed': () => { console.log('closed') },
        'event-test': (e) => { console.log('event-test', e) }
      })
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
      STORE.getStoreInfo(this.storeID).then(result => {
        this.storeInfo = result.STORE
        if (this.storeInfo.IMAGES) {
          this.storeImageUrl = 'url(' + JSON.parse(this.storeInfo.IMAGES)[0] + ')'
        } else {
          this.storeImageUrl = 'url(' + require('@/assets/images/dummy/@img_shop.jpg') + ')'
        }
      })

      this.selectDate(this.selectedDate)

      if (this.bookingType === 'counseling') {
        this.getCounselingList()
      }
      if (this.bookingType === 'experience') {
      }
      if (this.selectType === 'service') {
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
    getProgramClass (classId) {
      STORE.getProgramClass(classId).then(result => {
        this.selectedService = result.PROGRAM_CLASS
        this.getProgramTimetable(classId, result.PROGRAM_CLASS.PROGRAM_CLASS_CAN_BE_USED_TIME)
      })
    },
    getProgramTimetable (classId, canBeUsedTime) {
      STORE.getProgramTimeTable(this.$route.query.store_id, classId).then(result => {
        result.SCHEDULE_LIST.forEach(schedule => {
          let OVER_BOOKED = false
          if (schedule.BOOKING_COUNT === schedule.CAPACITY) {
            OVER_BOOKED = true
          }

          let timeText = ''
          if (canBeUsedTime) {
            timeText = this.$moment(schedule.START_YMDT).format('YYYY.MM.DD(ddd) HH:mm') + '-' + this.$moment(schedule.END_YMDT).format('HH:mm') +
              ' (' + schedule.BOOKING_COUNT + '/' + schedule.CAPACITY + ')'
          } else {
            timeText = this.$moment(schedule.START_YMDT).format('YYYY.MM.DD(ddd)') + ' (' + schedule.BOOKING_COUNT + '/' + schedule.CAPACITY + ')'
          }

          let time = {
            text: timeText,
            value: {
              ID: schedule.PROGRAM_SCHEDULE_ID,
              ALREADY_BOOKED: schedule.ALREADY_BOOKED,
              OVER_BOOKED: OVER_BOOKED
            }
          }
          this.programTimeList.push(time)
        })
      })
    },
    clickModify () {
      this.isModify = !this.isModify ? Boolean(true) : Boolean(false)
      this.isTimeout = true
      this.contactNumber = ''
      this.certificationNumber = ''
      this.clearTimer()
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
    clickChangeShop () {
      console.log('TODO - 매장 변경')
    },
    clickReadMap () {
      this.$modal.show(ModalReadMap, {}, {
        type: 'full'
      }, {})
    },
    selectDate (date) {
      let moment = this.$moment(date.replace(/\./g, ''))
      this.selectedDateText = (moment.month() + 1) + this.$t('sev.month') + ' ' + String(moment.date()) + this.$t('sev.date') + ' ' + this.days[moment.day()] + this.$t('sev.day')

      STORE.getAvailableDate(this.storeID, date.split('.').join('-'))
        .then(result => {
          this.setTimeTable(result)
        })
    },
    selectTime (isBooked) {
      if (isBooked) {
        this.alertCounselingOnceToday()
        this.selectedTime = 'BOOKED'
      }
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
    clickMyLocation () {
    },
    clickMore () {
    },
    nextButton () {
      if (!this.selectedService) {
        this.alertSelectService()
        return
      }
      if (!this.contactNumber || this.contactNumber.length !== 8) {
        this.alertContactNumber()
        return
      }

      if (this.$props.bookingType === 'counseling') {
        if (this.selectedTime === 'BOOKED') {
          this.alertCounselingOnceToday()
          return
        }

        if (!this.selectedTime) {
          this.alertSelectTime()
          return
        }

        this.$store.state.constants.COUNSELING_MODIFY.MODIFY_FLAG = this.$route.path.includes('modify')
        this.$store.state.constants.COUNSELING = {
          'STORE_ID': this.storeID,
          'DAY': (this.selectedDate).split('.').join('-'),
          'TIMETABLE_ID': this.selectedTime,
          'COUNSELING_ID': this.selectedService,
          'MDN': this.contactNumber
        }
        this.next(this.bookingType)
      }

      if (this.$props.bookingType === 'program') {
        if (this.selectedProgram === 'value0') {
          this.alertSelectTime()
          return
        }

        let bookInfo = {}

        if (this.$route.path.includes('modify')) {
          bookInfo = {
            'BOOK_ID': parseInt(this.$route.query.book_id),
            'PROGRAM_SCHEDULE_ID': this.selectedProgram.ID,
            'USER_NAME': this.$cookies.get('MY_INFO').NAME,
            'USER_PHONE_NUMBER': '010' + this.contactNumber
          }
          STORE.modifyProgram(bookInfo).then(result => {
            this.next(this.bookingType, result.BOOK_ID)
          })
        } else {
          bookInfo = {
            'STORE_ID': parseInt(this.storeID),
            'PROGRAM_SCHEDULE_ID': this.selectedProgram.ID,
            'USER_NAME': this.$cookies.get('MY_INFO').NAME,
            'USER_PHONE_NUMBER': '010' + this.contactNumber
          }
          STORE.bookProgram(bookInfo).then(result => {
            this.next(this.bookingType, result.BOOK_ID)
          })
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
    setTimeTable (table) {
      this.timeList = table.SLOT_LIST
      this.timeList.forEach((time) => {
        let timeDuration = {
          'START_TIME': time.START_TIME,
          'END_TIME': time.END_TIME
        }
        this.selectedTimeList[time.TIMETABLE_ID] = timeDuration

        let temp = time.START_TIME.slice(0, 2).concat(time.START_TIME.slice(3, 5))

        if (parseInt(timezone().tz('Asia/Seoul').add(70, 'm').format('HHmm')) >= parseInt(temp) &&
            this.selectedDate === this.$moment().format('YYYY.MM.DD')) {
          time.disabled = true
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
      STORE.getCounselingListForStore(this.storeID).then(result => {
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
        // 체험존 예약은 하루 한번만 가능합니다.
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
        // 수강 정원이 초과되어 해당 시간에 예약이 불가능합니다. 다른시간을 선택 해주세요.
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
    }
  },
  watch: {
    selectedProgram (programId) {
      if (programId && programId.ALREADY_BOOKED) {
        this.alertExperienceOnceToday()
        this.selectedProgram = null
        return
      }
      if (programId && programId.OVER_BOOKED) {
        this.alertAnotherTime()
        this.selectedProgram = null
      }
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
