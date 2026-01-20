import { Link } from "react-router-dom"

const Login = () => {

  return(
    <>
    <Link to={"/"}>HOme</Link>
    <h1>Log In Page</h1>
    <form action="">
      <label >Email : </label>
      <input type="email" name="" id="email" placeholder="Enter Email"/>
      <label >Password</label>
      <input type="password" name="" id="password" placeholder="Enter Password"/>
      <button>Log In</button>
    </form>
    
    </>
  )
}

export default Login;