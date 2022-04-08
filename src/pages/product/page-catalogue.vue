<template>
  <div class="wrap experience">
    <Header type="back"></Header>

	  <!-- index -->
	  <Index v-if="catalogueId === 'list'"></Index>

	  <!-- part1, part2 -->
	  <Part1 v-else-if="catalogueId === 'part1'"></Part1>
	  <Part2 v-else-if="catalogueId === 'part2'"></Part2>

	  <!-- artwork -->
    <Artwork1 v-else-if="catalogueId === 'artwork1'"></Artwork1>

    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'

import Index from '../../components/product/catalogue/Index'
import Part1 from '../../components/product/catalogue/Part1'
import Part2 from '../../components/product/catalogue/Part2'

import Artwork1 from '../../components/product/catalogue/artwork/Artwork1'

export default {
  name: 'Artwork',
  components: {
    Header,
	  Index,
	  Part1,
	  Part2,
	  Artwork1
  },
  data () {
    return {
	    catalogueId: ''
    }
  },
  watch: {
    $route (to) {
      this.catalogueId = to.params.catalogueId
    }
  },
  created () {
	  this.catalogueId = this.$route.params.catalogueId
  }
}
</script>
