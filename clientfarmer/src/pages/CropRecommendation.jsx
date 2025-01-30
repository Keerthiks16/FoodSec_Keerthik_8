// src/pages/CropRecommendation.jsx

import React, { useState } from 'react';

const CropRecommendation = () => {
  const [crop, setCrop] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleCropChange = (event) => {
    setCrop(event.target.value);
  };

  const handleRecommendation = () => {
    // Add the logic for crop recommendation
    // This is just a simple example where based on crop entered, a recommendation is shown
    if (crop === 'Rice') {
      setRecommendation('Recommended Fertilizers: Urea, DAP');
    } else if (crop === 'Wheat') {
      setRecommendation('Recommended Fertilizers: Ammonium Sulfate, MOP');
    } else {
      setRecommendation('No recommendation available for this crop.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Crop Recommendation System</h1>
      <div className="mb-4">
        <label htmlFor="crop" className="block text-lg font-medium text-gray-700">
          Enter Crop Name:
        </label>
        <input
          type="text"
          id="crop"
          value={crop}
          onChange={handleCropChange}
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Enter crop (e.g., Rice, Wheat)"
        />
      </div>
      <button
        onClick={handleRecommendation}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Get Recommendation
      </button>
      {recommendation && (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
          <h2 className="text-xl font-medium">Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;
