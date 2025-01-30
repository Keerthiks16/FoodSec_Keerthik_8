import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const FarmerValidationForm = () => {
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

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const handleLoginRedirect = () => {
    navigate("/FarmerAuthPortal");
  };

  // All existing validation and handler functions remain exactly the same
  const validateForm = () => {
    const newErrors = {};

    if (!formData.farmerId.match(/^FID\d{6}$/)) {
      newErrors.farmerId =
        "Farmer ID should be in format FID followed by 6 digits";
    }

    if (!formData.aadharNumber.match(/^\d{12}$/)) {
      newErrors.aadharNumber = "Aadhar number should be 12 digits";
    }

    if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name is required (minimum 3 characters)";
    }

    if (!formData.phoneNumber.match(/^\d{10}$/)) {
      newErrors.phoneNumber = "Phone number should be 10 digits";
    }

    if (!formData.landHolding.match(/^\d+(\.\d{1,2})?$/)) {
      newErrors.landHolding = "Enter valid land area in acres";
    }

    if (formData.district.length < 2) {
      newErrors.district = "District is required";
    }

    if (formData.state.length < 2) {
      newErrors.state = "State is required";
    }

    if (!formData.bankAccount.match(/^\d{9,18}$/)) {
      newErrors.bankAccount = "Enter valid bank account number";
    }

    if (!formData.ifscCode.match(/^[A-Z]{4}0[A-Z0-9]{6}$/)) {
      newErrors.ifscCode = "Enter valid IFSC code";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const requiredFields = [
        "farmerId",
        "aadharNumber",
        "fullName",
        "phoneNumber",
        "landHolding",
        "district",
        "state",
        "password",
        "bankAccount",
        "ifscCode",
      ];

      const allFieldsFilled = requiredFields.every(
        (field) => formData[field].trim() !== ""
      );

      if (allFieldsFilled) {
        setSubmitStatus("success");
        // Here you would typically make an API call to submit the form data
        console.log("Form submitted:", formData);
        // Redirect to dashboard after successful submission
        navigate("/");
      } else {
        setSubmitStatus("error");
      }
    } else {
      setSubmitStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          {/* Header */}
          <div className="bg-green-600 p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold text-white text-center">
              Farmer Registration Form
            </h1>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* All existing form fields remain exactly the same */}
                {/* Farmer ID */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Farmer ID*
                  </label>
                  <input
                    type="text"
                    name="farmerId"
                    value={formData.farmerId}
                    onChange={handleChange}
                    placeholder="FID123456"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.farmerId && (
                    <p className="text-red-500 text-xs">{errors.farmerId}</p>
                  )}
                </div>

                {/* Aadhar Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Aadhar Number*
                  </label>
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    placeholder="123456789012"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.aadharNumber && (
                    <p className="text-red-500 text-xs">
                      {errors.aadharNumber}
                    </p>
                  )}
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Land Holding */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Land Holding (acres)*
                  </label>
                  <input
                    type="text"
                    name="landHolding"
                    value={formData.landHolding}
                    onChange={handleChange}
                    placeholder="Enter land area"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.landHolding && (
                    <p className="text-red-500 text-xs">{errors.landHolding}</p>
                  )}
                </div>

                {/* District */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    District*
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Enter district"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.district && (
                    <p className="text-red-500 text-xs">{errors.district}</p>
                  )}
                </div>

                {/* State */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs">{errors.state}</p>
                  )}
                </div>

                {/* Primary Crop */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.primaryCrop}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Bank Account */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Bank Account Number*
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    placeholder="Enter account number"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.bankAccount && (
                    <p className="text-red-500 text-xs">{errors.bankAccount}</p>
                  )}
                </div>

                {/* IFSC Code */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    IFSC Code*
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    placeholder="ABCD0123456"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.ifscCode && (
                    <p className="text-red-500 text-xs">{errors.ifscCode}</p>
                  )}
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 p-4 bg-green-100 border border-green-500 rounded">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <p className="text-green-600">Form submitted successfully!</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 p-4 bg-red-100 border border-red-500 rounded">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <p className="text-red-600">
                    Please correct the errors in the form.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="bg-gray-50 px-6 py-4 -mx-6">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
                >
                  Submit Registration
                </button>
              </div>

              {/* Login Button (Fixed) */}
              <div className="text-center pt-4">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={handleLoginRedirect}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Log in
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerValidationForm;
