/* import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/users').then(
            response=>setData(response.data))
            },[])
  return (
    <div>
        <h1>User Data</h1>
        <ul>
            {data.map((user)=>(
                <li key={user.id}>{user.name} {user.email}</li>
            ))}
     </ul>
    </div>
  )
}

export default Axios */

import React, {useEffect,useState} from 'react';

const UsersList=()=>{

const [users,setUsers]=useState([]);


useEffect (()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((json)=>setUsers(json))
    },[]);

    return(
        <>
    {users.map((user)=>
        
            <div key={user.id}>
                <p><strong>{user.name}</strong></p>
                <p><strong>{user.email}</strong></p>
               
            </div>
    )}
   </>
    )   
}
    export default UsersList;