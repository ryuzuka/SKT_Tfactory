<template>
  <div class="wrap mytag-reissue">
    <Header type="back" :title="$t('mytag.mytag')"></Header>
    <ModalMyTagSurvey :my-tag="[]" :tag-list="[]"></ModalMyTagSurvey>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import ModalMyTagSurvey from '../../components/mytag/ModalMyTagSurvey'

export default {
  name: 'page-tag-certify',
  components: {
    Header,
    ModalMyTagSurvey
  },
  methods: {
  }
}
</script>
