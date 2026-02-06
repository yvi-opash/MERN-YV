import React from "react";
import { useNavigate } from "react-router-dom";
import type { formData } from "../Types/Formtypes";

const ThirdStep = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<formData>(() => {
    const saved = localStorage.getItem("formData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          age: 0,
          mobileNumber: 0,
          password: "",
          city: "",
          country: "",
        };
  });

  const [message, setMessage] = React.useState<string>("");

  const handle3Step = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.city || !formData.country) {
      setMessage("All fields are required");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/fourth");
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Third Step</h1>
          {message && (
            <p className="text-red-500 mb-4 text-center">{message}</p>
          )}
          <form onSubmit={handle3Step} className="space-y-4">
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate("/secound")}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
