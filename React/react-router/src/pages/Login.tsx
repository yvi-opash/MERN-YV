import React from 'react'
import { Link, useParams } from 'react-router-dom';


interface user {
        id: string;
}

function Login() {
    
    const {id} = useParams<{id?: string}>();
  
    return (
    <>
      <Link to="/">⬅</Link>
      <div>Login Page {id}</div>
    </>
  )
}

export default Login;