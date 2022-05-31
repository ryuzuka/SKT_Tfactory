<template src="../../assets/html/inc/bottom.html"></template>

<script>
export default {
  name: 'Bottom',
  props: {},
  data () {
    return {
      isActive: [false, false, false, false, false],
      isLogin: '',
      isClickNav: false
    }
  },
  watch: {
    $route (to) {
      switch (to.params['menu']) {
        case 'store':
          this.clickNav(0)
          break
        case 'program':
          this.clickNav(1)
          break
        case 'mytag':
          this.clickNav(3)
          break
        case 'menu':
          this.clickNav(4)
          break
      }
      this.isClickNav = false
    }
  },
  methods: {
    toggleBottomNav (idx) {
      if (idx === 2) {
        return
      }
      this.isActive = this.isActive.map((val, i) => {
        val = false
        if (idx === i) {
          val = true
        }
        return val
      })
    },
    clickNav (idx) {
      if (this.isClickNav) return

      this.isClickNav = true
      this.toggleBottomNav(idx)
      if (idx === 0) {
        this.$EventBus.$emit('change-main-menu', 'store')
      } else if (idx === 1) {
        this.$EventBus.$emit('change-main-menu', 'program')
      } else if (idx === 2) {
        this.$EventBus.$emit('change-main-menu', 'qr')
      } else if (idx === 3) {
        if (this.isLogin === false) {
          this.$router.push('/mytag/login')
        } else if (this.isLogin === true) {
          this.$EventBus.$emit('change-main-menu', 'mytag')
        }
      } else if (idx === 4) {
        this.$EventBus.$emit('change-main-menu', 'menu')
      }
    }
  },
  created () {
    this.$EventBus.$on('toggle-bottom-nav', (idx) => {
      this.toggleBottomNav(idx)
    })
  },
  mounted () {
    this.$store.watch(() => {
      if (this.$store.getters.CONSTANTS.session_alive === true) {
        this.isLogin = true
      } else if (this.$store.getters.CONSTANTS.session_alive === false) {
        this.isLogin = false
      }
    })
  }
}
</script>
