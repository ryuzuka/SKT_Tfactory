<template src="../../assets/html/main/pop-qr.html"></template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'ModalQR',
  components: {
    QrcodeVue
  },
  props: {
    oneTimeCertKey: {
      type: String
    }
  },
  data () {
    return {
      count: 20,
      size: 240
    }
  },
  methods: {
    clickClose () {
      // console.log('clickClose')
      this.$parent.$emit('change-qr', {})
      this.$emit('close')
    }
  },
  mounted () {
    // console.log(this.oneTimeCertKey)
    let timer = setInterval(() => {
      this.count--
      if (this.count < 0) {
        this.count = 0
        clearInterval(timer)
        this.clickClose()
      }
    }, 1000)
  },
  filters: {
    countFilter (count) {
      if (count < 10) {
        count = '0' + count
      }
      return count
    }
  }
}
</script>
