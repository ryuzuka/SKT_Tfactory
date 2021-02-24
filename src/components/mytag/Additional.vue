<template src="../../assets/html/mytag/additional.html"></template>
<script>
import * as VAS from '../../js/kiosk.js'
import * as VAS_CONSTANT from '../../constant/vas.js'

export default {
  name: 'MyTagAdditional',
  data () {
    return {
      myInfo: {},
      date: '',
      vasInfo: {},
      myVAS: {},
      aiPickVAS: [],
      aiPickVASInfo: [],
      modelName: '',
      aiSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
    this.myInfo = JSON.parse(localStorage.getItem('AFTER_MARKETING'))
    this.date = this.$moment().format('YYYY.MM.DD')

    let subscriptionId = this.myInfo.PLAN_CODE
    this.modelName = this.myInfo.PRODUCT_NAME

    if (subscriptionId) {
      VAS.getVASInfo(subscriptionId).then(result => {
        this.vasInfo = result
      })
    }

    this.myInfo.VAS.forEach(myVas => {
      this.myVAS[myVas.prodId] = true
    })

    this.aiPickVAS = this.myInfo.AI_PICK.tshop_vas_top3.sort(this.sortJsonArray)

    this.aiPickVAS.forEach((vas) => {
      let vasInfo = {
        price: VAS_CONSTANT.PRICE[vas.id],
        description: VAS_CONSTANT.DESCRIPTION[vas.id]
      }
      this.aiPickVASInfo.push(vasInfo)
    })
  },
  methods: {
    openTworld (naCode) {
      window.location.href = VAS_CONSTANT.DEEPLINK[naCode]
    },
    sortJsonArray (a, b) {
      if (a.props.rank === b.props.rank) { return 0 } return a.props.rank > b.props.rank ? 1 : -1
    }
  },
  filters: {
    mdnFilter (data) {
      let temp = ''
      if (data) {
        temp = data.slice(0, 3) + '-' + data.slice(3, 7) + '-' + data.slice(7, 11)
      }
      return temp
    },
    priceFilter (data) {
      let temp = ''
      if (data) {
        temp = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }

      if (data === 0) {
        temp = '0'
      }
      return temp
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/mytag';
</style>
