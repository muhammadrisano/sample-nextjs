import axios from "axios";
import {useRouter} from 'next/router'
const DetailUser = ({ user}) => {
  const router = useRouter()
  if(router.isFallback){
    return(
      <h1>halaman loading</h1>
    )
  }
  return (
    <div>
      <ul>
        <li>name: {user.name}</li>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
      </ul>
    </div>
  );
}

export const getStaticPaths = async() =>{
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/')
  // const dataUser = data.map((item)=>{
  //   return{params: {
  //     id: item.id
  //   }}
  // })
  const dataUser2 = data.map((item) => ({ params: { id: item.id.toString()}}))
  // ket: data paths harus sperti dibawah
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }]
  return {
    paths: paths,
    fallback: true
  }
}
export const getStaticProps =async(context)=>{
  const id = context.params.id
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return {
    props: {
      user: data
    }
  }
}

export default DetailUser;