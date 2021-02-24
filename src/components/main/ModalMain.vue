<template src="../../assets/html/main/pop-main.html"></template>

<script>
export default {
  name: 'ModalMain',
  data () {
    return {
      popUpList: [],
      notForToday: false
    }
  },
  methods: {
    clickClose () {
      this.$emit('close')
      this.$parent.$emit('event-notForToday', {notForToday: this.notForToday})
    }
  },
  mounted () {
    this.popUpList = this.$attrs.POPUP_LIST
  }
}
</script>
