import { useEffect} from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import withPrivateRoute from '../../HOC/withPrivateRoute'

function Home() {
  const router = useRouter()
  const handlePush = ()=>{
    router.push('/about')
  }
  useEffect(() => {
    console.log(router);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout title="Home">
      <h1>hello halaman home</h1>
      <button onClick={handlePush}>Pindah ke About</button>
    </Layout>
  )
}

export default withPrivateRoute(Home)
