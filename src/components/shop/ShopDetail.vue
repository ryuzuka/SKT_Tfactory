<template src="../../assets/html/shop/shop-details.html"></template>

<script>
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
import ModalImgViewer from '../shop/ModalImgViewer'
import UiSelect from '../../ui/UiSelect'
import * as STORE from '../../js/store.js'

import CrewClass from './detail/CrewClass'

export default {
  name: 'ShopDetail',
  components: {
    UiSelect,
    CrewClass
  },
  data () {
    return {
      shopGalleryList: [],
      shopGalleryOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      addressType: 'road',
      map: {},
      storeId: 0,
      classList: [],
      location: {
        lat: 37.55547231,
        long: 126.92233948
      }
    }
  },
  methods: {
    readImgViewer (index) {
      this.$modal.show(ModalImgViewer, {
        data: {
          activeIndex: index,
          imgList: this.shopGalleryList
        }
      }, {
        type: 'full'
      }, {
        // event
      })
    },
    openTmap () {
      window.location.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xxea7bfbc8f2074f16b2d26a9a335aa930&name=T Factory&lat=' + this.location.lat + '&lon=' + this.location.long
    },
    initMap () {
      let lat = 37.55547231
      let long = 126.92233948

      this.map = new Tmapv2.Map('map_div',
        {
          center: new Tmapv2.LatLng(lat, long),
          height: '280px'
        })

      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(lat, long),
        map: this.map
      })
    }
  },
  mounted () {
    this.initMap()
    STORE.getProgramClassList().then(result => {
      result.CLASSES.forEach((crewClass) => {
        if (crewClass.TYPE === 'class') {
          this.classList.push(crewClass)
        }
      })
    })
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
@import 'src/assets/css/main';
</style>
