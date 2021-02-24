<template src="../../assets/html/shop/find-list.html"></template>

<script>
export default {
  name: 'FindList',
  props: {
    listShop: {
      type: Array
    },
    bookingType: {
      type: String,
      default: ''
    },
    selectType: {
      type: String,
      default: ''
    },
    locationAgree: {
      type: Boolean
    },
    selectedService: {
      type: Number
    }
  },
  data () {
    return {
      addressType: []
    }
  },
  watch: {
    listShop (list) {
      this.addressType = list.map((value, index) => {
        if (!this.addressType[index]) {
          return {type: 'road'}
        } else {
          return this.addressType[index]
        }
      })
    }
  },
  methods: {
    toggleAddressType (index) {
      this.addressType[index].type = this.addressType[index].type === 'road' ? 'number' : 'road'
    },
    clickShop (STORE_ID) {
      if (this.bookingType) {
        this.$router.push('/sev/booking/' + this.bookingType + '/date/' + this.selectType + '?store_id=' + STORE_ID)
      } else {
        this.$router.push('/shop/detail?store_id=' + STORE_ID)
      }
    },
    clickMore () {
      this.$parent.$emit('more-find-list')
    }
  },
  created () {
    this.addressType = this.listShop.map(() => {
      return {type: 'road'}
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/shop';
</style>
