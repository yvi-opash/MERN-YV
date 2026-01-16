import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/login/987564512154844aaasx">Go to Login</Link>
        <Link to="/signup">Go to Signup</Link>
    </div>
  )
}

export default Home