<template>
  <div class="wrap counselor">
    <counselor></counselor>

    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Counselor from '../../components/service/Counselor'

export default {
  name: 'page-counselor',
  components: {
    Counselor
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
