import axios from "axios"
import cookie from 'cookie'
const login = (req, res)=>{
  if(req.method === 'POST'){
    const {email, password} = req.body
    axios.post('https://risano-eco.herokuapp.com/v1/users/login', {email, password})
    .then((response)=>{
      const result = response.data.data
      res.setHeader("Access-Control-Allow-Headers", "*")
      res.setHeader('Access-Control-Allow-Credentials', true)
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
      res.setHeader('Set-Cookie', cookie.serialize('token',result.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 1000*60*12,
        path: '/',
      } ))
      res.status(200)
      res.json({data:result})
    })
    .catch((err)=>{
      res.status(500)
      res.json({
        massage: 'hello'
      })
    })

  }
}
export default login