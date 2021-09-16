
// import { getProduct } from "../../models/product"
import cookie from 'cookie'
const product = async(req, res) =>{
  if (req.method === 'DELETE') {
    // res.json({
    const cookie = req.headers.cookie
    // })
    console.log('isi header', cookie.parse(req.headers.cookie));
    res.json({
      cookienya: cookie
    })
  }


  // if(req.method === 'GET'){
    
  //   try {
  //     const products = await getProduct()
  //     return res.status(200).json({
  //       data: products
  //     })
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: 'Internal Server Error'
  //     })
  //   }
  // }
  // if(req.method === 'POST'){
  //   const name = req.body.name
  //   const price = req.body.price
  //   return res.status(201).json({
  //     message: 'data success created',
  //     data: {
  //       name,
  //       price
  //     }
  //   })
  // }

 
}
export default product