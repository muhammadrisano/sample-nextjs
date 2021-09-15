// import { getProduct } from "../../models/product";

import axios from "axios";
import Router from "next/router"
import cookieCutter from 'cookie-cutter'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Cookies2 from 'cookies'
import withPrivateRoute from "../../HOC/withPrivateRoute";
import requirementAuthention from '../../protected/index'
const Product = ({ products }) => {
  // const dataProduct = JSON.parse(products)
  // const router = useRouter()
  // const authCookie = cookieCutter.get('myCookieName')
  const [coba, setCoba] = useState("")
  useEffect(() => {
    // if (document.cookie){
    Cookies.set('name3', 'testing')
    console.log(new Date().toString());
    // setCoba(authCookie)
    console.log('isi cookie', document.cookie);

    // }
  }, [])
  const handleDelete =(id)=>{
    axios.delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/products/${id}`, { withCredentials: true })
    .then((res)=>{
      alert('success')
    })
    .catch((err)=>{
      alert('gagal')
    })
  }
  return (
    <div>
      {/* <p>{JSON.stringify(products)}</p> */}
      <h4>ini cookie : {coba}</h4>
      <ul>
        {products.map((item) =>
          <li key={item.id}>{item.name} | <button onClick={() => handleDelete(item.id)}>hapus</button></li>
        )}
        <li></li>
      </ul>
      <h1>halaman product</h1>
    </div>
  );
}
// export const getServerSideProps = async () => {
//   // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   const products = await getProduct()
//   // console.log(products);
//   return {
//     props: {
//       products: JSON.stringify(products)
//     }
//   }
// }

// Post.getInitialProps = async () => {
//   // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   const products = await getProduct()
//   return {
//     products: JSON.stringify(products)
//   }
// }
export const getServerSideProps = requirementAuthention(async (context) => {
  try {
    let cookie = ''
    if (context.req) {
      cookie = context.req.headers.cookie
      const datacookie2 = new Cookies2(context.req, context.res)
    }
    const result = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/products/`,
      {
        withCredentials: true,
        headers: {
          cookie: cookie
        }
      })
    // console.log(cookie);
    const products = result.data.data

    return {
      props: {
        products: products
      }

    }
  } catch (error) {
    console.log(error);
    // cek 
    // if(!context.req){
    //   Router.push('/login')
    // }
    // context.req -> untuk cek diserver kah
    // if (context.req) {
    //   context.res.writeHead(301, {
    //     Location: 'http://localhost:3000/login'
    //   })
    //   context.res.end()
    // }
  }
}
)

export default Product;