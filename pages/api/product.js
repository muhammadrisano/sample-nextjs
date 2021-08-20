
import { getProduct } from "../../models/product"

const product = async(req, res) =>{
  if(req.method === 'GET'){
    
    try {
      const products = await getProduct()
      return res.status(200).json({
        data: products
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Internal Server Error'
      })
    }
  }
  if(req.method === 'POST'){
    const name = req.body.name
    const price = req.body.price
    return res.status(201).json({
      message: 'data success created',
      data: {
        name,
        price
      }
    })
  }

 
}
export default product