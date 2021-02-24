<template src="../../assets/html/mypage/pay-list.html"></template>

<script>
import ModalReceipt from '../../components/mypage/ModalPayReceipt'
import UiSelect from '../../ui/UiSelect'

import * as PAY from '../../js/pay.js'

export default {
  name: 'MyPayList',
  components: {
    UiSelect
  },
  data () {
    return {
      loading: null,
      isLoading: false,
      listData: [],
      lastIndex: 0
    }
  },
  methods: {
    clickInquiry () {
    },
    clickMore () {
      PAY.getPurchaseHistory(this.lastIndex).then(result => {
        result.RECEIPT_LIST.forEach(receipt => {
          // console.log(receipt.ITEM_LIST[0].IMAGES)
          if (receipt.ITEM_LIST[0].IMAGES) {
            receipt.ITEM_LIST[0].IMAGES = JSON.parse('[' + receipt.ITEM_LIST[0].IMAGES + ']')
            if (receipt.ITEM_LIST[0].IMAGES[0].toString().includes('http') === false) {
              receipt.ITEM_LIST[0].IMAGES[0] = 'https://' + receipt.ITEM_LIST[0].IMAGES[0]
            }
          } else {
            receipt.ITEM_LIST.IMAGES[0] = null
          }
          this.lastIndex = receipt.RECEIPT_ID
        })

        let afterGroupBy = this.groupBy(result.RECEIPT_LIST, (c) => c.INV_DATE)

        let tempListData = []
        for (let i = 0; i < Object.keys(afterGroupBy).length; i++) {
          tempListData.push(afterGroupBy[Object.keys(afterGroupBy)[i]])
        }

        tempListData = tempListData.reverse()
        this.listData = this.listData.concat(tempListData)
      })
    },
    readReceipt (pay) {
      this.$modal.show(ModalReceipt,
        {
          data: {
            receipt: pay
          }
        },
        {
          type: 'full'
        })
    },
    groupBy (xs, f) {
      // eslint-disable-next-line
      return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
    }
  },
  mounted () {
    PAY.getPurchaseHistory(0).then(result => {
      result.RECEIPT_LIST.forEach(receipt => {
        if (receipt.ITEM_LIST[0].IMAGES) {
          receipt.ITEM_LIST[0].IMAGES = JSON.parse('[' + receipt.ITEM_LIST[0].IMAGES + ']')
          if (receipt.ITEM_LIST[0].IMAGES[0]) {
            if (receipt.ITEM_LIST[0].IMAGES[0].toString().includes('http') === false) {
              receipt.ITEM_LIST[0].IMAGES[0] = 'https://' + receipt.ITEM_LIST[0].IMAGES[0]
            }
          }
        }
        this.lastIndex = receipt.RECEIPT_ID
      })

      let afterGroupBy = this.groupBy(result.RECEIPT_LIST, (c) => c.INV_DATE)

      for (let i = 0; i < Object.keys(afterGroupBy).length; i++) {
        this.listData.push(afterGroupBy[Object.keys(afterGroupBy)[i]])
      }
      this.listData = this.listData.reverse()
      console.log(this.listData)
    })
  },
  filters: {
    currency: value => {
      if (!value) return ''
      let num = Number(value)
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    },
    formatDate: value => {
      let y = value.substr(0, 4)
      let m = value.substr(4, 2)
      let d = value.substr(6, 2)
      return y + '-' + m + '-' + d
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
