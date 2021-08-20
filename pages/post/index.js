import axios from 'axios';
import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react';
const Post = ({ posts }) => {

  // const [posts, setPosts] = useState([])
  const router = useRouter()
  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((res)=>{
  //     const data = res.data
  //     console.log(data);
  //     setPosts(data)
  //   })
  // },[])
  return (
    <div>
      <ul>
        {posts.map((post, index) =>
          <li key={index}>{post.title}</li>
        )}
      </ul>
      <button onClick={() => router.push('/post/12')}>Detail</button>
    </div>
  );
}
export const getServerSideProps = async()=>{
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return{
    props: {
      posts: data
    }
  }
}

// Post.getInitialProps = async () => {
//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   return {
//       posts: data
//   }
// }

export default Post;