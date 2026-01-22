import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  // TS knows exactly what 'user' and 'logout' are
  const { user, logout, login } = useAuth(); 

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.username}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ id: '1', username: 'DevUser' })}>
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;