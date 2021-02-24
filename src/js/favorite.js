import axios from 'axios'
import * as COMMON from './common.js'

const FAVORITE_URL = process.env.SERVER_URL + '/kiosk/front/api'
const TWD_URL = process.env.SERVER_URL + '/user/getTWDProducts'

export const addFavorite = (deviceGroupIds) => {
  let request = {
    'productGrpIds': [deviceGroupIds]
  }

  return axios.post(FAVORITE_URL + '/addFavorite', request, COMMON.getHeader()).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      // TODO: Error Alert
    }
  })
}

export const getFavoriteList = () => {
  return axios.post(FAVORITE_URL + '/getFavoriteList', {}, COMMON.getHeader()).then(response => {
    if (response.status === 200) {
      return response.data.data
    } else {
      // TODO: Error Alert
    }
  })
}

export const removeFavorite = (deviceGroupIds) => {
  let request = {
    'productGrpIds': deviceGroupIds
  }

  return axios.post(FAVORITE_URL + '/removeFavorite', request, COMMON.getHeader()).then(response => {
    if (response.status === 200) {
      return response.data
    } else {
      // TODO: Error Alert
    }
  })
}

export const getTwdClickDevice = () => {
  return axios.get(TWD_URL, COMMON.getHeader()).then(response => {
    if (response.status === 200) {
      return response.data.PRODUCT_LIST
    }
  })
}
