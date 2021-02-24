<template>
  <div class="wrap login">
    <Header type="logo"></Header>
    <MainLogin></MainLogin>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MainLogin from '../../components/main/MainLogin'

export default {
  name: 'page-main-login',
  components: {
    Header,
    MainLogin
  },
  methods: {
    tidLoginCallback (response) {
      console.log('[INFO] tidLoginCallback: ' + response)
    }
  }
}
</script>
