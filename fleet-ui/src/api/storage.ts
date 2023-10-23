export const setToken = (access_token: any, refresh_token: any) => {
  if (access_token && refresh_token) {
    // set token to cookie with 1 minute expire for all path
    document.cookie = `access_token=${access_token}; max-age=60; path=/`
    document.cookie = `refresh_token=${refresh_token}; max-age=900; path=/`
  }
}

export const getToken = () => {
  // get token from cookie
  const access_token =
    document.cookie
      .split(';')
      .find((c: any) => c.trim().startsWith('access_token='))
      ?.split('=')[1] || null
  const refresh_token =
    document.cookie
      .split(';')
      .find((c: any) => c.trim().startsWith('refresh_token='))
      ?.split('=')[1] || null

  if (access_token || refresh_token) {
    return {
      access_token,
      refresh_token,
    }
  }
  removeToken()
  window.location.href = '/login'
  return null
}

export const removeToken = () => {
  document.cookie.split(';').forEach((c: any) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
  })
}
