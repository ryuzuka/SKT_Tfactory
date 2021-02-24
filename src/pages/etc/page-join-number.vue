<template>
  <div class="wrap type2">
    <Header type="back" :title="$t('etc.join-input')"></Header>
    <JoinNumber></JoinNumber>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import JoinNumber from '../../components/etc/JoinNumber'

export default {
  name: 'page-join-certify',
  components: {
    Header,
    JoinNumber
  },
  methods: {
  }
}
</script>
