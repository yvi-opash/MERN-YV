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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Second Step</h1>
          {message && <p className="text-red-500 mb-4 text-center">{message}</p>}
          <form onSubmit={handle2Form} className="space-y-4">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              autoComplete="new-password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4">
              <button type="button" onClick={() => navigate("/")} className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">
                Back
              </button>
              <button type="submit" className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SecoundStep;
