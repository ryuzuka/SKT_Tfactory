import axios from 'axios'

const TID_URL = process.env.SERVER_URL + '/tid'
let tworldFlag = window.location.origin.includes('reservation')

export const tidLoginRedirect = (callback) => {
  let request = {
    'sso_login_id': '',
    'chnl_q': encodeURI(callback)
  }

  if (tworldFlag) {
    request['tidAppName'] = 'tworld_reservation'
  }

  axios.post(TID_URL + '/loginRedirect', request).then(response => {
    if (response.status === 200) {
      window.location.href = response.data.respBody
    } else {
      // TODO: Error Alert
    }
  })
}

export const tidJoinRedirect = (callback) => {
  let request = {
    'chnl_q': encodeURI(callback)
  }

  if (tworldFlag) {
    request['tidAppName'] = 'tworld_reservation'
  }

  axios.post(TID_URL + '/joinRedirect', request).then(response => {
    if (response.status === 200) {
      window.location.href = response.data.respBody
    } else {
      // TODO: Error Alert
    }
  })
}

export const loginRedirectSso = (ssoLoginId, callback) => {
  let request = {
    'sso_login_id': ssoLoginId,
    'chnl_q': encodeURI(callback)
  }

  if (tworldFlag) {
    request['tidAppName'] = 'tworld_reservation'
  }

  axios.post(TID_URL + '/loginRedirectSso', request).then(response => {
    if (response.status === 200) {
      window.location.href = response.data.respBody
    } else {
      // TODO: Error Alert
    }
  })
}

export const tidLogout = (callback) => {
  let request = {
    'chnl_q': encodeURI(callback)
  }

  if (tworldFlag) {
    request['tidAppName'] = 'tworld_reservation'
  }

  axios.post(TID_URL + '/logoutRedirect', request).then(response => {
    if (response.status === 200) {
      window.location.href = response.data.respBody
    } else {
      // TODO: Error Alert
    }
  })
}

// export const transRealName = (callback) => {
//   let request = {
//     'chnl_q': encodeURI(callback),
//     'login_id': this.$cookies.get('MY_INFO').TID_SUBS_ID
//   }
//
//   return axios.post(TID_URL + '/transRealName', request).then(response => {
//     if (response.status === 200) {
//       window.location.href = response.data.respBody
//     } else {
//       // TODO: Error Alert
//     }
//   })
// }
