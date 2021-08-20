import connection from "../config/db"

export const getProduct = () =>{
  return new Promise((resolve, reject)=>{
    connection.query("SELECT * FROM products", (err, result) => {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
  
}