<template>
  <div class="wrap">
    <Header type="back" :title="$t('sev.faq')"></Header>
    <faq></faq>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Faq from '../../components/service/Faq'

export default {
  name: 'page-faq',
  components: {
    Header,
    Faq
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
