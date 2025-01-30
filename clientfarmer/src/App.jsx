import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SustainableFarmingGuides from "./components/SustainableFarmingGuides";
import SoilHealthBlog from "./components/SoilHealthBlog";
import WaterConservationBlog from "./components/WaterConservationBlog";
import PestControlBlog from "./components/PestControlBlog";
import FarmerValidationForm from "./components/FarmerValidationForm";
import stateData from "./data/statewisecrop.json";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import FarmerRetailerNetwork from "./components/FarmerRetailerNetwork";
import FarmerAuthPortal from "./components/FarmerAuthPortal";
import CropRecommendation from "./pages/CropRecommendation";  // Import CropRecommendation

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard stateData={stateData} />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/connect" element={<FarmerRetailerNetwork />} />
        <Route path="/farmer-validation" element={<FarmerValidationForm />} />
        <Route path="/FarmerAuthPortal" element={<FarmerAuthPortal />} />
        <Route path="/crop-recommendation" element={<CropRecommendation />} />  {/* Add route for CropRecommendation */}
      </Routes>
    </Router>
  );
}

export default App;
