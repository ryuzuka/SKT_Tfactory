<template>
  <div class="wrap mytag-mms">
    <MyTagMms></MyTagMms>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import MyTagMms from '../../components/mytag/Mms'

export default {
  name: 'page-tag-mms',
  components: {
    MyTagMms
  },
  methods: {
  }
}
</script>
