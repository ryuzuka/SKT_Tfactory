<template>
  <div class="popup">
    <header>
      <h1>제목</h1>
      <a href="#" class="btn-close" @click.prevent="$emit('close')"><span class="blind">{{ $t('comm.close') }}</span></a>
    </header>
    <div class="layer-cont">
      <p>내용</p>
      <div class="btn-wrap">
        <button class="btn-line big" @click="clickEventTest">clickEventTest</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    test: {
      type: String
    }
  },
  methods: {
    clickEventTest () {
      this.$parent.$emit('event-test', {a: 1, b: 2})
    }
  },
  created () {
    console.log(this.test)
  }
}
</script>

<style lang="scss">
  .close {font-size: 50px; float: right;}
</style>
