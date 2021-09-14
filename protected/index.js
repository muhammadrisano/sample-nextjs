import Cookies from 'cookies'

const requirementAuthention = (gssp) => {
  return async (ctx) => {
    const { req, res } = ctx;
    const cookies = new Cookies(req, res)
    const token = cookies.get('token')
    if (!token) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',

        }
      }
    }
    return await gssp(ctx)
  }
}
export default requirementAuthention