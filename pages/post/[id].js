import {useRouter} from 'next/router'
const DetailPost = () => {
  const router = useRouter()

  return (
    <div>
      <button onClick={()=> router.back()}>Back</button>
    </div>
  );
}

export default DetailPost;