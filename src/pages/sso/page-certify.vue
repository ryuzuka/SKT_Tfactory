<template>
  <div class="wrap login">
    <Header type="logo"></Header>
    <Certify></Certify>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Certify from '../../components/sso/Certify'

export default {
  name: 'page-success',
  components: {
    Header,
    Certify
  }
}
</script>
