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

    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.mobileNumber
    ) {
      setMessage("All fields are required");
      return;
    }

    if (formData.age < 0) {
      setMessage("Age cannot be negative");
      return;
    }

    if (formData.mobileNumber.toString().length !== 10) {
      setMessage("Mobile number must be 10 digits");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));

    navigate("/secound");
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">First Step</h1>
          {message && (
            <p className="text-red-500 mb-4 text-center">{message}</p>
          )}
          <form onSubmit={handle1Next} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) =>
                setformData({ ...formData, age: Number(e.target.value) })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={(e) =>
                setformData({
                  ...formData,
                  mobileNumber: Number(e.target.value),
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
