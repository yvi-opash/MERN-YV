import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { formData } from '../Types/Formtypes';

const ForthStep = () => {
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

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Details</h1>
            <div className="space-y-3 mb-6">
                <p className="text-gray-700"><strong>Name:</strong> {formData.name}</p>
                <p className="text-gray-700"><strong>Email:</strong> {formData.email}</p>
                <p className="text-gray-700"><strong>Age:</strong> {formData.age}</p>
                <p className="text-gray-700"><strong>Mobile Number:</strong> {formData.mobileNumber}</p>
                <p className="text-gray-700"><strong>City:</strong> {formData.city}</p>
                <p className="text-gray-700"><strong>Country:</strong> {formData.country}</p>
            </div>
            <button type="button" onClick={() => navigate("/third")} className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">Back</button>
          </div>
        </div>
    </>
  )
}

export default ForthStep