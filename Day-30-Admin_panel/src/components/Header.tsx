import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <h1>Admin Panel</h1>
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/products">Products</Link>
        </nav>
    </div>
  )
}

export default Header