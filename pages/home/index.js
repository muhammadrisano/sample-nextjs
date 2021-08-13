import { useEffect} from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const handlePush = ()=>{
    router.push('/about')
  }
  useEffect(() => {
    console.log(router);
  }, [])
  return (
    <Layout title="Home">
      <h1>hello halaman home</h1>
      <button onClick={handlePush}>Pindah ke About</button>
    </Layout>
  )
}

export default Home
