
import { Link , useNavigate} from 'react-router-dom'
import './Header.css'
import { useState } from 'react'


type user = {
    isloggin : boolean,
}

const Header = () => {

    const [islogin, setislogin] =useState<user>({
        isloggin : true
    })

      

    const navigate = useNavigate()

    function handleLogout () {
        const loginuser = localStorage.getItem('users')
        const user1 : user[] = loginuser ? JSON.parse(loginuser) : [];
        
        const loggedInUser = user1.find(user => user.isloggin === true);
        if(loggedInUser) {
            loggedInUser.isloggin = false;
            localStorage.setItem('users', JSON.stringify(user1));
        }
        
        navigate('/login')
    }



  return (
    <div className="header">
        <h1>Admin Panel</h1>
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/products">Products</Link>
        </nav>
        <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Header