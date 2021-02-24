<template src="../../assets/html/shop/shop-details.html"></template>

<script>
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
import ModalZone from '../shop/ModalZone'
import ModalImgViewer from '../shop/ModalImgViewer'
import UiSelect from '../../ui/UiSelect'
import Vue from 'vue'
import * as STORE from '../../js/store.js'

export default {
  name: 'ShopDetail',
  components: {
    UiSelect
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
      isOpenHour: false,
      locationAgree: false,
      storeDetail: {},
      lat: 37.55547231,
      long: 126.92233948,
      distance: '',
      map: {},
      storeId: 0
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
    readZone () {
      this.$modal.show(ModalZone, {
      }, {
        type: 'full'
      }, {
        // event
      })
    },
    openTmap () {
      window.location.href = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xxea7bfbc8f2074f16b2d26a9a335aa930&name=' +
        this.storeDetail.NAME + '&lat=' + this.storeDetail.LATITUDE + '&lon=' + this.storeDetail.LONGITUDE
    },
    clickLocation () {
      // TODO - 현 위치로 지도 이동
      // 위치 정보 제공 미동의 ( 위치 정보 제공 동의 안내 레이어 )
      this.$modal.show('dialog', {
        component: Vue.component('location-service-terms', {
          template:
            `<div>
              <div class="dialog-c-title">` + this.$t('sev.location-service-terms-guide') + `</div>
              <div class="dialog-c-text"><a href="#">` + this.$t('sev.read-location-service-terms') + `</a></div>
            </div>`
        }),
        buttons: [{
          title: this.$t('comm.disagree'),
          handler: () => {
            this.$modal.hide('dialog')
            // TODO - 위치 정보 이용 미동의
            this.locationAgree = false
          }
        }, {
          title: this.$t('comm.agree'),
          handler: () => {
            this.$modal.hide('dialog')
            // TODO - 위치 정보 이용 동의
            this.locationAgree = true
          }
        }],
        clickToClose: false
      })
    },
    initGeoLocation () {
      this.$getLocation().then(coordinates => {
        this.lat = coordinates.lat
        this.long = coordinates.lng
        this.setLocationInfo(this.$route.query.store_id)
      })
    },
    setLocationInfo (storeId) {
      STORE.getStoreInfo(storeId).then(result => {
        let distance = this.getdistanceFromLatLongInKm(this.lat, this.long, result.STORE.LATITUDE, result.STORE.LONGITUDE)
        if (distance >= 1000) {
          distance = (distance / 1000).toFixed(1) + ' km'
        } else {
          distance = distance + ' m'
        }
        this.distance = distance
        this.locationAgree = true
      })
    },
    getStoreInfo (storeId) {
      this.$loading.start()
      STORE.getStoreInfo(storeId).then(result => {
        this.$loading.stop()

        this.storeDetail = result.STORE
        this.setCenterLocation(this.storeDetail.LATITUDE, this.storeDetail.LONGITUDE)

        let day = new Date().getDay()
        let isWeekend = (day === 6) || (day === 0)
        let weekdaysOpen = this.storeDetail.OPENING_HOURS.split('/')[0]
        let weekendOpen = this.storeDetail.OPENING_HOURS.split('/')[1]
        weekdaysOpen = '평일 ' + weekdaysOpen.substring(0, 2) + ':' + weekdaysOpen.substring(2, 4) + '~' + weekdaysOpen.substring(4, 6) + ':' + weekdaysOpen.substring(6, 8)
        weekendOpen = '주말 ' + weekendOpen.substring(0, 2) + ':' + weekendOpen.substring(2, 4) + '~' + weekendOpen.substring(4, 6) + ':' + weekendOpen.substring(6, 8)
        if (isWeekend) {
          this.storeDetail.todayOpen = weekendOpen
          this.storeDetail.othersOpen = weekdaysOpen
        } else {
          this.storeDetail.todayOpen = weekdaysOpen
          this.storeDetail.othersOpen = weekendOpen
        }
      })
    },
    getdistanceFromLatLongInKm (lat1, long1, lat2, long2) {
      let R = 6371 // Radius of the earth in km
      let dLat = this.deg2rad(lat2 - lat1) // deg2rad below
      let dLon = this.deg2rad(long2 - long1)
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)

      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      let d = (R * c * 1000).toFixed(0) // Distance in m
      return d
    },
    initMap () {
      this.map = new Tmapv2.Map('map_div2',
        {
          width: '100%', // 지도의 넓이
          height: '380px' // 지도의 높이
        })
    },
    clickCounseling () {
      if (!this.$cookies.get('USER_AUTH')) {
        localStorage.setItem('previous_url', '/sev/booking/counseling/date/shop?store_id=' + this.storeId)
        this.$router.push({name: 'Login'})
      } else {
        this.$router.push('/sev/booking/counseling/date/shop?store_id=' + this.storeId)
      }
    },
    setCenterLocation (lat, long) {
      this.map.setCenter(new Tmapv2.LatLng(lat, long))
      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(lat, long),
        map: this.map
      })
    },
    deg2rad (deg) {
      return deg * (Math.PI / 180)
    }
  },
  created () {
    this.initGeoLocation()
  },
  mounted () {
    this.storeId = this.$route.query.store_id
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
