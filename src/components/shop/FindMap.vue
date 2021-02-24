<template src="../../assets/html/shop/find-map.html"></template>

<script>
/* eslint no-undef: "off" */
/* eslint no-new: "off" */

export default {
  name: 'FindMap',
  props: {
    findType: String,
    listMap: {
      type: Array
    },
    locationAgree: {
      type: Boolean
    },
    bookingType: {
      type: String,
      default: ''
    },
    selectType: {
      type: String,
      default: ''
    },
    selectedService: {
      type: Number
    },
    lat: {
      type: Number
    },
    long: {
      type: Number
    }
  },
  data () {
    return {
      map: {},
      localLocationAgree: this.locationAgree,
      activeIndex: 0,
      addressType: [],
      shopInfoSwiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        touchRatio: 0.2,
        on: {
          slideChange: () => {
            let realIndex = this.$refs.shopInfoSwiper.swiper.realIndex
            this.activeIndex = realIndex
            this.setCenterLocation(this.listMap[this.activeIndex].LOCATION.lat, this.listMap[this.activeIndex].LOCATION.lon)
          }
        }
      }
    }
  },
  watch: {
    findType (status) {
      if (status === 'map') {
        this.$refs.shopInfoSwiper.update()
        this.initMap()
      }
    },
    listMap (list) {
      this.addressType = list.map((value, index) => {
        if (!this.addressType[index]) {
          return {type: 'road'}
        } else {
          return this.addressType[index]
        }
      })
      this.clickShopPoint(0)
      this.setCenterLocation(this.listMap[0].LOCATION.lat, this.listMap[0].LOCATION.lon)
    }
  },
  methods: {
    clickShopPoint (index) {
      this.activeIndex = index
      this.$refs.shopInfoSwiper.swiper.slideTo(this.activeIndex)
    },
    toggleAddressType (index) {
      this.addressType[index].type = this.addressType[index].type === 'road' ? 'number' : 'road'
    },
    findlocalLocation () {
      this.$emit('set-latlong', this.map.getCenter())
      this.activeIndex = 0
      this.setCenterLocation(this.listMap[0].LOCATION.lat, this.listMap[0].LOCATION.lon)
    },
    clickLocation () {
      this.$emit('set-location')
      this.activeIndex = 0
      this.setCenterLocation(this.listMap[0].LOCATION.lat, this.listMap[0].LOCATION.lon)
    },
    clickShop (STORE_ID) {
      if (this.bookingType) {
        // 서비스 예약
        this.$router.push('/sev/booking/' + this.bookingType + '/date/' + this.selectType + '?selectedService=' + this.selectedService)
      } else {
        // 매장 상세
        this.$router.push('/shop/detail?store_id=' + STORE_ID)
      }
    },
    initMap () {
      this.map = new Tmapv2.Map('map_div',
        {
          width: '100%',
          height: '100%',
          zoom: 15
        })
      this.setCenterLocation(this.listMap[this.activeIndex].LOCATION.lat, this.listMap[this.activeIndex].LOCATION.lon)
    },
    setCenterLocation (lat, long) {
      this.map.setCenter(new Tmapv2.LatLng(lat, long))
      this.listMap.forEach((store, storeIndex) => {
        let marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(store.LOCATION.lat, store.LOCATION.lon),
          map: this.map
        })
        marker.addListener('click', function () {
          if (app.$children[0].$children[0].$children[1].$children[1].clickShopPoint) {
            app.$children[0].$children[0].$children[1].$children[1].clickShopPoint(storeIndex)
          } else {
            app.$children[0].$children[0].$children[1].$children[0].clickShopPoint(storeIndex)
          }
        })
      })
    }
  },
  created () {
    this.addressType = this.listMap.map(() => {
      return {type: 'road'}
    })
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
</style>
