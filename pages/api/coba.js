import cookie from 'cookie'
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Headers", "https://sample-nextjs-coral.vercel.app/");
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Set-Cookie', cookie.serialize('token', 'blbabalbsb', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000*60*60,
    path: '/',
  }))
  res.json({message: 'oke'})
}
