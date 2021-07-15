import axios from 'axios'
import * as COMMON from './common.js'

const USER_URL = process.env.SERVER_URL + '/user'
const AUTH_URL = process.env.SERVER_URL + '/auth'

/*
 * USER_MANAGER
 */
export const signInOrUpTID = (data) => {
  let request = {
    'ID_TOKEN': data.id_token,
    'POC_CODE': 'POC_TPA'
  }

  if (data.id_token) {
    return axios.post(USER_URL + '/signInOrUpTID', request)
      .then(response => {
        let header = {
          headers: {
            'x-access-token': response.data.ACCESS_TOKEN
          }
        }
        return axios.get(USER_URL + '/my', header)
          .then(myinfo => {
            myinfo.data.LINE_LIST.forEach(line => {
              if (line.REPRESENT_YN) {
                let mdn = line.MDN.substring(0, 3) + '-' + line.MDN.substring(3, 7) + '-' + line.MDN.substring(7, 11)
                myinfo.data.MDN = mdn
              }
            })
            let cookiesName = 'MY_INFO'
            let cookiesValue = JSON.stringify(myinfo.data)
            document.cookie = encodeURIComponent(cookiesName) + '=' + encodeURIComponent(cookiesValue)
            return response.data
          })
      })
  }
}

export async function signInTID (ID_TOKEN) {
  let request = {
    'ID_TOKEN': ID_TOKEN
  }

  if (ID_TOKEN) {
    let auth = (await axios.post(USER_URL + '/checkInTID', request)).data
    await setMyInfo(auth.ACCESS_TOKEN)
    return auth
  }
  //
  // if (ID_TOKEN) {
  //   let checkResult = (await axios.post(USER_URL + '/checkTIDUser', request)).data
  //   if (checkResult.TID_USER_YN) {
  //     let auth = (await axios.post(USER_URL + '/signInTID', request)).data
  //     await setMyInfo(auth.ACCESS_TOKEN)
  //
  //     return auth
  //   } else if (!checkResult.TID_USER_YN) {
  //     let result = {}
  //     if (checkResult.LINE_LIST.length > 0) {
  //       result = {RET_CODE: 1, LINE_LIST: checkResult.LINE_LIST}
  //     } else {
  //       result = {RET_CODE: 2}
  //     }
  //
  //     return result
  //   }
  // }
}

export async function signUpTID (certKey, certCode) {
  let request = {
    ID_TOKEN: localStorage.getItem('t_token'),
    CERT_KEY: certKey,
    CERT_CODE: certCode
  }
  try {
    let auth = (await axios.post(USER_URL + '/signUpTID', request)).data
    await setMyInfo(auth.ACCESS_TOKEN)

    return auth
  } catch (err) {
    return err.response.data.RET_CODE
  }
}

async function setMyInfo (ACCESS_TOKEN) {
  let header = {
    headers: {
      'x-access-token': ACCESS_TOKEN
    }
  }

  let MY_INFO = (await axios.get(USER_URL + '/my', header)).data

  MY_INFO.LINE_LIST.forEach(line => {
    if (line.REPRESENT_YN) {
      let mdn = line.MDN.substring(0, 3) + '-' + line.MDN.substring(3, 7) + '-' + line.MDN.substring(7, 11)
      MY_INFO.MDN = mdn
    }
  })

  let cookiesName = 'MY_INFO'
  let cookiesValue = JSON.stringify(MY_INFO)
  document.cookie = encodeURIComponent(cookiesName) + '=' + encodeURIComponent(cookiesValue)
}

export const checkMDNUser = (mdn) => {
  let request = {
    MDN: mdn
  }

  return axios.post(USER_URL + '/checkMDNUser', request).then(response => {
    return response.data
  })
}

export const occupyMDN = (certKey, certCode) => {
  let request = {
    CERT_KEY: certKey,
    CERT_CODE: certCode
  }

  return axios.post(USER_URL + '/occupyMDN', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const requestMDNCheck = (mdn, encryptFlag) => {
  let request = {
    MDN: mdn,
    ENCRYPT_YN: encryptFlag
  }

  return axios.post(USER_URL + '/requestMDNCheck', request).then(response => {
    return response.data
  })
}

// export const verifyMDNCheck = (mdn, certKey, certCode) => {
//   let request = {
//     MDN: mdn,
//     CERT_KEY: certKey,
//     CERT_CODE: certCode
//   }
//
//   return axios.post(USER_URL + '/verifyMDNCheck', request).then(response => {
//     return response.data
//   })
// }

export const signInMDN = (mdn, certKey, certCode, encryptFlag, userInfoAgreement, marketingAgreement) => {
  let request = {
    MDN: mdn,
    CERT_KEY: certKey,
    CERT_CODE: certCode,
    POC_CODE: 'POC_TPA',
    ENCRYPT_YN: encryptFlag
  }

  if (userInfoAgreement) {
    request['USER_INFO_AGREEMENT_YN'] = userInfoAgreement
  }
  if (marketingAgreement) {
    request['MARKETING_AGREEMENT_YN'] = marketingAgreement
  }

  if (request.CERT_KEY && request.CERT_CODE) {
    return axios.post(USER_URL + '/signInMDN', request)
      .then(response => {
        if (response.data.RET_CODE === 0) {
          let header = {
            headers: {
              'x-access-token': response.data.ACCESS_TOKEN
            }
          }
          return axios.get(USER_URL + '/my', header)
            .then(myinfo => {
              myinfo.data.LINE_LIST.forEach(line => {
                if (line.REPRESENT_YN) {
                  let mdn = line.MDN.substring(0, 3) + '-' + line.MDN.substring(3, 7) + '-' + line.MDN.substring(7, 11)
                  myinfo.data.MDN = mdn
                }
              })

              let cookiesName = 'MY_INFO'
              let cookiesValue = JSON.stringify(myinfo.data)
              document.cookie = encodeURIComponent(cookiesName) + '=' + encodeURIComponent(cookiesValue)
              return response.data
            })
        } else {
          return response.data
        }
      }).catch(err => {
        return err
      })
  }
}

export const updateMyInfo = () => {
  return axios.get(USER_URL + '/my', COMMON.getHeader())
    .then(myinfo => {
      myinfo.data.LINE_LIST.forEach(line => {
        if (line.REPRESENT_YN) {
          let mdn = line.MDN.substring(0, 3) + '-' + line.MDN.substring(3, 7) + '-' + line.MDN.substring(7, 11)
          myinfo.data.MDN = mdn
        }
      })

      let cookiesName = 'MY_INFO'
      let cookiesValue = JSON.stringify(myinfo.data)
      document.cookie = encodeURIComponent(cookiesName) + '=' + encodeURIComponent(cookiesValue)
    })
}

export const requestSMS = (mdn) => {
  let request = {
    MDN: mdn
  }

  return axios.post(USER_URL + '/requestSMS', request).then(result => {
    return result.data
  })
}

export const migrateToTID = (idToken) => {
  let request = {
    POC_CODE: 'POC_TPA',
    ID_TOKEN: idToken
  }

  return axios.post(USER_URL + '/migrateToTID', request, COMMON.getHeader()).then(response => {
    let header = {
      headers: {
        'x-access-token': response.data.ACCESS_TOKEN
      }
    }
    return axios.get(USER_URL + '/my', header)
      .then(myinfo => {
        document.cookie = encodeURIComponent('MY_INFO') + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        myinfo.data.LINE_LIST.forEach(line => {
          if (line.REPRESENT_YN) {
            let mdn = line.MDN.substring(0, 3) + '-' + line.MDN.substring(3, 7) + '-' + line.MDN.substring(7, 11)
            myinfo.data.MDN = mdn
          }
        })
        let cookiesName = 'MY_INFO'
        let cookiesValue = JSON.stringify(myinfo.data)
        document.cookie = encodeURIComponent(cookiesName) + '=' + encodeURIComponent(cookiesValue)
        return response.data
      })
  })
}

// eslint-disable-next-line
export const confirmOneTimeCert = (cert_key, token) => {
  let request = {
    'CERT_KEY': cert_key
  }

  let header = {
    headers: {
      'x-access-token': token
    }
  }

  return axios.post(USER_URL + '/confirmOneTimeCert', request, header)
    .then(response => {
      return response
    })
}

export const requestOneTimeCert = () => {
  return axios.post(USER_URL + '/requestMyOneTimeCert', {}, COMMON.getHeader()).then(response => {
    return response.data.CERT_KEY
  })
}

export const requestWithDraw = () => {
  return axios.post(USER_URL + '/withdraw', {}, COMMON.getHeader()).then(response => {
    return response.data.RET_CODE
  })
}

export const getAiPick = (channelId) => {
  return axios.get(USER_URL + '/getAiPick?STORE_ID=' + process.env.FLAGSHIP_STORE_ID + '&CHANNEL_ID=' + channelId, COMMON.getHeader()).then(response => {
    return response.data.AI_PICK
  })
}

export const unregistFace = () => {
  return axios.post(USER_URL + '/unregistFace', {}, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const updateUserProfile = (nickName, gender, birtyear) => {
  let request = {}

  if (nickName) request.NICKNAME = nickName
  if (gender) request.GENDER = gender
  if (birtyear) request.BIRTH_YEAR = birtyear

  return axios.post(USER_URL + '/updateProfile', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const getMyCouponList = () => {
  return axios.get(USER_URL + '/couponList', COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const useCoupon = (couponId) => {
  let request = {
    COUPON_ID: couponId
  }
  return axios.post(USER_URL + '/useCoupon', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const updateAgreement = (userInfoAgreement, marketingAgreement) => {
  let request = {
    USER_INFO_AGREEMENT_YN: userInfoAgreement,
    MARKETING_AGREEMENT_YN: marketingAgreement
  }
  return axios.post(USER_URL + '/updateAgreement', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const afterMarketings = (encryptedMdn, certCode) => {
  let request = {
    ENCRYPTED_MDN: encryptedMdn,
    STORE_ID: process.env.FLAGSHIP_STORE_ID,
    CERT_CODE: certCode
  }
  return axios.post(USER_URL + '/afterMarketings', request).then(response => {
    return response.data
  })
}

export const deleteLine = (lineID) => {
  let request = {
    LINE_ID: lineID
  }
  return axios.post(USER_URL + '/deleteLine', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

export const updateRepresentLine = (lineID) => {
  let request = {
    LINE_ID: lineID
  }
  return axios.post(USER_URL + '/updateRepresentLine', request, COMMON.getHeader()).then(response => {
    return response.data
  })
}

/*
 * AUTH_MANAGER
 */
export const authCheck = (auth) => {
  let header = {
    headers: {
      'x-access-token': auth.ACCESS_TOKEN,
      'x-user-id': auth.USER_ID,
      'x-service-type': 'service'
    }
  }

  return axios.get(AUTH_URL + '/check', header)
    .then(response => {
      return axios.get(USER_URL + '/my', header)
        .then(myinfo => {
          myinfo.data.LINE_LIST.forEach(line => {
            if (line.REPRESENT_YN) {
              let mdn = line.MDN.substring(0, 3) + '-' + line.MDN.substring(3, 7) + '-' + line.MDN.substring(7, 11)
              myinfo.data.MDN = mdn
            }
          })
          let cookiesName = 'MY_INFO'
          let cookiesValue = JSON.stringify(myinfo.data)
          document.cookie = encodeURIComponent(cookiesName) + '=' + encodeURIComponent(cookiesValue)
          return response.data
        })
    })
}
