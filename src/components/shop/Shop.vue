<template src="../../assets/html/shop/shop.html"></template>

<script>
import FindList from '../shop/FindList'
import FindMap from '../shop/FindMap'
import ModalFilter from '../shop/ModalFilter'

import * as STORE from '../../js/store.js'

export default {
  name: 'Shop',
  components: {
    FindList,
    FindMap
  },
  props: {
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
    searchText: {
      type: String
    }
  },
  data () {
    return {
      isSearch: false,
      listShop: [],
      listMap: [],
      findType: 'list',
      shopTypeText: this.$t('comm.all'),
      checkedLength: 0,
      locationAgree: false,
      storeFilter: {
        STORE_TYPE: '',
        COUNSELINGS: [],
        WORKS: [],
        EXPERIENCES: [],
        PROGRAMS: []
      },
      lat: 0,
      long: 0,
      fromIndex: 0,
      lineID: null,
      nearHomeStore: {},
      nearWorkStore: {},
      isFirstTime: true
    }
  },
  computed: {
    isFilterActive () {
      if (this.shopType === 'all' && this.checkedLength === 0) {
        return false
      } else {
        return true
      }
    },
    filterText () {
      if (this.checkedLength === 0) {
        return this.shopTypeText
      } else {
        return '<em>' + this.shopTypeText + '</em> ' + this.$t('comm.except') + ' ' + this.checkedLength + this.$t('comm.the-number')
      }
    }
  },
  methods: {
    openFilter () {
      this.$modal.show(ModalFilter, {
        // TODO - filter data
        data: {
          'storeFilter': this.storeFilter
        }
      }, {
        type: 'full'
      }, {
        'apply-filter': data => {
          this.applyFilter(data)
        }
      })
    },
    applyFilter (data) {
      this.checkedLength = 0
      Object.keys(data).forEach(key => {
        if (key === 'STORE_TYPE' && data['STORE_TYPE']) {
          this.checkedLength += 1
        } else {
          this.checkedLength += data[key].length
        }
      })
      this.storeFilter = data
      this.initList()
      this.findShop(this.storeFilter)
    },
    toggleFindType (type) {
      this.findType = type
    },
    findShop (storeFilter) {
      if (this.lat === 0 && this.long === 0) {
        this.lat = 37.55547231
        this.long = 126.92233948
      }
      if (storeFilter.KEYWORD) {
        this.initList()
      }
      storeFilter = Object.assign(this.storeFilter, storeFilter)
      STORE.findStore(this.lineID, this.lat, this.long, this.fromIndex, storeFilter).then(result => {
        this.isSearch = true
        if (this.isFirstTime) {
          this.isFirstTime = false
          if (result.NEAR_HOME_STORE.LOCATION) {
            result.NEAR_HOME_STORE.distance = this.getdistanceFromLatLongInKm(this.lat, this.long, result.NEAR_HOME_STORE.LOCATION.lat, result.NEAR_HOME_STORE.LOCATION.lon)
            result.NEAR_HOME_STORE.recommendation = true
            this.listShop.push(result.NEAR_HOME_STORE)
          }
          if (result.NEAR_WORK_STORE.LOCATION) {
            result.NEAR_WORK_STORE.distance = this.getdistanceFromLatLongInKm(this.lat, this.long, result.NEAR_WORK_STORE.LOCATION.lat, result.NEAR_WORK_STORE.LOCATION.lon)
            result.NEAR_WORK_STORE.recommendation = true
            this.listShop.push(result.NEAR_WORK_STORE)
          }
        }

        result.STORES.forEach((location) => {
          location.distance = this.getdistanceFromLatLongInKm(this.lat, this.long, location.LOCATION.lat, location.LOCATION.lon)
        })

        this.listShop = this.listShop.concat(result.STORES)
        this.listMap = this.listShop
        this.fromIndex += 10
      })
    },
    findMore () {
      this.findShop(this.storeFilter)
    },
    initList () {
      this.listShop = []
      this.fromIndex = 0
    },
    initGeoLocation () {
      this.initList()
      this.$loading.start()
      this.$getLocation().then(coordinates => {
        this.lat = coordinates.lat
        this.long = coordinates.lng
        this.locationAgree = true
        this.$loading.stop()
        this.findShop({})
      }).catch(e => {
        this.$loading.stop()
        this.findShop({})
      })
    },
    setLatLongFromMap (e) {
      this.initList()
      this.lat = e._lat
      this.long = e._lng
      this.findShop(this.storeFilter)
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

      if (d >= 1000) {
        d = (d / 1000).toFixed(1) + ' km'
      } else {
        d = d + ' m'
      }

      return d
    },
    deg2rad (deg) {
      return deg * (Math.PI / 180)
    }
  },
  created () {
    if (this.$cookies.get('MY_INFO')) {
      this.$cookies.get('MY_INFO').LINE_LIST.forEach(line => {
        if (line.REPRESENT_YN) {
          this.lineID = line.LINE_ID
        }
      })
    }

    this.initGeoLocation()
    this.$on('more-find-list', this.findMore)
    this.$EventBus.$on('find-shop', this.findShop)
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/shop';
</style>
