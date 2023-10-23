import { getToken, setToken } from './storage'

interface IResponse {
  data: any
  status: number
}
export const getFleets = async (selectedRegion: string, api: any) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/ec2client/list-fleets?region=${selectedRegion}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}

export const getFleetInstances = async (
  region: string,
  fleetId: string,
  api: any,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/ec2client/fleet-instances?fleetid=${fleetId}&region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}

export const getLaunchTemplate = async (
  region: string,
  fleetId: string,
  api: any,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/ec2client/fleet-lunch-templates?fleetid=${fleetId}&region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}

export const getFleetInstanceDetails = async (
  region: string,
  instanceId: string,
  api: any,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/ec2client/desc-instance?instanceid=${instanceId}&region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}

export const getInstanceCPUUtilization = async (
  region: string,
  instanceId: string,
  api: any,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/cw-client/cpu-utilization?instanceid=${instanceId}&region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}

export const getInstanceNetworkIn = async (
  region: string,
  instanceId: string,
  api: any,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/cw-client/nw-utilization/in?instanceid=${instanceId}&region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}

export const getInstanceNetworkOut = async (
  region: string,
  instanceId: string,
  api: any,
) => {
  const response: IResponse = {
    data: null,
    status: 500,
  }
  try {
    const token = getToken()
    const res = await fetch(
      `${api}/aws/cw-client/nw-utilization/out?instanceid=${instanceId}&region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token?.access_token || '',
          'x-refresh-token': token?.refresh_token || '',
        },
        credentials: 'include',
      },
    )
    setToken(
      res.headers.get('x-access-token'),
      res.headers.get('x-refresh-token'),
    )
    response.status = res.status
    const data = await res.json()
    response.data = data
  } catch (error) {
    console.log(error)
  }
  return response
}
