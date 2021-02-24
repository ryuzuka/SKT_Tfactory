<template>
  <div class="wrap mytag-login">
    <Header type="logo"></Header>
    <MyTagLogin></MyTagLogin>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyTagLogin from '../../components/mytag/Login'

export default {
  name: 'page-tag-login',
  components: {
    Header,
    MyTagLogin
  },
  methods: {
  }
}
</script>
