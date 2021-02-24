<template>
<div class="wrap">
    <Header type="back" :title="$t('etc.terms') + ' ' + $t('etc.detail-view')"></Header>
    <Terms></Terms>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Terms from '../../components/etc/Terms'

export default {
  name: 'page-terms',
  components: {
    Header,
    Terms
  }
}
</script>
