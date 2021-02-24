<template src="../../assets/html/main/pop-main.html"></template>

<script>
export default {
  name: 'ModalMain',
  methods: {
    clickClose () {
      this.$emit('close')
      this.$parent.$emit('event-test', {test: 'test'})
    }
  }
}
</script>
