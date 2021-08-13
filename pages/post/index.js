import {useRouter} from 'next/router'
const Post = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=> router.push('/post/12')}>Detail</button>
    </div>
  );
}

export default Post;