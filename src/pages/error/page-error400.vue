<template>
  <div class="wrap error">
    <Header type="back"></Header>
    <Error400></Error400>
    <bottom></bottom> <!-- 03.03 nav-bottom 추가 -->
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Error400 from '../../components/error/Error400'
import Bottom from '../../components/common/Bottom'

export default {
  name: 'page-error400',
  components: {
    Header,
    Error400,
    Bottom
  }
}
</script>
