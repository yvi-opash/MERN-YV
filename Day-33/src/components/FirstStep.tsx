import React from "react";
import { useNavigate } from "react-router-dom";
import type { formData } from "../Types/Formtypes";

const FirstStep = () => {
  const [formData, setformData] = React.useState<formData>({
    name: "",
    email: "",
    age: 0,
    mobileNumber: 0,
    password: "",
    city: "",
    country: "",
  });

  const [message, setMessage] = React.useState<string>("");

  

  const navigate = useNavigate();

  const handle1Next = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.age || !formData.mobileNumber) {
      setMessage("All fields are required");
      return;
    }

    if (formData.age < 0) {
      setMessage("Age cannot be negative");
      return;
    }

    if(formData.mobileNumber.toString().length !== 10) {
      setMessage("Mobile number must be 10 digits");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));

    navigate("/secound");
  };
  return (
    <>
      <div>
        <h1>First Step</h1>
       
        <form onSubmit={handle1Next}>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name}
            onChange={(e) => setformData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={(e) => setformData({...formData, email:e.target.value})}
            />
          <input 
            type="number" 
            name="age" 
            placeholder="Enter your age" 
            value={formData.age}
            onChange={(e) => setformData({...formData, age: Number(e.target.value)})}
            />
          <input
            type="number"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={(e) => setformData({...formData, mobileNumber: Number(e.target.value)})}
            />
          <button type="submit">Next</button>
        </form>

         <p>{message}</p>
      </div>
    </>
  );
};

export default FirstStep;
