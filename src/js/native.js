/* eslint-disable camelcase */

/* 1. TID Login (로그인) */
export const tidLogin_native = (mobileOS, redirectURL) => {
  // tidLoginCallback: page-login.vue , page-main-login.vue
  let scheme = {
    'function': 'tidLogin',
    'message': {
      'redirectURL': redirectURL,
      'callBackJS': 'app.$children[0].$children[0].tidLoginCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 2. TID Logout (로그아웃) */
export const tidLogout_native = (mobileOS, redirectURL) => {
  let scheme = {
    'function': 'tidLogout',
    'message': {
      'redirectURL': redirectURL,
      'callBackJS': 'app.$children[0].$children[0].tidLogoutCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 3. TID JoinMember (회원 가입) */
export const tidJoinMember_native = (mobileOS, redirectURL) => {
  let scheme = {
    'function': 'tidJoinMember',
    'message': {
      'redirectURL': redirectURL,
      'callBackJS': 'app.$children[0].$children[0].tidJoinMemberCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 4. TID app2webSSOAutoLogin (T# → TW/TWD 연동 SSO) */
export const tidApp2webSSOAutoLogin = (redirectURL, mobileOS) => {
  let scheme = {
    'function': 'tidApp2webSSOAutoLogin',
    'message': {
      'redirectURL': redirectURL,
      'callBackJS': 'app.$children[0].$children[0].tidApp2webSSOAutoLoginCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 5. 안면인식 카메라 실행 */
export const faceRegistOpen = (redirectURL, mobileOS) => {
  let scheme = {
    'function': 'faceRegistOpen',
    'message': {
      'redirectURL': redirectURL,
      'callBackJS': 'app.$children[0].$children[0].faceRegistOpenCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 6. QR 스캔 카메라 실행 */
export const qrScanOpen = (mobileOS) => {
  // qrScanOpenCallbak: page-main.vue
  let scheme = {
    'function': 'qrScanOpen',
    'message': {
      'callBackJS': 'app.$children[0].$children[0].qrScanOpenCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 7. Setting 오픈 */
export const settingsOpen = (mobileOS) => {
  let scheme = {
    'function': 'settingsOpen',
    'message': {
      'callBackJS': 'app.$children[0].$children[0].settingsOpenCallback'
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* 8. 안면인식 검증 오픈 */
export const faceRecognize = (mobileOS) => {
  console.log(mobileOS)
  let scheme = {
    'function': 'faceSignInOpen'
  }
  callNativeScheme(mobileOS, scheme)
}

export const faceRegistTermsClose = (mobileOS) => {
  let scheme = {
    'function': 'faceRegistTermsClose'
  }
  callNativeScheme(mobileOS, scheme)
}

export const sysBrowserOepn = (mobileOS, redirectURL) => {
  let scheme = {
    'function': 'sysBrowserOpen',
    'message': {
      'redirectURL': redirectURL
    }
  }
  callNativeScheme(mobileOS, scheme)
}

/* eslint no-undef: "off" */
const callNativeScheme = (mobileOS, scheme) => {
  console.log('[INFO] callNativeScheme: ' + scheme)
  if (mobileOS === 'A') {
    window.JsBridge.webToAppCall(JSON.stringify(scheme))
  } else if (mobileOS === 'I') {
    webkit.messageHandlers.webToAppCall.postMessage(JSON.stringify(scheme))
  }
}
