import { useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import './Login.css';

type user = {
  name: string;
  email: string;
  password: string;
  isloggin: boolean;
  role: "user" | "admin";
};

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setformData] = useState<user>({
    name: "",
    email: "",
    password: "",
    isloggin: false,
    role: "user"
  });

  const [message, setMessage] = useState<string>("");

  const [User, setUser] = useState<user[]>([]);

  useEffect(() => {
    const existuser = localStorage.getItem("users");
    if (existuser) {
      setUser(JSON.parse(existuser));
    }
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.password) {
      setMessage("Please fill all fields");
      return;
    }

    const existemail = User.find((user) => user.email === formData.email);

    if (existemail) {
      setMessage("Email already registered!");
      return;
    }

    const newUser = [...User, formData];
    localStorage.setItem("users", JSON.stringify(newUser));
    setMessage("Registration successful!");
    
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setformData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) =>
            setformData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
      <Link to="/login">Login Here</Link>
    </div>
  );
};

export default Signup;
