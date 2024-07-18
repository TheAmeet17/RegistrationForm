// src/components/RegistrationForm.js
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate()

  const handleButtonClick = () => {
    setShowButtons(true);
    
    navigate('/login');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">Ameet
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="text"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Enter your Address"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </form>
        {showButtons && (
          <div className="mt-6 flex justify-between">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              User
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Admin
            </button>
          </div>
        )}
      </div>
    
    </div>
  );
};

export default RegistrationForm;
