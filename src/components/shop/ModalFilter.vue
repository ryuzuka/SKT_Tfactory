<template src="../../assets/html/shop/pop-filter.html"></template>

<script>
import * as STORE_FILTER from '../../constant/storeType.js'

export default {
  name: 'ModalFilter',
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      STORE_FILTER: {
        STORE_TYPES: {},
        STORE_WORKS: {},
        STORE_PROGRAMS: {},
        STORE_COUNSELINGS: {},
        STORE_EXPERIENCES: {}
      },
      filterData: {
        STORE_TYPE: '',
        COUNSELINGS: [],
        WORKS: [],
        EXPERIENCES: [],
        PROGRAMS: []
      }
    }
  },
  mounted () {
    console.log(this.$props.data.storeFilter)
    this.STORE_FILTER = STORE_FILTER
    this.filterData = this.$props.data.storeFilter
  },
  methods: {
    reset () {
      this.filterData = {
        STORE_TYPE: '',
        COUNSELINGS: [],
        WORKS: [],
        EXPERIENCES: [],
        PROGRAMS: []
      }
    },
    applyFilter () {
      this.$parent.$emit('apply-filter', this.filterData)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
</style>
