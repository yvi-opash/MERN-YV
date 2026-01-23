
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Link to="/signup">Go to Signup</Link>
      <br />
      <br />
      <Link to="/login">Go to Login</Link>
        
    </div>
  )
}

export default Home