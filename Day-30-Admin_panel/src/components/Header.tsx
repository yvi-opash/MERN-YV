
import { Link , useNavigate} from 'react-router-dom'
import './Header.css'

const Header = () => {

    const navigate = useNavigate()

    function handleLogout () {
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