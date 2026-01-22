// import React, { useEffect, useState } from "react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'




type User = {
  name: string,
  email: string,
  password: string,
}


const Signup: React.FC = () => {

  const [formdata, setFormdata] = useState<User>(
    {
      name : "",
      email : "",
      password : ""
    }
  )
  
  const  [users, setUsers] = useState<User[]>([]);


  const [message, setMessage] = useState<string>("");


  useEffect(() => {
    const storeduser = localStorage.getItem("users")

    if(storeduser){
      setUsers(JSON.parse(storeduser))
    }
  },[])
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if(!formdata.name || !formdata.email || !formdata.password){
    setMessage("All fields are required!");
    return;
  }

  const existemail = users.some(
    (user) => user.email === formdata.email
  );

  if(existemail){
    setMessage("Email already registered!");
    return;
  };

  const updatedUsers = [...users, formdata];
     setUsers(updatedUsers);


     localStorage.setItem("users", JSON.stringify(updatedUsers));


    setFormdata({
       name: "",
       email: "",
       password: "",
     });

     setMessage("Signup successful!");
}


  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Singup page</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"  
          placeholder="enter Name"
          value={formdata.name}
          onChange={handleChange} 
        />

        <br /><br />
        
        <input 
          type="email" 
          name="email"  
          placeholder="enter email" 
          value={formdata.email}
          onChange={handleChange}
        />

        <br /><br />
        
        <input 
          type="password" 
          name="password"  
          placeholder="enter password" 
          value={formdata.password}
          onChange={handleChange}
        />

        <br /><br />
        
        <button type="submit">Sign up</button>

        <br /><br />

        <p>message: {message} </p>
      </form>
    </div>
  );
};

export default Signup;
























