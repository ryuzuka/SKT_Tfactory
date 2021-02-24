<template src="../../../assets/html/service/booking/pop-map.html"></template>

<script>
/* eslint no-undef: "off" */
/* eslint no-new: "off" */

import * as STORE from '../../../js/store.js'

export default {
  name: 'ReadMap',
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      addressType: 'road',
      isOpenHour: false,
      locationAgree: false,
      map: {},
      storeDetail: {}
    }
  },
  methods: {
    clickLocation () {},
    openTmap () {
      window.location.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xxea7bfbc8f2074f16b2d26a9a335aa930&name=' +
        this.storeDetail.NAME + '&lat=' + this.storeDetail.LATITUDE + '&lon=' + this.storeDetail.LONGITUDE
    },
    initMap () {
      this.map = new Tmapv2.Map('map_div',
        {
          width: '100%', // 지도의 넓이
          height: '380px' // 지도의 높이
        })
    },
    setCenterLocation (lat, long) {
      this.map.setCenter(new Tmapv2.LatLng(lat, long))
      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(lat, long),
        map: this.map
      })
    },
    getStoreInfo (storeId) {
      STORE.getStoreInfo(storeId).then(result => {
        this.storeDetail = result.STORE
        this.setCenterLocation(this.storeDetail.LATITUDE, this.storeDetail.LONGITUDE)

        if (this.storeDetail.WORKS) {
          this.storeDetail.WORKS = this.storeDetail.WORKS.split(',')
        }
        if (this.storeDetail.COUNSELINGS) {
          this.storeDetail.COUNSELINGS = this.storeDetail.COUNSELINGS.split(',')
        }
        if (this.storeDetail.EXPERIENCES) {
          this.storeDetail.EXPERIENCES = this.storeDetail.EXPERIENCES.split(',')
        }
        if (this.storeDetail.PROGRAMS) {
          this.storeDetail.PROGRAMS = this.storeDetail.PROGRAMS.split(',')
        }

        let day = new Date().getDay()
        let isWeekend = (day === 6) || (day === 0)
        let weekdaysOpen = this.storeDetail.OPENING_HOURS.split('/')[0]
        let weekendOpen = this.storeDetail.OPENING_HOURS.split('/')[1]
        weekdaysOpen = '평일' + weekdaysOpen.substring(0, 2) + ':' + weekdaysOpen.substring(2, 4) + '~' + weekdaysOpen.substring(4, 6) + ':' + weekdaysOpen.substring(6, 8)
        weekendOpen = '주말' + weekendOpen.substring(0, 2) + ':' + weekendOpen.substring(2, 4) + '~' + weekendOpen.substring(4, 6) + ':' + weekendOpen.substring(6, 8)
        if (isWeekend) {
          this.storeDetail.todayOpen = weekendOpen
          this.storeDetail.othersOpen = weekdaysOpen
        } else {
          this.storeDetail.todayOpen = weekdaysOpen
          this.storeDetail.othersOpen = weekendOpen
        }
      })
    }
  },
  mounted () {
    this.getStoreInfo(this.$route.query.store_id)
    this.initMap()
  },
  filters: {
    mdnFilter (data) {
      let mdn = data.replace(/[^0-9]/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3').replace('--', '-')
      return mdn
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/shop';
</style>
<!-- // 04.09 수정: 매장찾기 상세와 통일 -->
