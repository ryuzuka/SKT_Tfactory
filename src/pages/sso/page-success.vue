<template>
  <div class="wrap login">
    <Header type="logo"></Header>
    <success></success>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Success from '../../components/sso/Success'

export default {
  name: 'page-success',
  components: {
    Header,
    Success
  }
}
</script>
