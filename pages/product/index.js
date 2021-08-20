import { getProduct } from "../../models/product";

const Product = ({ products}) => {
  const dataProduct = JSON.parse(products)
  return (
    <div>
      {/* <p>{JSON.stringify(products)}</p> */}
      <ul>
        {dataProduct.map((item)=>
        <li key={item.id}>{item.name}</li>
        )}
        <li></li>
      </ul>
      <h1>halaman product</h1>
    </div>
  );
}
export const getServerSideProps = async () => {
  // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const products = await getProduct()
  // console.log(products);
  return {
    props: {
      products: JSON.stringify(products)
    }
  }
}

// Post.getInitialProps = async () => {
//   // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   const products = await getProduct()
//   return {
//     products: JSON.stringify(products)
//   }
// }

export default Product;