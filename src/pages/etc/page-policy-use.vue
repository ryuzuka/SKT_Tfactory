<template>
<div class="wrap">
    <Header type="back"></Header>
    <PolicyAdvg></PolicyAdvg>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PolicyAdvg from '../../components/etc/PolicyAdvg'

export default {
  name: 'page-policy-advg',
  components: {
    Header,
    PolicyAdvg
  }
}
</script>
