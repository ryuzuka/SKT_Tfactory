<template>
  <div class="wrap">
    <Header type="back" :title="$t('event.event-view')"></Header>
    <EventViewType1 v-if="type === 'html'"></EventViewType1>
    <EventViewType2 v-if="type === 'imagebutton'"></EventViewType2>
    <EventViewType3 v-if="type === 'imagetext'"></EventViewType3>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import EventViewType1 from '../../components/_event/EventViewType1'
import EventViewType2 from '../../components/_event/EventViewType2'
import EventViewType3 from '../../components/_event/EventViewType3'

export default {
  name: 'event-list',
  components: {
    Header,
    EventViewType1,
    EventViewType2,
    EventViewType3
  },
  data () {
    return {
      type: this.$route.params.type
    }
  },
  created () {
  }
}
</script>
