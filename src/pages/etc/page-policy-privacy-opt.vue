<template>
<div class="wrap">
    <Header type="back" :title="$t('etc.terms') + ' ' + $t('etc.detail-view')"></Header>
    <PolicyPrivacyOpt></PolicyPrivacyOpt>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PolicyPrivacyOpt from '../../components/etc/PolicyPrivacyOpt'

export default {
  name: 'page-policy-privacy-opt',
  components: {
    Header,
    PolicyPrivacyOpt
  }
}
</script>
