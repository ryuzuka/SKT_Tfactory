<template src="../../assets/html/main/pop-change-number.html"></template>

<script>
export default {
  name: 'ModalMyTagNumber',
  props: {
    lineList: {
      type: Array
    },
    selectedNumber: {
      type: ''
    }
  },
  data () {
    return {
      MDN: ''
    }
  },
  methods: {
    clickConfirm () {
      this.$parent.$emit('change-number', {selectedNumber: this.MDN})
      this.$emit('close')
    }
  },
  filters: {
    mdnFilter (data) {
      let mdn = data.replace(/[^0-9]/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3').replace('--', '-')
      return mdn
    }
  },
  mounted () {
    this.MDN = this.$props.selectedNumber
  }
}
</script>
