<template src="../../assets/html/service/counselor.html"></template>

<script>
export default {
  name: 'Counselor',
  data () {
    return {
      status: 0, // 0: 배정중, 1: 상담중, 2: 배정 완료
      count: 59,
      countText: '59',
      timer: {}
    }
  },
  watch: {
    status (status) {
      if (status === 2) {
        this.reset()

        // TODO - 배정 완료
      }
    }
  },
  methods: {
    countDown () {
      this.count--
      this.countText = this.count
      if (this.count < 10) {
        this.countText = '0' + this.countText
      }
      if (this.count < 0) {
        this.reset()
        this.status = 1
      }
    },
    reset () {
      this.$modal.hide('dialog')
      this.timer.stop()
      this.count = 59
      this.countText = '59'
    },
    clickCancel () {
      this.$modal.show('dialog', {
        title: '상담원 호출을 취소 하시겠습니까?',
        buttons: [
          {
            title: '예',
            handler: () => {
              this.reset()
              this.status = 1

              // TODO - 상담원 호출 취소
            }
          },
          {
            title: '아니요'
          }
        ]
      })
    },
    clickRetry () {
      this.reset()
      this.status = 0
      this.timer.start()
    }
  },
  created () {
    let _vue = this

    this.timer = {
      interval: null,
      start () {
        if (!this.interval) {
          this.interval = setInterval(() => {
            _vue.countDown()
          }, 1000)
        }
      },
      stop () {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      }
    }
  },
  mounted () {
    this.timer.start()
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/service';
</style>
