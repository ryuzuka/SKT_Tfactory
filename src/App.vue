<template>
  <router-view></router-view>
</template>

<script>

import ModalBooking from './components/service/booking/ModalBooking'
import * as USER from './js/user.js'

export default {
  name: 'app',
  methods: {
  },
  beforeCreate () {
    if (!this.$cookies.get('USER_AUTH')) {
      document.cookie = encodeURIComponent('MY_INFO') + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      this.$store.state.constants.session_alive = false
      // document.cookie = encodeURIComponent('MY_INFO') + '=' + encodeURIComponent('')
    }

    if (this.$cookies.get('USER_AUTH') !== null) {
      USER.authCheck(this.$cookies.get('USER_AUTH'))
        .then(response => {
          if (response.RET_CODE === 0) {
            this.$store.state.constants.session_alive = true
          } else {
            this.$cookies.remove('USER_AUTH')
            this.$store.state.constants.session_alive = false
          }
        })
    }

    this.$moment.locale('ko', {
      weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      weekdaysShort: ['일', '월', '화', '수', '목', '금', '토']
    })
  },
  mounted () {
    // pinch zoom prevent
    document.addEventListener('touchmove', function (e) {
      if (e.scale !== 1 && e.scale !== undefined) {
        e.preventDefault()
      }
    }, { passive: false })

    // double tab prevent
    let lastTouchEnd = 0
    document.documentElement.addEventListener('touchend', function (event) {
      let now = (new Date()).getTime()
      if (now - lastTouchEnd <= 200) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }, { passive: false })
  },
  created () {
    this.$EventBus.$on('open-booking', () => { this.$modal.show(ModalBooking) })
  }
}
</script>
<style lang="scss">
  @import './assets/css/common.scss';
  @import './plugins/vue-awesome-swiper/css/swiper.css';
  @import './plugins/vue-loading-overlay/css/index.css';
</style>
