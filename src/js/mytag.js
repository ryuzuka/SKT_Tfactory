import axios from 'axios'
import * as COMMON from './common.js'

const USER_URL = process.env.SERVER_URL + '/user'
const STORE_ID = process.env.MYTAG_STORE_ID

export const getMyTags = () => {
  return axios.get(USER_URL + '/mytags?STORE_ID=' + STORE_ID, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const chooseMyTags = (tags) => {
  // console.log(tags)
  let request = {
    'MYTAG_ID_LIST': tags
  }

  return axios.post(USER_URL + '/chooseMytag', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getZoneRecommend = () => {
  let request = {
    STORE_ID: STORE_ID
  }

  return axios.post(USER_URL + '/recommends', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getTimelines = () => {
  return axios.get(USER_URL + '/timelines', COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const likeTimeline = (timeLineId, likeFlag) => {
  let request = {
    'TIMELINE_ID': timeLineId,
    'LIKE_YN': likeFlag
  }

  return axios.post(USER_URL + '/likeTimeline', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const addTimeline = (expCode, extraInfo, imageURL) => {
  let request = {
    'EXP_CODE': expCode,
    'STORE_ID': STORE_ID,
    'EXTRA_INFO': extraInfo
  }

  if (imageURL) {
    request['IMAGE_URL'] = imageURL
  }

  return axios.post(USER_URL + '/addTimeline', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const afterMarketings = (mdn, certCode) => {
  let request = {
    ENCRYPTED_MDN: mdn,
    STORE_ID: STORE_ID,
    CERT_CODE: certCode
  }
  return axios.post(USER_URL + '/afterMarketings', request).then(response => {
    return response.data
  })
}

export const afterMarketingsForUser = (lineId, storeId) => {
  let request = {
    LINE_ID: lineId,
    STORE_ID: storeId
  }
  return axios.post(USER_URL + '/afterMarketingsForUser', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}
