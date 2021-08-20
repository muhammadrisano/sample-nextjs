import axios from "axios";

const User = ({users}) => {
  return (
    <div>
      <ul>
        {users.map((user)=>
        <li key={user.id}>{user.name}</li>
        )}
      </ul>
    </div>
  );
}

export const getStaticProps = async()=>{
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  return {
    props: {
      users: data
    }
  }
}

export default User;