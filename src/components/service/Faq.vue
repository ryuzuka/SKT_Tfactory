<template src="../../assets/html/service/faq.html"></template>
<script>
import _ from 'lodash'

export default {
  name: 'Faq',
  data () {
    return {
      isActiveMenu: [],
      isActiveFaq: [],
      faqList: [],
      isActiveAccordion: []
    }
  },
  methods: {
    clickMenu (idx) {
      this.isActiveMenu = this.isActiveMenu.map(() => { return false })
      this.isActiveMenu[idx] = true
      /** async test **/
      this.$loading.start()

      setTimeout(() => {
        this.$loading.stop()
        this.faqList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        this.isActiveAccordion = this.faqList.map(() => { return false })
      }, 300)
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
    clickMore () {
      /** async test **/
      this.$loading.start()

      setTimeout(() => {
        this.$loading.stop()
        let data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        _.forEach(data, (data) => {
          this.faqList.push(data)
          this.isActiveAccordion.push(false)
        })
      }, 300)
    }
  },
  created () {
    /** async test **/
    this.$loading.start()

    setTimeout(() => {
      this.$loading.stop()
      this.isActiveMenu = [true, false, false, false, false]
      this.faqList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
      // this.faqList = [] // list none
      this.isActiveAccordion = this.faqList.map(() => { return false })
    }, 300)
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
