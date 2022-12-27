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
      user_type: '',
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
        this.callPayment(1)
      } else if (type === 'SKPay') {
        this.callPayment(2)
      }
    },
    async callPayment (type) {
      let itemList = []
      this.productList.forEach((product) => {
        let item = {
          ITEM_CODE: product.ACCESSORY_CODE,
          QUANTITY: product.QUANTITY.toString(),
          ITEM_TYPE: 'accessory'
        }
        itemList.push(item)
      })

      this.order = {
        STORE_ID: parseInt(this.$route.query.storeId),
        INV_DATE: this.$moment().format('YYYYMMDD').toString(),
        QR_CODE: this.$route.query.qrCode,
        POC_CODE: this.pocCode,
        PAY_TYPE: type,
        ITEM_LIST: itemList,
        COUPON_ID: this.selectedCoupon
      }
      
      const checkNum = await PAY.checkOrderItem(this.order)
      if(checkNum > 0){
          this.$modal.show('dialog', {
          title: '상품은 1품목당 1인 1개 구매가능합니다.',
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
      
      const invNum = await PAY.createOrderId(this.order)
      const mobileOS = (this.$cookies.get('platform') === 'A' || this.$cookies.get('platform') === 'I') ? 1 : 0
      const work = process.env.NODE_ENV === 'production' ? 'REAL' : 'DEV'
      const request = `INV_NUMBER=${invNum}&app_yn=${mobileOS}&cust_id=DEFAULT-POS&callback_url=${window.location.origin + '/pay/complete'}&work=${work}`
      localStorage.setItem('pay_url', this.$route.fullPath)

      PAY.callPayment(request)
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

    if (this.$route.query.type === 'vending') {
      this.pocCode = 'POC_VEN'
      PAY.vendingCallback(this.$route.query.qrCode)
    }
  },
  watch: {
    isLogin: function () {
      if (this.isLogin) {
        this.user_type = this.$cookies.get('MY_INFO').USER_TYPE
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
