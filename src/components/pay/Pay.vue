<template src="../../assets/html/pay/pay.html"></template>

<script>
import _ from 'lodash'

import UiSelect from '../../ui/UiSelect'
import Footer from '../../components/common/Footer'
import * as STORE from '../../js/store.js'
import * as PAY from '../../js/pay.js'
import * as USER from '../../js/user.js'
import * as MYTAG from '../../js/mytag.js'

export default {
  name: 'Pay',
  components: {
    UiSelect,
    Footer
  },
  data () {
    return {
      isLogin: false,
      isGuide: [false, false], // 전자상거래 구매 안전 서비스 안내, 환불에 대한 고지
      isRefundGuide: false,
      isProductOpen: [],
      couponList: [],
      couponNum: '',
      productList: [],
      checkAll: false,
      termsModel: [false, false, false],
      selectedCoupon: '',
      priceSum: 0,
      priceDiscount: 0,
      user_ci: '',
      user_type: '',
      user_id: '',
      pocCode: 'POC_TPA',
      payRate: 100
    }
  },
  methods: {
    changeCoupon (coupon) {
      if (coupon.INSTANT_BUY_WEB_MIN_AMOUNT > this.priceSum) {
        this.selectedCoupon = ''
        this.couponNum = ''
        this.priceDiscount = 0
        this.payRate = 100
        this.$modal.show('dialog', {
          title: '사용할 수 없는 쿠폰입니다.',
          buttons: [
            {
              title: '확인',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
        return
      }

      this.couponNum = coupon.COUPON_ID
      this.payRate = 100 - coupon.INSTANT_BUY_WEB_DISCOUNT_RATE
      this.priceDiscount = this.priceSum * 0.01 * coupon.INSTANT_BUY_WEB_DISCOUNT_RATE
    },
    cancelCoupon () {
      this.priceDiscount = 0
      this.selectedCoupon = ''
    },
    activeProduct (idx) {
      this.isProductOpen = this.isProductOpen.map((val, index) => {
        if (idx === index) {
          val = val ? Boolean(false) : Boolean(true)
        } else {
          val = false
        }
        return val
      })
    },
    changeTermsCheck (type) {
      if (type === 'all') {
        this.termsModel = this.termsModel.map(() => {
          if (this.checkAll) {
            return true
          } else {
            return false
          }
        })
      } else {
        let isCheck = true
        _.forEach(this.termsModel, val => {
          if (val === false) {
            isCheck = false
            this.checkAll = false
          }
        })
        if (isCheck) {
          this.checkAll = true
        }
      }
    },
    payButton (type) {
      if (type === 'PG') {
        this.callPayment('1', '0200')
      } else if (type === 'SKPay') {
        this.callPayment('2', '0560')
      }
    },
    callPayment (type, payGb) {
      // FIXME: QR code와 invoice number 다르게 setting
      let mobileOS = 0

      if (this.$cookies.get('platform') === 'A' || this.$cookies.get('platform') === 'I') {
        mobileOS = 1
      }

      let sum = 0
      let detail = []

      let invNo = (this.$moment().format('YYYYMMDD') + Math.floor(Math.random() * 99999)).toString()
      this.productList.forEach((product, index) => {
        sum += product.PRICE

        let detailPrice = product.ORIGIN_PRICE
        if (this.priceDiscount !== 0) {
          detailPrice = product.ORIGIN_PRICE * 0.01 * this.payRate
        }

        let temp = {
          'inv_no': invNo,
          'inv_seq': index.toString(),
          'item_cd': product.ACCESSORY_CODE,
          'item_nm': encodeURIComponent(product.NAME),
          'qty': product.QUANTITY.toString(),
          'price': detailPrice.toString(),
          'item_type': 'accessory'
        }
        detail.push(temp)
      })

      console.log(detail)
      sum = sum - this.priceDiscount
      let master = JSON.stringify({
        'owner_id': process.env.PAYMENT_OWNER_ID,
        'cust_id': 'DEFAULT-POS',
        'inv_no': invNo,
        'inv_dt': this.$moment().format('YYYYMMDD').toString(),
        'amount': sum.toString(),
        'payment': sum.toString(),
        'type': type,
        'pay_gb': payGb,
        'callback_url': window.location.origin + '/pay/complete',
        'app_yn': mobileOS.toString(),
        'ci': encodeURIComponent(this.user_ci),
        'identifier': encodeURIComponent(this.user_ci),
        'store_id': process.env.FLAGSHIP_STORE_ID,
        'qr_code': this.$route.query.qrCode,
        'poc_code': this.pocCode,
        'work': process.env.PAYMENT_ENV,
        'coupon_num': this.couponNum,
        'user_id': this.user_id
      })

      let masterData = 'master=' + master + '&detail=' + JSON.stringify(detail)
      localStorage.setItem('pay_url', this.$route.fullPath)

      PAY.callPayment(masterData)
    },
    renderAcc (accList) {
      accList.forEach((acc, index) => {
        if (acc.CODE) {
          STORE.getAccessoryInfo(acc.CODE).then(result => {
            result.QUANTITY = acc.QUANTITY
            result.ORIGIN_PRICE = result.PRICE
            result.PRICE = result.PRICE * acc.QUANTITY
            this.priceSum += result.PRICE

            this.productList.push(result)
            result.IMAGES = JSON.parse('[' + result.IMAGES + ']')
            if (result.IMAGES[0]) {
              if (result.IMAGES[0].toString().includes('http') === false) {
                result.IMAGES[0] = 'https://' + result.IMAGES[0]
              }
            }

            this.isProductOpen[index] = false

            if (!(this.$route.query.type === 'vending')) {
              let extraInfo = {
                NAME: result.NAME,
                ACCESSORY_CODE: acc.CODE
              }
              MYTAG.addTimeline('EXP_TPA_IBP', extraInfo)
            }
          })
        }
      })
    },
    getCouponList () {
      USER.getMyCouponList().then(result => {
        result.COUPONS.forEach((coupon) => {
          // FIXME: coupon
          let type = ''
          if (this.$route.query.type === 'vending') {
            type = 'instant_buy'
          } else {
            type = 'instant_buy_web'
          }

          result.COUPONS.forEach(coupon => {
            coupon.START_DATE = this.$moment(coupon.ISSUED_YMDT).format('YYYY.MM.DD')
            coupon.EXPIRE_DATE = this.$moment(coupon.EXPIRE_YMD).format('YYYY.MM.DD')

            if (coupon.EXPIRE_DATE < this.$moment().format('YYYY.MM.DD')) {
              coupon.USE_YN = true
            }
          })

          if (coupon.TYPE === type && coupon.USE_YN === 0) {
            coupon.text = coupon.TITLE
            coupon.value = coupon
            this.couponList.push(coupon)
          }
        })

        if (this.$route.query.coupon) {
          this.selectedCoupon = parseInt(this.$route.query.coupon)
          this.changeCoupon(this.selectedCoupon)
        }
      })
    }
  },
  mounted () {
    if (this.$route.query.type === 'vending') {
      this.pocCode = 'POC_VEN'
      PAY.vendingCallback(this.$route.query.qrCode)
    }

    if (!this.$cookies.get('USER_AUTH')) {
      localStorage.setItem('previous_url', this.$route.fullPath)
      this.$router.push('/confirm/paylogin')
    }
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })
  },
  watch: {
    isLogin: function () {
      if (this.isLogin) {
        this.user_type = this.$cookies.get('MY_INFO').USER_TYPE
        this.user_ci = this.$cookies.get('MY_INFO').CI
        this.user_id = this.$cookies.get('MY_INFO').USER_ID
        this.renderAcc(JSON.parse(this.$route.query.acc))
        this.getCouponList()
      }
    }
  },
  filters: {
    currency: value => {
      if (!value) return ''
      let num = Number(value)
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/pay';
</style>
