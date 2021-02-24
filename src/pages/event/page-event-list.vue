<template>
  <div class="wrap">
    <Header type="back" :title="$t('event.event')"></Header>
    <EventList></EventList>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import EventList from '../../components/_event/EventList'

export default {
  name: 'event-list',
  components: {
    Header,
    EventList
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
