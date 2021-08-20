import axios from 'axios';
import {useRouter} from 'next/router'

const DetailPost = ({ post, name}) => {
  const router = useRouter()


  return (
    <div>
     <h4> userId : {post.userId}</h4>
      <h4> title : {post.title}</h4>
      <h6>id : {post.id}</h6>
      <p>{post.body}</p>
      <h1>nama saya : {name}</h1>
      <button onClick={()=> router.back()}>Back</button>
    </div>
  );
}

export const getServerSideProps = async(context) =>{
try {
  const id = context.params.id
  let name = ''
  // console.log(context.query.name);
  if(context.query){
    name = context.query.name
  }
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return {
    props: {
      post: data,
      name: name
    }
  }
} catch (error) {
  return {
    notFound: true
  }
}
 
}

export default DetailPost;