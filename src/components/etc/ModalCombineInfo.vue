<template src="../../assets/html/etc/pop-combine-info.html"></template>

<script>
export default {
  name: 'ModalInfo',
  props: {
  },
  data () {
    return {
      isAgree: false
    }
  },
  methods: {
    cancel () {
      // 취소
      this.$emit('close')
    },
    combine () {
      // 통합하기
      this.$emit('close')
      this.$parent.$emit('complete-combine', {isAgree: this.isAgree})
    }
  }
}
</script>
