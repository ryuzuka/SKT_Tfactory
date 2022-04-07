<template>
	<div class="contents" ref="contents">
		<router-link to="/experience/catalogue/part1">part1</router-link>
		<router-link to="/experience/catalogue/part2">part2</router-link>
	</div>
</template>

<script>
import Header from '../../../components/common/Header'

export default {
  name: 'Catalogue',
  components: {
	  Header
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  //@import 'src/assets/css/product';
</style>
<style lang="scss" scoped>
</style>
