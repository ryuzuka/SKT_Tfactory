<template>
  <div class="wrap login">
    <Header type="logo"></Header>
    <MainAppDown></MainAppDown>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MainAppDown from '../../components/main/MainAppDown'

export default {
  name: 'page-main-appdown',
  components: {
    Header,
    MainAppDown
  },
  data () {
    return {
      mobileOS: ''
    }
  },
  methods: {
    checkMobile () {
      let varUA = navigator.userAgent.toLowerCase() // userAgent 값 얻기

      if (varUA.indexOf('android') > -1) {
        this.mobileOS = 'android'
      } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
        this.mobileOS = 'ios'
      } else {
        return 'other'
      }
      // alert(this.mobileOS)
    }
  },
  mounted () {
    this.checkMobile()
  }
}
</script>
