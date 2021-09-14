<template>
  <div class="wrap experience">
    <Header type="backToProgram"></Header>

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
    <program17 v-else-if="programId === 'program17'"></program17>
    <program18 v-else-if="programId === 'program18'"></program18>
    <program19 v-else-if="programId === 'program19'"></program19>
    <program20 v-else-if="programId === 'program20'"></program20>
    <program21 v-else-if="programId === 'program21'"></program21>
    <program22 v-else-if="programId === 'program22'"></program22>
    <program23 v-else-if="programId === 'program23'"></program23>
    <program24 v-else-if="programId === 'program24'"></program24>
    <program25 v-else-if="programId === 'program25'"></program25>
    <program26 v-else-if="programId === 'program26'"></program26>
    <program27 v-else-if="programId === 'program27'"></program27>
    <program28 v-else-if="programId === 'program28'"></program28>
    <program29 v-else-if="programId === 'program29'"></program29>
    <program30 v-else-if="programId === 'program30'"></program30>
    <program31 v-else-if="programId === 'program31'"></program31>
    <program32 v-else-if="programId === 'program32'"></program32>
    <program33 v-else-if="programId === 'program33'"></program33>
    <program34 v-else-if="programId === 'program34'"></program34>
    <program35 v-else-if="programId === 'program35'"></program35>
    <program36 v-else-if="programId === 'program36'"></program36>
    <program37 v-else-if="programId === 'program37'"></program37>
    <program38 v-else-if="programId === 'program38'"></program38>
    <program39 v-else-if="programId === 'program39'"></program39>
    <program40 v-else-if="programId === 'program40'"></program40>
    <program41 v-else-if="programId === 'program41'"></program41>
    <program42 v-else-if="programId === 'program42'"></program42>
    <program43 v-else-if="programId === 'program43'"></program43>
    <program44 v-else-if="programId === 'program44'"></program44>
    <program45 v-else-if="programId === 'program45'"></program45>
    <program46 v-else-if="programId === 'program46'"></program46>
    <program47 v-else-if="programId === 'program47'"></program47>
    <program48 v-else-if="programId === 'program48'"></program48>
    <program49 v-else-if="programId === 'program49'"></program49>
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
import Program17 from '../../components/product/program/Program17'
import Program18 from '../../components/product/program/Program18'
import Program19 from '../../components/product/program/Program19'
import Program20 from '../../components/product/program/Program20'
import Program21 from '../../components/product/program/Program21'
import Program22 from '../../components/product/program/Program22'
import Program23 from '../../components/product/program/Program23'
import Program24 from '../../components/product/program/Program24'
import Program25 from '../../components/product/program/Program25'
import Program26 from '../../components/product/program/Program26'
import Program27 from '../../components/product/program/Program27'
import Program28 from '../../components/product/program/Program28'
import Program29 from '../../components/product/program/Program29'
import Program30 from '../../components/product/program/Program30'
import Program31 from '../../components/product/program/Program31'
import Program32 from '../../components/product/program/Program32'
import Program33 from '../../components/product/program/Program33'
import Program34 from '../../components/product/program/Program34'
import Program35 from '../../components/product/program/Program35'
import Program36 from '../../components/product/program/Program36'
import Program37 from '../../components/product/program/Program37'
import Program38 from '../../components/product/program/Program38'
import Program39 from '../../components/product/program/Program39'
import Program40 from '../../components/product/program/Program40'
import Program41 from '../../components/product/program/Program41'
import Program42 from '../../components/product/program/Program42'
import Program43 from '../../components/product/program/Program43'
import Program44 from '../../components/product/program/Program44'
import Program45 from '../../components/product/program/Program45'
import Program46 from '../../components/product/program/Program46'
import Program47 from '../../components/product/program/Program47'
import Program48 from '../../components/product/program/Program48'
import Program49 from '../../components/product/program/Program49'

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
    Program16,
    Program17,
    Program18,
    Program19,
    Program20,
    Program21,
    Program22,
    Program23,
    Program24,
    Program25,
    Program26,
    Program27,
    Program28,
    Program29,
    Program30,
    Program31,
    Program32,
    Program33,
    Program34,
    Program35,
    Program36,
    Program37,
    Program38,
    Program39,
    Program40,
    Program41,
    Program42,
    Program43,
    Program44,
    Program45,
    Program46,
    Program47,
    Program48,
    Program49
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
