import axios from 'axios'
import * as COMMON from './common.js'

const CSP_URL = process.env.SERVER_URL + '/csp/rest'

export const getMyVAS = (svcNum, mdn) => {
  let request = {
    'reqId': 'TPA_WEB',
    'svcMgmtNum': svcNum,
    'svcNum': mdn
  }

  return axios.post(CSP_URL + '/SUKEY00046', request, COMMON.getHeader()).then(response => {
    return response.data.respBody.body
  })
}

export const getVASInfo = (vas) => {
  let request = {
    'reqId': 'TPA_WEB',
    'prodId': vas
  }

  return axios.post(CSP_URL + '/SSWG000091', request, COMMON.getHeader()).then(response => {
    return response.data.respBody.item.svcBriefCtt
  })
}
