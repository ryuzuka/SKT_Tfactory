<template>
<div class="wrap">
    <Header type="back" :title="$t('etc.terms') + ' ' + $t('etc.detail-view')"></Header>
    <PolicyPrivacy></PolicyPrivacy>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PolicyPrivacy from '../../components/etc/PolicyPrivacy'

export default {
  name: 'page-policy-privacy',
  components: {
    Header,
    PolicyPrivacy
  }
}
</script>
