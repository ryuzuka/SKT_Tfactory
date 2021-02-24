export const getHeader = () => {
  let token = ''
  if (getCookie('USER_AUTH') !== '') {
    token = JSON.parse(getCookie('USER_AUTH')).ACCESS_TOKEN
  }

  let language = navigator.language

  let header = {
    headers: {
      'x-access-token': token,
      'x-device-language': language
    }
  }
  return header
}

const getCookie = (cname) => {
  let name = cname + '='
  let decodedCookie = unescape(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export const removeCookie = (name) => {
  var date = new Date()
  date.setDate(date.getDate() - 1)

  var willCookie = ''
  willCookie += 'CookieName=Value;'
  willCookie += 'Expires=' + date.toUTCString()

  document.cookie = willCookie
}

export const getdistanceFromLatLongInKm = (lat1, long1, lat2, long2) => {
  let R = 6371 // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1) // deg2rad below
  let dLon = deg2rad(long2 - long1)
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = (R * c * 1000).toFixed(0) // Distance in m
  return d
}

const deg2rad = (deg) => {
  return deg * (Math.PI / 180)
}

export const getSegment = (gender, age) => {
  let segment = ''
  let segmentName = ''

  if (age >= 13 && age <= 18) {
    segment = segment + '_A13'
    segmentName = '13세~18세 '
  } else if (age >= 19 && age <= 23) {
    segment = segment + '_A14'
    segmentName = '19세~23세 '
  } else if (age >= 24 && age <= 29) {
    segment = segment + '_A15'
    segmentName = '24세~29세 '
  } else if (age >= 30 && age <= 39) {
    segment = segment + '_A03'
    segmentName = '30대 '
  } else if (age >= 40 && age <= 49) {
    segment = segment + '_A04'
    segmentName = '40대 '
  } else if (age >= 50 && age <= 59) {
    segment = segment + '_A05'
    segmentName = '50대 '
  } else if (age >= 60) {
    segment = segment + '_A16'
    segmentName = '60대 이상'
  }

  if (gender === 'male') {
    segment = segment + '_S1'
    segmentName = segmentName + '남성'
  } else if (gender === 'female') {
    segmentName = segmentName + '여성'
    segment = segment + '_S2'
  }

  let result = {
    SEGMENT: segment,
    SEGMENT_NAME: segmentName
  }
  return result
}
