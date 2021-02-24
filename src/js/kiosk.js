import axios from 'axios'

const DEVICE_URL = process.env.SERVER_URL + '/kiosk/front/api'

export const getDeviceInfo = (deviceGroupId) => {
  let request = {
    'productGrpId': deviceGroupId
  }

  return axios.post(DEVICE_URL + '/deviceInfo', request).then(response => {
    if (response.status === 200 && response.data.retCode === '00') {
      return response.data.data
    } else {
      // TODO: Error Alert
    }
  })
}

export const getVASInfo = (subscriptionId) => {
  return axios.get(DEVICE_URL + '/crossSellList?subscriptionId=' + subscriptionId).then(response => {
    if (response.status === 200 && response.data.retCode === '00') {
      return response.data.data[0]
    } else {
      // TODO: Error Alert
    }
  })
}
