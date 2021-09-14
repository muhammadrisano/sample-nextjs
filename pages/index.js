import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  return (
    <Layout>
    <div className={styles.container}>
      <h1>website saya</h1>
      {/* <Image src="/db.png" alt="db" width="400px" height="400px" /> */}
      <button onClick= {()=> router.push('/auth/login')}>pindah ke post</button>
    </div>
    </Layout>
  )
}
