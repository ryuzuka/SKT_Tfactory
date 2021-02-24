<template>
<div class="wrap">
    <Header type="back" :title="$t('etc.terms') + ' ' + $t('etc.detail-view')"></Header>
    <PolicyConflict></PolicyConflict>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import PolicyConflict from '../../components/etc/PolicyConflict'

export default {
  name: 'page-policy-advg',
  components: {
    Header,
    PolicyConflict
  }
}
</script>
