import Navbar from './Navbar'
import Head from 'next/head'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const Layout = (props) => {
  const router = useRouter()
  useEffect(() => {
    console.log(router);
  }, [])
  return (
    <div>
      <Head>
        <title>Zwaller | {router.pathname}</title>
      </Head>
      <Navbar/>
      {props.children}
      <h1>footernya</h1>
    </div>
  );
}

export default Layout;