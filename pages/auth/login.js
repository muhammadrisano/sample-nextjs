import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = ()=>{
    axios.post(`https://sample-nextjs-coral.vercel.app/api/login`, {email, password},{withCredentials: true})
    .then(()=>{
      router.push('/product')
    })
    .catch(()=>{
      alert('password salah')
    })
  }
  const handleCoba = () =>{
    axios.post(`https://sample-nextjs-coral.vercel.app/api/coba`, { testing: 'hello' }, { withCredentials: true })
      .then(() => {
        console.log('berhasil mencoba');
      })
      .catch(() => {
        console.log('gagal mencoba')
      })
  }

  return (
    <div>
      <h1>halaman login</h1>
      <ul>
        <li><input type="text" name="email" id="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></li>
        <li><input type="text" name="password" id="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></li>
      </ul>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCoba}>coba</button>
    </div>
  );
}

export default Login;