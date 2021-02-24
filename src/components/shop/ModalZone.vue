<template src="../../assets/html/shop/pop-zone.html"></template>

<script>
import * as STORE from '../../js/store.js'

export default {
  name: 'ModalZone',
  data () {
    return {
      isActiveFloors: [],
      isActiveContent: [],
      zoneInfo: {},
      floors: [],
      floorsZone: {},
      zoneCategory: ['시그니처', '체험', '휴대폰 구매/업무', '쇼핑']
    }
  },
  methods: {
    clickFloor (index) {
      this.setFloorZoneInfo(index)

      this.isActiveFloors = this.isActiveFloors.map((val, idx) => {
        if (index === idx) {
          if (this.isActiveFloors[index]) {
            return false
          } else {
            return true
          }
        } else {
          return false
        }
      })
    },
    clickContent (floorIndex, contentIndex) {
      this.isActiveContent[floorIndex] = this.isActiveContent[floorIndex].map((value, index) => {
        if (index === contentIndex) {
          return true
        } else {
          return false
        }
      })
      this.$forceUpdate()
    },
    setZoneInfo (zoneInfo) {
      zoneInfo.forEach(zone => {
        if (!this.zoneInfo[zone.FLOOR]) {
          this.zoneInfo[zone.FLOOR] = []
        }
        this.zoneInfo[zone.FLOOR].push(zone)
      })

      for (let i = 0; i < Object.keys(this.zoneInfo).length; i++) {
        this.floors.push(this.zoneInfo[Object.keys(this.zoneInfo)[i]])
      }
      this.floors = this.floors.sort(this.sortJsonArray)

      this.isActiveFloors = this.floors.map((data, index) => {
        this.isActiveContent.push([true, false, false, false])
        if (index === this.floors.length - 1) {
          return true
        } else {
          return false
        }
      })
      this.setFloorZoneInfo(this.floors.length - 1)
      // console.log(this.floors)
    },
    setFloorZoneInfo (index) {
      this.floorsZone = []
      this.floors[index].forEach(zone => {
        if (!this.floorsZone[zone.ZONE_CATEGORY_NAME]) {
          this.floorsZone[zone.ZONE_CATEGORY_NAME] = []
        }
        this.floorsZone[zone.ZONE_CATEGORY_NAME].push(zone)
      })

      console.log(this.floorsZone)
    },
    sortJsonArray (a, b) {
      if (parseFloat(a[0].FLOOR) === parseFloat(b[0].FLOOR)) { return 0 }
      return parseFloat(a[0].FLOOR) < parseFloat(b[0].FLOOR) ? 1 : -1
    }
  },
  mounted () {
    STORE.getZoneInfo(this.$route.query.store_id).then(result => {
      this.setZoneInfo(result.ZONES)
    })
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/shop';
</style>
