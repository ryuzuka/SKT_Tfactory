import axios from 'axios'

const MLS_URL = process.env.SERVER_URL + '/mls'

const sortJsonArray = (a, b) => {
  if (a.ratio === b.ratio) { return 0 } return a.ratio < b.ratio ? 1 : -1
}

export const getStatistics = (deviceGroupId) => {
  let request = {
    'reqId': 'test_reqId',
    'profileId': 'item_group',
    'itemId': deviceGroupId,
    'keys': ['dist_color_by_eqpg', 'dist_capa_by_eqpg']
  }

  return axios.post(MLS_URL + '/getItemProfile', request).then(response => {
    if (response.status === 200) {
      // console.log(JSON.parse(response.data.respBody).results.dist_eqp_mdl_size)
      let sortColor = JSON.parse(response.data.respBody).results.dist_color_by_eqpg.sort(sortJsonArray)
      let sortSize = JSON.parse(response.data.respBody).results.dist_capa_by_eqpg.sort(sortJsonArray)

      let result = {
        'dist_color_nm': sortColor,
        'dist_eqp_mdl_size': sortSize
      }
      return result
    }
  })
}

export const getStatisticsWithSegment = (deviceGroupId, segmentId) => {
  let request = {
    'reqId': 'test_reqId',
    'profileId': 'item_group',
    'itemId': deviceGroupId + segmentId,
    'keys': ['dist_color_by_eqpg_seg', 'dist_capa_by_eqpg_seg']
  }

  return axios.post(MLS_URL + '/getItemProfile', request).then(response => {
    if (response.status === 200) {
      let sortColor = JSON.parse(response.data.respBody).results.dist_color_by_eqpg_seg.sort(sortJsonArray)
      let sortSize = JSON.parse(response.data.respBody).results.dist_capa_by_eqpg_seg.sort(sortJsonArray)

      let result = {
        'dist_color_nm': sortColor,
        'dist_eqp_mdl_size': sortSize
      }
      return result
    }
  })
}

export const getOrgProductSale = (orgId) => {
  let request = {
    reqId: 'test_reqId',
    profileId: 'org',
    itemId: orgId,
    keys: ['product_sales']
  }

  return axios.post(MLS_URL + '/getItemProfile', request).then(response => {
    if (response.status === 200) {
      return JSON.parse(response.data.respBody).results.product_sales
    }
  })
}
