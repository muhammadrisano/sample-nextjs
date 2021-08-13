import { useEffect } from 'react'
import {useRouter} from 'next/router'


const Detail = () => {
  const {query} = useRouter()
  useEffect(() => {
    console.log(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      detail Product dengan id {query.id} dan name {query.name}
    </div>
  );
}

export default Detail;