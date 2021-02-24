<template>
  <div class="wrap login">
    <Header type="logo"></Header>
    <login></login>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Login from '../../components/sso/Login'

export default {
  name: 'page-login',
  components: {
    Header,
    Login
  },
  methods: {
    tidLoginCallback (response) {
      console.log('[INFO] tidLoginCallback: ' + response)
    }
  }
}
</script>
