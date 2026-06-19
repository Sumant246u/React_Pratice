import React from 'react'
import UseFetch from './UseFetch'

const Users = () => {

    const {data, loading, error} = UseFetch('https://jsonplaceholder.typicode.com/users');

    if(loading) return <p>...Loading</p>;
    if(error) return <p>...Error</p>;
  return (
   <div>
     <h1>Users</h1>
     <ul>
        {data.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
     </ul>
   </div>
    
  )
}

export default Users;