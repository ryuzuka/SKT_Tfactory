<template>
<div class="wrap">
    <Header type="back" :title="$t('etc.terms') + ' ' + $t('etc.detail-view')"></Header>
    <PolicyService></PolicyService>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PolicyService from '../../components/etc/PolicyService'

export default {
  name: 'page-policy-service',
  components: {
    Header,
    PolicyService
  }
}
</script>
