<template src="../../assets/html/mypage/wish.html"></template>

<script>
import * as FAVORITE from '../../js/favorite.js'
import * as DEVICE from '../../js/kiosk.js'

export default {
  name: 'Wish',
  components: {},
  props: {},
  data () {
    return {
      favoriteList: [],
      favoriteListAll: [],
      favoriteLastIndex: 0,
      directShopList: [],
      directShopListAll: [],
      directShopLastIndex: 0,
      isSKT: null,
      isActiveTab: [true, false],
      isLoading: false
    }
  },
  methods: {
    clickTab (index) {
      this.isActiveTab = [false, false]
      this.isActiveTab[index] = true
      if (index === 0) {
        this.getFavoriteList()
      } else if (index === 1) {
        this.getDirecteShopList()
      }
    },
    getFavoriteList () {
      this.$loading.start()
      FAVORITE.getFavoriteList().then(result => {
        this.favoriteListAll = result

        if (result.length === 0) {
          this.$loading.stop()
        } else {
          result.forEach(device => {
            device.deviceImgs = device.deviceImgs.concat(device.twdImgArr)
            device.tagNms = device.tagNms.slice(0, 5)
          })
        }

        this.favoriteListAll = result
        this.favoriteList = this.favoriteListAll.slice(0, 10)
        this.favoriteLastIndex = 10
        this.$loading.stop()
      })
    },
    getDirecteShopList () {
      this.$loading.start()

      FAVORITE.getTwdClickDevice().then(directDevice => {
        this.directShopListAll = []
        directDevice.forEach((device) => {
          DEVICE.getDeviceInfo(device.productGroupID).then(deviceInfo => {
            if (deviceInfo !== undefined) {
              if (deviceInfo.detail[0].deviceImgs.length > 0) {
                deviceInfo.img = deviceInfo.detail[0].deviceImgs[0]
              } else {
                deviceInfo.img = deviceInfo.detail[0].twdImgArr[0]
              }
              deviceInfo.price = deviceInfo.detail[0].item[0].priceNew
              deviceInfo.tagNms = deviceInfo.tagNms.slice(0, 5)
              this.directShopListAll.push(deviceInfo)
            }
          }).then(() => {
            this.directShopList = this.directShopListAll.slice(0, 10)
            this.directShopLastIndex = 10
            this.$loading.stop()
          })
        })
      })
    },
    clickDelete (deviceGroupId) {
      this.$modal.show('dialog', {
        title: this.$t('my.alert-delete-product-guide'),
        buttons: [
          {
            title: this.$t('comm.yes'),
            class: 'btn-line',
            handler: () => {
              this.$modal.hide('dialog')
              this.deleteListData(deviceGroupId)
            }
          },
          {
            title: this.$t('comm.no'),
            class: 'btn-line'
          }
        ]
      })
    },
    deleteListData (deviceGroupId) {
      let deviceGroupIds = []
      deviceGroupIds.push(deviceGroupId)

      FAVORITE.removeFavorite(deviceGroupIds).then(result => {
        // console.log(result)
        this.getFavoriteList()
      })
    },
    openTWD (twdLink) {
      // console.log(twdLink)
      window.open(twdLink)
    },
    clickMore () {
      if (this.isActiveTab[0] === true) {
        let array = this.favoriteListAll.slice(this.favoriteLastIndex, this.favoriteLastIndex + 10)
        this.favoriteList = this.favoriteList.concat(array)
        this.favoriteLastIndex += 10
      } else if (this.isActiveTab[1] === true) {
        let array = this.directShopListAll.slice(this.directShopLastIndex, this.directShopLastIndex + 10)
        this.directShopList = this.directShopList.concat(array)
        this.directShopLastIndex += 10
      }
    }
  },
  filters: {
    currency: value => {
      if (!value) return ''
      let num = Number(value)
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    },
    makeHashTag: value => {
      return '#' + value + ' '
    }
  },
  created () {
    this.getFavoriteList()

    this.$cookies.get('MY_INFO').LINE_LIST.forEach(line => {
      if (line.REPRESENT_YN) {
        this.isSKT = true
      }
    })
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/mypage';
</style>
