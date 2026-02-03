
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  

    const navigate = useNavigate()

    function handlelogin () {
        navigate('/')
    }

return (
    <div className="login-container">
    <h1>Login Page</h1>
    <div>
        <input type="email" name="" id="" placeholder='Enter Email'/>
        <input type="password" name="" id="" placeholder='Enter Password'/>
        <button onClick={handlelogin}>Login</button>
        <p>message</p>
    </div>
    </div>
  )
}

export default Login;