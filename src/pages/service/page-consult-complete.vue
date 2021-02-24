<template>
  <div class="wrap">
    <Header :title="$t('sev.consult-complete')"></Header>
    <ConsultComplete></ConsultComplete>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ConsultComplete from '../../components/service/ConsultComplete'

export default {
  name: 'consult-complete',
  components: {
    Header,
    ConsultComplete
  },
  props: {}
}
</script>
