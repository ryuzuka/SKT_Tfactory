import axios from 'axios'
import * as COMMON from './common.js'

const STORE_URL = process.env.SERVER_URL + '/store'
const ADMIN_URL = process.env.SERVER_URL + '/admin'

let tworldFlag = window.location.origin.includes('reservation')

/** 01. 악세사리 관련 기능 **/
export const getAccessoryInfo = (code) => {
  if (code && (code !== 'null')) {
    return axios.get(STORE_URL + '/accessory/info?ACCESSORY_CODE=' + code).then(response => {
      return response.data
    })
  }
}

/** 02. 매장 관련 기능 **/
export const getStoreId = (storeCode) => {
  return axios.get(STORE_URL + '/store/id?STORE_CODE=' + storeCode).then(response => {
    return response.data.STORE_ID
  })
}

export const getStoreInfo = (stordId) => {
  return axios.get(STORE_URL + '/store/info?STORE_ID=' + stordId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const findStore = (lineID, lat, long, from, storeFilter) => {
  let request = {
    'LATITUDE': lat,
    'LONGITUDE': long,
    'FROM': from,
    'SIZE': 10,
    'LINE_ID': lineID
  }

  request = Object.assign(request, storeFilter)
  return axios.post(STORE_URL + '/store/find', request).then(response => {
    return response.data
  })
}

export const getNearestStore = (lat, long) => {
  let request = {
    'LATITUDE': lat,
    'LONGITUDE': long
  }

  return axios.get(STORE_URL + '/store/nearestStore', request).then(response => {
    return response.data
  })
}

export const getZoneInfo = (storeId) => {
  return axios.get(STORE_URL + '/zone/list?STORE_ID=' + storeId).then(response => {
    return response.data
  })
}

/** 03. 예약 관련 기능 **/
export const getAvailableDate = (storeId, day) => {
  return axios.get(STORE_URL + '/counselingBook/checkDate?STORE_ID=' + storeId + '&DAY=' + day, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getQuestions = (counselingId) => {
  return axios.get(STORE_URL + '/basicSurveyQuestion/questions?COUNSELING_ID=' + counselingId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getCounselingList = () => {
  return axios.get(STORE_URL + '/counseling/list', COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getCounselingListForStore = (storeId) => {
  return axios.get(STORE_URL + '/storeCounseling/list?STORE_ID=' + storeId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const bookCounseling = (bookInfo) => {
  if (tworldFlag) {
    bookInfo['FROM_SERVICE'] = 'tworld'
  }
  return axios.post(STORE_URL + '/counselingBook/book', bookInfo, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const modifyCounseling = (bookInfo) => {
  if (tworldFlag) {
    bookInfo['FROM_SERVICE'] = 'tworld'
  }
  return axios.post(STORE_URL + '/counselingBook/update', bookInfo, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const cancelCounseling = (bookInfo) => {
  let request = {
    'BOOK_ID': bookInfo
  }

  return axios.post(STORE_URL + '/counselingBook/cancel', request, COMMON.getHeader()).then(response => {
    console.log(response.data)
    return response.data
  })
}

export const getMyBookingList = (lastBookId) => {
  let requestURL = ''

  if (lastBookId > 0) {
    requestURL = '&LAST_BOOK_ID=' + lastBookId
  }
  return axios.get(STORE_URL + '/book/list?SIZE=10' + requestURL, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getBookingInfo = (bookingId) => {
  return axios.get(STORE_URL + '/book/info?BOOK_ID=' + bookingId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getCounselingSurveyInfo = (salesGroupId) => {
  return axios.get(STORE_URL + '/counselingBook/basicSurvey?SALE_CNSL_GRP_ID=' + salesGroupId).then(response => {
    return response.data
  })
}

export const bookOnSiteCounseling = (bookInfo) => {
  return axios.post(STORE_URL + '/fieldBook/book', bookInfo, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getOnSiteCounselingInfo = (bookId) => {
  return axios.get(STORE_URL + '/fieldBook/info?BOOK_ID=' + bookId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const cancelOnSiteCounseling = (bookId) => {
  let request = {
    'BOOK_ID': bookId
  }
  return axios.post(STORE_URL + '/fieldBook/cancel', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

/** 03. 프로그램 관련 기능 **/
export const getProgramClassList = () => {
  return axios.get(STORE_URL + '/programClass/list?STORE_ID=' + process.env.FLAGSHIP_STORE_ID).then(response => {
    return response.data
  })
}

export const getProgramClass = (classId) => {
  return axios.get(STORE_URL + '/programClass/info?PROGRAM_CLASS_ID=' + classId).then(response => {
    return response.data
  })
}

export const getProgramClassBook = (classId) => {
  return axios.get(STORE_URL + '/programClass/listBooks?PROGRAM_CLASS_ID=' + classId).then(response => {
    return response.data
  })
}

export const getStoreProgram = (storeId) => {
  return axios.get(STORE_URL + '/storeProgram/list?STORE_ID=' + storeId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getProgramTimeTable = (storeId, programId) => {
  return axios.get(STORE_URL + '/programBook/check?STORE_ID=' + storeId + '&PROGRAM_CLASS_ID=' + programId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const bookProgram = (request) => {
  return axios.post(STORE_URL + '/programBook/book', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const applyProgram = (applyInfo) => {
  return axios.post(STORE_URL + '/programBook/apply', applyInfo, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const modifyProgram = (request) => {
  return axios.post(STORE_URL + '/programBook/update', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}
export const getPrgramBookInfo = (bookId) => {
  return axios.get(STORE_URL + '/programBook/info?BOOK_ID=' + bookId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const cancelProgram = (bookId) => {
  let request = {
    BOOK_ID: bookId
  }
  return axios.post(STORE_URL + '/programBook/cancel', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

/* 공지사항 */
export const getPopUpContent = (storeId) => {
  return axios.get(ADMIN_URL + '/popup/now?STORE_ID=' + process.env.MYTAG_STORE_ID).then(response => {
    return response.data
  })
}
