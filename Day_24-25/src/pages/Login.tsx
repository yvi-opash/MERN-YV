import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';

type user = {
  name: string;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState<user>({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storeduser = localStorage.getItem("users");
    const users: user[] = storeduser ? JSON.parse(storeduser) : [];

    const existuser = users.find(
      (user) =>
        user.email === formdata.email && user.password === formdata.password,
    );
    if (existuser) {
      localStorage.setItem("Login User", JSON.stringify(existuser));
      navigate("/Welcome");
    } else {
      setMessage("invalid email or password");
    }
  };

  return (
    <div>
      <Link to="/"><HomeOutlined /></Link>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formdata.email}
          onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
        />

        <br /> <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formdata.password}
          onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
        />

        <br /> <br />

        <button type="submit">Log In</button>
        
      </form>
    </div>
  );
};

export default Login;

