<template>
  <div class="wrap">
    <Header type="back" :title="$t('comm.family-site')"></Header>
    <family-site></family-site>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import FamilySite from '../../components/etc/FamilySite'

export default {
  name: 'page-family-site',
  components: {
    Header,
    FamilySite
  }
}
</script>
