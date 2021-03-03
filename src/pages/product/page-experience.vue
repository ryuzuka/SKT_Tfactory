<template>
  <div class="wrap experience">
    <Header type="back"></Header>

    <program1 v-if="programId === 'program1'"></program1>
    <program2 v-else-if="programId === 'program2'"></program2>
    <program3 v-else-if="programId === 'program3'"></program3>
    <program4 v-else-if="programId === 'program4'"></program4>
    <program5 v-else-if="programId === 'program5'"></program5>
    <program6 v-else-if="programId === 'program6'"></program6>
    <program7 v-else-if="programId === 'program7'"></program7>
    <program8 v-else-if="programId === 'program8'"></program8>
    <program9 v-else-if="programId === 'program9'"></program9>
    <program10 v-else-if="programId === 'program10'"></program10>
    <program11 v-else-if="programId === 'program11'"></program11>
    <program12 v-else-if="programId === 'program12'"></program12>
    <program13 v-else-if="programId === 'program13'"></program13>
    <program14 v-else-if="programId === 'program14'"></program14>
    <program15 v-else-if="programId === 'program15'"></program15>
    <program16 v-else-if="programId === 'program16'"></program16>
    <Experience v-else></Experience>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Experience from '../../components/product/Experience'

import Program1 from '../../components/product/program/Program1'
import Program2 from '../../components/product/program/Program2'
import Program3 from '../../components/product/program/Program3'
import Program4 from '../../components/product/program/Program4'
import Program5 from '../../components/product/program/Program5'
import Program6 from '../../components/product/program/Program6'
import Program7 from '../../components/product/program/Program7'
import Program8 from '../../components/product/program/Program8'
import Program9 from '../../components/product/program/Program9'
import Program10 from '../../components/product/program/Program10'
import Program11 from '../../components/product/program/Program11'
import Program12 from '../../components/product/program/Program12'
import Program13 from '../../components/product/program/Program13'
import Program14 from '../../components/product/program/Program14'
import Program15 from '../../components/product/program/Program15'
import Program16 from '../../components/product/program/Program16'

export default {
  name: 'page-product',
  components: {
    Header,
    Experience,
    Program1,
    Program2,
    Program3,
    Program4,
    Program5,
    Program6,
    Program7,
    Program8,
    Program9,
    Program10,
    Program11,
    Program12,
    Program13,
    Program14,
    Program15,
    Program16
  },
  data () {
    return {
      headerScrolled: false,
      productName: '',
      programId: this.$route.params.programId
    }
  }
}
</script>
