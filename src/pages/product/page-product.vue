<template>
  <div class="wrap product-details">
    <Header type="home" :class="{scrolled: headerScrolled}" :title="productName"></Header>
    <product
      v-on:product-name="setProductName"
      v-on:header-scrolled="toggleHeaderScrolled"
    ></product>
    <modals-container></modals-container>
    <v-dialog></v-dialog>
  </div>
</template>

<script>
import Header from '../../components/common/Header'
import Product from '../../components/product/Product'

export default {
  name: 'page-product',
  components: {
    Header,
    Product
  },
  data () {
    return {
      headerScrolled: false,
      productName: ''
    }
  },
  methods: {
    toggleHeaderScrolled (e) {
      this.headerScrolled = e.isScrolled
    },
    setProductName (e) {
      this.productName = e.productName
    }
  }
}
</script>
