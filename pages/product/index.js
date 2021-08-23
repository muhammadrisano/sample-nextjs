// import { getProduct } from "../../models/product";

import axios from "axios";
import Router from "next/router"

const Product = ({ products }) => {
  // const dataProduct = JSON.parse(products)
  // const router = useRouter()
  return (
    <div>
      {/* <p>{JSON.stringify(products)}</p> */}
      <ul>
        {products.map((item) =>
          <li key={item.id}>{item.name}</li>
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
Product.getInitialProps = async (context) => {
  try {
    let cookie = ''
    if(context.req){
      cookie = context.req.headers.cookie
    }
    const result = await axios.get('http://localhost:4000/v1/products/',
    {withCredentials: true,
    headers:{
      cookie: cookie
    }
    })
    const products = result.data.data
    console.log(products);
    return {
      products: products
    }
  } catch (error) {
    console.log(error);
    // cek 
    if(!context.req){
      Router.push('/login')
    }
    // context.req -> untuk cek diserver kah
    if(context.req){
      context.res.writeHead(301, {
        Location: 'http://localhost:3000/login'
      })
      context.res.end()
    }
  }
}

export default Product;