<template>
  <div class="wrap">
    <Header type="back" :title="$t('mytag.additional')"></Header>
    <MyTagAdditional></MyTagAdditional>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import MyTagAdditional from '../../components/mytag/Additional'

export default {
  name: 'page-tag-additional',
  components: {
    Header,
    MyTagAdditional
  },
  methods: {
  }
}
</script>
