import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import

const FarmerAuthPortal = () => {
  // Registration form state (previous code remains the same)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    farmerId: "",
    aadharNumber: "",
    fullName: "",
    phoneNumber: "",
    landHolding: "",
    district: "",
    state: "",
    password: "",
    bankAccount: "",
    ifscCode: "",
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    farmerId: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Previous registration code remains the same...
  // (Include all the previous registration form code here)

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLoginError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate login fields
    if (!loginData.farmerId || !loginData.password) {
      setLoginError("Please fill in all fields");
      return;
    }

    if (!loginData.farmerId.match(/^FID\d{6}$/)) {
      setLoginError("Invalid Farmer ID format");
      return;
    }

    // Simulate login success
    setLoginSuccess(true);
    setLoginError("");
    console.log("Login attempted with:", loginData);
    setTimeout(() => {
      navigate("/"); // Add this line to redirect to dashboard
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Registration Form Component (Previous code remains the same) */}

      {/* Login Section */}
      <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md">
        <div className="bg-green-600 p-4 rounded-t-lg">
          <h2 className="text-xl font-bold text-white text-center">
            Farmer Login
          </h2>
        </div>

        <form onSubmit={handleLogin} className="p-6 space-y-4">
          <div className="space-y-4">
            {/* Farmer ID */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Farmer ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="farmerId"
                  value={loginData.farmerId}
                  onChange={handleLoginChange}
                  placeholder="Enter FID123456"
                  className="w-full pl-10 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Forgot Password Link
            <div className="text-right">
              <a href="#" className="text-sm text-green-600 hover:text-green-700">
                Forgot Password?
              </a>
            </div> */}

            {/* Error Message */}
            {loginError && (
              <div className="flex items-center space-x-2 p-4 bg-red-100 border border-red-500 rounded">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <p className="text-red-600 text-sm">{loginError}</p>
              </div>
            )}

            {/* Success Message */}
            {loginSuccess && (
              <div className="flex items-center space-x-2 p-4 bg-green-100 border border-green-500 rounded">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <p className="text-green-600 text-sm">
                  Login successful! Redirecting to dashboard...
                </p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Login to Dashboard</span>
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-6">
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg text-center">
            <p className="text-sm text-gray-600">
              New farmer?{" "}
              <a
                href="#registration-form"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAuthPortal;
