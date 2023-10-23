import { getCookies } from 'cookies-next'

const AuthRequire = () => {
  return async ({ req, res }: any) => {
    const token = getCookies({ req, res })


    if (!token.access_token && !token.refresh_token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    return {
      props: {
        url: `${process.env.API_URL}`,
      },
    }
  }
}

export default AuthRequire
