<template>
  <div class="wrap experience">
    <Header type="back"></Header>

	  <!-- TUAF -->
	  <Part1 v-if="tuaId === 'tuaf_part1'"></Part1>
	  <Part2 v-else-if="tuaId === 'tuaf_part2'"></Part2>
	  <tuaf1 v-else-if="tuaId === 'tuaf1'"></tuaf1>

	  <!-- TUMF -->
    <tumf1 v-else-if="tuaId === 'tumf1'"></tumf1>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'

import Part1 from '../../components/product/tuf/tuaf/Part1'
import Part2 from '../../components/product/tuf/tuaf/Part2'
import Tuaf1 from '../../components/product/tuf/tuaf/Tuaf1'

import Tumf1 from '../../components/product/tuf/tumf/Tumf1'

export default {
  name: 'TUA',
  components: {
    Header,
	  Part1,
	  Part2,
	  Tuaf1,
	  Tumf1
  },
  data () {
    return {
	    tuaId: ''
    }
  },
  watch: {
    $route (to) {
      this.tuaId = to.params.tuaId
    }
  },
  created () {
	  this.tuaId = this.$route.params.tuaId
  }
}
</script>
