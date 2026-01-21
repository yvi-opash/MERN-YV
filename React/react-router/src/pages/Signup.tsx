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

























// type User = {
//   name: string;
//   email: string;
//   password: string;
// };

// const Signup: React.FC = () => {
//   // 1️⃣ Form state
//   const [formData, setFormData] = useState<User>({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // 2️⃣ Stored users state
//   const [users, setUsers] = useState<User[]>([]);

//   // 3️⃣ Message state
//   const [message, setMessage] = useState<string>("");

//   /* ============================
//      useEffect #1
//      Load users on page load
//   ============================ */
//   useEffect(() => {
//     const storedUsers = localStorage.getItem("users");
//     if (storedUsers) {
//       setUsers(JSON.parse(storedUsers));
//     }
//   }, []);

//   /* ============================
//      useEffect #2
//      Auto clear message
//   ============================ */
//   // useEffect(() => {
//   //   if (!message) return;

//   //   const timer = setTimeout(() => {
//   //     setMessage("");
//   //   }, 3000);

//   //   return () => clearTimeout(timer);
//   // }, [message]);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle submit
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validation
//     if (!formData.name || !formData.email || !formData.password) {
//       setMessage("All fields are required!");
//       return;
//     }

//     // Duplicate email check
//     const emailExists = users.some(
//       (user) => user.email === formData.email
//     );

//     if (emailExists) {
//       setMessage("Email already registered!");
//       return;
//     }

//     // Add new user
//     const updatedUsers = [...users, formData];
//     setUsers(updatedUsers);

//     // Save to localStorage
//     localStorage.setItem("users", JSON.stringify(updatedUsers));

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });

//     setMessage("Signup successful!");
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "40px auto" }}>
//       <h2>Signup</h2>

//       {message && <p>{message}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
