'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // NODE_ENV: "'development'",
  // SERVER_URL: "'https://dev.tsharp.io/api'",
  // FLAGSHIP_STORE_ID: 19868,
  // MYTAG_STORE_ID: 23241,
  // FLAGSHIP_ORG_ID: 1000245068,
  // PAYMENT_ENV: "'DEV'",
  // PAYMENT_OWNER_ID: "'N3270SKTPS1000'",
  // POC_DEVICE_ID: 69,
  // DT_WEB: "'https://dev-dt.tsharp.io/'"
})
