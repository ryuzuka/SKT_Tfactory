<template>
  <div class="wrap experience">
    <Header type="back"></Header>

	  <!-- TUAF -->
	  <Part1 v-if="tuaId === 'tuaf_part1'"></Part1>
	  <Part2 v-else-if="tuaId === 'tuaf_part2'"></Part2>
	  <tuaf1 v-else-if="tuaId === 'tuaf1'"></tuaf1>
    <tuaf2 v-else-if="tuaId === 'tuaf2'"></tuaf2>
    <tuaf3 v-else-if="tuaId === 'tuaf3'"></tuaf3>
    <tuaf4 v-else-if="tuaId === 'tuaf4'"></tuaf4>
    <tuaf5 v-else-if="tuaId === 'tuaf5'"></tuaf5>
    <tuaf6 v-else-if="tuaId === 'tuaf6'"></tuaf6>
    <tuaf7 v-else-if="tuaId === 'tuaf7'"></tuaf7>
    <tuaf8 v-else-if="tuaId === 'tuaf8'"></tuaf8>
    <tuaf9 v-else-if="tuaId === 'tuaf9'"></tuaf9>
    <tuaf10 v-else-if="tuaId === 'tuaf10'"></tuaf10>
    <tuaf11 v-else-if="tuaId === 'tuaf11'"></tuaf11>
    <tuaf12 v-else-if="tuaId === 'tuaf12'"></tuaf12>
    <tuaf13 v-else-if="tuaId === 'tuaf13'"></tuaf13>
    <tuaf14 v-else-if="tuaId === 'tuaf14'"></tuaf14>
    <tuaf15 v-else-if="tuaId === 'tuaf15'"></tuaf15>
    <tuaf16 v-else-if="tuaId === 'tuaf16'"></tuaf16>
    <tuaf17 v-else-if="tuaId === 'tuaf17'"></tuaf17>
    <tuaf18 v-else-if="tuaId === 'tuaf18'"></tuaf18>
    <tuaf19 v-else-if="tuaId === 'tuaf19'"></tuaf19>
    <tuaf20 v-else-if="tuaId === 'tuaf20'"></tuaf20>
    <tuaf21 v-else-if="tuaId === 'tuaf21'"></tuaf21>
    <tuaf22 v-else-if="tuaId === 'tuaf22'"></tuaf22>
    <tuaf23 v-else-if="tuaId === 'tuaf23'"></tuaf23>
    <tuaf24 v-else-if="tuaId === 'tuaf24'"></tuaf24>
    <tuaf25 v-else-if="tuaId === 'tuaf25'"></tuaf25>
    <tuaf26 v-else-if="tuaId === 'tuaf26'"></tuaf26>
    <tuaf27 v-else-if="tuaId === 'tuaf27'"></tuaf27>
    <tuaf28 v-else-if="tuaId === 'tuaf28'"></tuaf28>
    <tuaf29 v-else-if="tuaId === 'tuaf29'"></tuaf29>
    <tuaf30 v-else-if="tuaId === 'tuaf30'"></tuaf30>
    <tuaf31 v-else-if="tuaId === 'tuaf31'"></tuaf31>
    <tuaf32 v-else-if="tuaId === 'tuaf32'"></tuaf32>
    <tuaf33 v-else-if="tuaId === 'tuaf33'"></tuaf33>
    <tuaf34 v-else-if="tuaId === 'tuaf34'"></tuaf34>
    <tuaf35 v-else-if="tuaId === 'tuaf35'"></tuaf35>
    <tuaf36 v-else-if="tuaId === 'tuaf36'"></tuaf36>
    <tuaf37 v-else-if="tuaId === 'tuaf37'"></tuaf37>

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
import Tuaf2 from '../../components/product/tuf/tuaf/Tuaf2'
import Tuaf3 from '../../components/product/tuf/tuaf/Tuaf3'
import Tuaf4 from '../../components/product/tuf/tuaf/Tuaf4'
import Tuaf5 from '../../components/product/tuf/tuaf/Tuaf5'
import Tuaf6 from '../../components/product/tuf/tuaf/Tuaf6'
import Tuaf7 from '../../components/product/tuf/tuaf/Tuaf7'
import Tuaf8 from '../../components/product/tuf/tuaf/Tuaf8'
import Tuaf9 from '../../components/product/tuf/tuaf/Tuaf9'
import Tuaf10 from '../../components/product/tuf/tuaf/Tuaf10'
import Tuaf11 from '../../components/product/tuf/tuaf/Tuaf11'
import Tuaf12 from '../../components/product/tuf/tuaf/Tuaf12'
import Tuaf13 from '../../components/product/tuf/tuaf/Tuaf13'
import Tuaf14 from '../../components/product/tuf/tuaf/Tuaf14'
import Tuaf15 from '../../components/product/tuf/tuaf/Tuaf15'
import Tuaf16 from '../../components/product/tuf/tuaf/Tuaf16'
import Tuaf17 from '../../components/product/tuf/tuaf/Tuaf17'
import Tuaf18 from '../../components/product/tuf/tuaf/Tuaf18'
import Tuaf19 from '../../components/product/tuf/tuaf/Tuaf19'
import Tuaf20 from '../../components/product/tuf/tuaf/Tuaf20'
import Tuaf21 from '../../components/product/tuf/tuaf/Tuaf21'
import Tuaf22 from '../../components/product/tuf/tuaf/Tuaf22'
import Tuaf23 from '../../components/product/tuf/tuaf/Tuaf23'
import Tuaf24 from '../../components/product/tuf/tuaf/Tuaf24'
import Tuaf25 from '../../components/product/tuf/tuaf/Tuaf25'
import Tuaf26 from '../../components/product/tuf/tuaf/Tuaf26'
import Tuaf27 from '../../components/product/tuf/tuaf/Tuaf27'
import Tuaf28 from '../../components/product/tuf/tuaf/Tuaf28'
import Tuaf29 from '../../components/product/tuf/tuaf/Tuaf29'
import Tuaf30 from '../../components/product/tuf/tuaf/Tuaf30'
import Tuaf31 from '../../components/product/tuf/tuaf/Tuaf31'
import Tuaf32 from '../../components/product/tuf/tuaf/Tuaf32'
import Tuaf33 from '../../components/product/tuf/tuaf/Tuaf33'
import Tuaf34 from '../../components/product/tuf/tuaf/Tuaf34'
import Tuaf35 from '../../components/product/tuf/tuaf/Tuaf35'
import Tuaf36 from '../../components/product/tuf/tuaf/Tuaf36'
import Tuaf37 from '../../components/product/tuf/tuaf/Tuaf37'

import Tumf1 from '../../components/product/tuf/tumf/Tumf1'

export default {
  name: 'TUA',
  components: {
    Header,
	  Part1,
	  Part2,
	  Tuaf1,
    Tuaf2,
    Tuaf3,
    Tuaf4,
    Tuaf5,
    Tuaf6,
    Tuaf7,
    Tuaf8,
    Tuaf9,
    Tuaf10,
    Tuaf11,
    Tuaf12,
    Tuaf13,
    Tuaf14,
    Tuaf15,
    Tuaf16,
    Tuaf17,
    Tuaf18,
    Tuaf19,
    Tuaf20,
    Tuaf21,
    Tuaf22,
    Tuaf23,
    Tuaf24,
    Tuaf25,
    Tuaf26,
    Tuaf27,
    Tuaf28,
    Tuaf29,
    Tuaf30,
    Tuaf31,
    Tuaf32,
    Tuaf33,
    Tuaf34,
    Tuaf35,
    Tuaf36,
    Tuaf37,
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
