import { removeToken, setToken } from './storage'

interface IResponse {
  data: any
  status: number
}

export const login = async (
  username: string,
  password: string,
  api: string,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }

  try {
    const res = await fetch(`${api}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    })
    response.status = res.status

    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )

    const data = await res.json()

    response.data = data
  } catch (err) {
    console.log(err)
  }

  return response
}

export const logout = async (api: any) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }

  removeToken()

  response.status = 200
  response.data = { message: 'Logout success' }

  return response
}
