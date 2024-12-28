export default function getCookie(cookieName) {
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookies = decodedCookie.split('; ')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const splitCookie = cookie.split('=')
    const name = splitCookie[0]
    const value = splitCookie[1]
    if (cookieName === name) {
      return value
    }
  }
  return ''
}

export function setCookie(cookieName, value, hours) {
  const date = new Date()
  date.setTime(date.getTime() + hours * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = cookieName + '=' + value + ';' + expires + ';path=/'
}
