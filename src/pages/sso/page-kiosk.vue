<template>
  <div class="wrap login">
    <Header type="logo"></Header>
    <kiosk></kiosk>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Kiosk from '../../components/sso/Kiosk'

export default {
  name: 'page-kiosk',
  components: {
    Header,
    Kiosk
  }
}
</script>
