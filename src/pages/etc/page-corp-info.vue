<template>
  <div class="wrap">
    <Header type="back" :title="$t('comm.business-information')"></Header>
    <CorpInfo></CorpInfo>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import CorpInfo from '../../components/etc/CorpInfo'

export default {
  name: 'page-corp-info',
  components: {
    Header,
    CorpInfo
  }
}
</script>
