import { Link } from "react-router-dom";


const Signup = () => {


  return(
    <>
    <Link to={"/"}>Home</Link>

    <h1>Signup Page</h1>
  
    <form action="">
      <label>Name : </label>
      <input type="text" name="" id="name" placeholder="Enter Name"/>
      <label>Email : </label>
      <input type="email" name="" id="email" placeholder="Enter Email"/>
      <label>Age : </label>
      <input type="number" name="" id="age" placeholder="Enter Age"/>
      <label>Password : </label>
      <input type="password" name="" id="password" placeholder="enter password"/>
      
      <button>Sign Up</button>

    </form>
  
  </>
  )
} 

export default Signup;