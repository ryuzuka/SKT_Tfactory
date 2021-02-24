import axios from 'axios'
import * as COMMON from './common.js'

const PAY_URL = 'https://sktps.arumnet.com/sk/payment.do?token=0N3270SKTPS&'
const STORE_URL = process.env.SERVER_URL + '/store'
const SECURITY_URL = process.env.SERVER_URL + '/security/vendingMachine/prePayment/callback'

export const callPayment = (data) => {
  window.location.href = PAY_URL + data
}

export const vendingCallback = (qr) => {
  let request = {
    'qrCode': qr
  }

  return axios.post(SECURITY_URL, request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getPurchaseHistory = (lastReceiptId) => {
  let requestURL = ''

  if (lastReceiptId > 0) {
    requestURL = '?LAST_RECEIPT_ID=' + lastReceiptId
  }

  return axios.get(STORE_URL + '/receipt/my' + requestURL, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getReceiptInfo = (receiptId) => {
  return axios.get(STORE_URL + '/receipt/info?RECEIPT_ID=' + receiptId, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getReceiptId = (invNum) => {
  return axios.get(STORE_URL + '/receipt/infoByInvNumber?INV_NUMBER=' + invNum, COMMON.getHeader()).then(response => {
    return response.data
  })
}
