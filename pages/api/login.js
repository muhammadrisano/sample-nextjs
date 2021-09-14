import axios from 'axios';
import cookie from 'cookie'
export default function handler(req, res) {
  if (req.method === 'POST') {
    const {email, password} = req.body
    console.log(req.body);
    axios.post('https://risano-eco.herokuapp.com/v1/users/login', {email, password})
    .then((response)=>{
      const result = response.data.data
      res.setHeader("Access-Control-Allow-Headers", "https://sample-nextjs-coral.vercel.app/");
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.setHeader('Set-Cookie', cookie.serialize('token', result.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
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
