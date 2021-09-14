import axios from 'axios';
import cookie from 'cookie'
export default function handler(req, res) {
  if (req.method === 'GET') {
    const {email, password} = req.body
    axios.post('https://risano-eco.herokuapp.com/v1/users/login', {email, password})
    .then((res)=>{
      const result = res.data.data
      res.setHeader("Access-Control-Allow-Headers", "https://sample-nextjs-coral.vercel.app/");
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.setHeader('Set-Cookie', cookie.serialize('token', result.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60,
        path: '/',
      }))
      res.json({ data: result })
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
}
