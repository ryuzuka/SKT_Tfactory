<template src="../../assets/html/inc/bottom.html"></template>

<script>
export default {
  name: 'Bottom',
  props: {},
  data () {
    return {
      isActive: [false, false, false, false, false],
      isLogin: ''
    }
  },
  watch: {
    $route (to) {
      this.activeNav(to.params['menu'])
    }
  },
  methods: {
    activeNav (menu) {
      let idx = -1
      if (menu === 'store') {
        idx = 0
      } else if (menu === 'program') {
        idx = 1
      } else if (menu === 'mytag') {
        idx = 3
      } else if (menu === 'menu') {
        idx = 4
      }
      this.toggleBottomNav(idx)
    },
    toggleBottomNav (idx) {
      this.isActive = this.isActive.map((val, i) => {
        val = false
        if (idx === i) {
          val = true
        }
        return val
      })
    },
    clickNav (idx) {
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
	  this.activeNav(this.$route.params['menu'])
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
