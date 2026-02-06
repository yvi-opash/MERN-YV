import React from "react";
import { useNavigate } from "react-router-dom";

import type { formData } from "../Types/Formtypes";

const SecoundStep = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<formData>(() => {
    const saved = localStorage.getItem("formData");
    return saved ? JSON.parse(saved) : {
      name: "",
      email: "",
      age: 0,
      mobileNumber: 0,
      password: "",
      city: "",
      country: "",
    };
  });



  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const handle2Form = (e: React.FormEvent) => {
    e.preventDefault();

    if(formData.password.length < 8){
        setMessage("password must be 8 character");
        return;
    }

    if (formData.password !== confirmPassword) {
      setMessage("Passwords do not match");
      
    return;
    }



    localStorage.setItem("formData", JSON.stringify(formData));

    navigate("/third");
  };

  


  return (
    <>
      <div>
        <h1>Second Step</h1>
        {message && <p style={{color: 'red'}}>{message}</p>}
        <form onSubmit={handle2Form}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

          />
          <button type="button" onClick={() => navigate("/")}>
            Back
          </button>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
};

export default SecoundStep;
