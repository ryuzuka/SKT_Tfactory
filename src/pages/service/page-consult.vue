<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.consult')"></Header>
    <Consult></Consult>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Consult from '../../components/service/Consult'

export default {
  name: 'consult',
  components: {
    Header,
    Consult
  },
  props: {}
}
</script>
