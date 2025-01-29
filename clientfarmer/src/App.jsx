import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SustainableFarmingGuides from "./components/SustainableFarmingGuides";
import SoilHealthBlog from "./components/SoilHealthBlog";
import WaterConservationBlog from "./components/WaterConservationBlog";
import PestControlBlog from "./components/PestControlBlog";
import FarmerValidationForm from "./components/FarmerValidationForm";
import stateData from "./data/statewisecrop.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard stateData={stateData} />
            </>
          }
        />
        <Route path="/" element={<SustainableFarmingGuides />} />
        <Route path="/soil-health" element={<SoilHealthBlog />} />
        <Route path="/water-health" element={<WaterConservationBlog />} />
        <Route path="/pest-health" element={<PestControlBlog />} />
        <Route path="/farmer-validation" element={<FarmerValidationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
