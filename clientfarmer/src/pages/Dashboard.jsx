import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Settings,
  Droplets,
  CloudRain,
  Wind,
  Thermometer,
  TrendingUp,
  DollarSign,
  Calendar,
  Battery,
  Sun,
  X,
  Plus,
  IndianRupeeIcon,
} from "lucide-react";

// Initial schedule remains the same
const initialSchedule = [
  {
    id: 1,
    task: "Irrigation - Field A",
    date: "2025-01-30",
    status: "pending",
  },
  {
    id: 2,
    task: "Fertilizer Application - Field B",
    date: "2025-01-31",
    status: "pending",
  },
  { id: 3, task: "Pest Control Check", date: "2025-02-01", status: "pending" },
];

const COLORS = ["#059669", "#047857", "#065f46", "#064e3b"];

const Dashboard = ({ stateData }) => {
  const [selectedState, setSelectedState] = useState(stateData.states[0].name);
  const [selectedSoilType, setSelectedSoilType] = useState("clay");
  const [selectedSeason, setSelectedSeason] = useState("summer");
  const [showAlerts] = useState(true);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [schedule, setSchedule] = useState(initialSchedule);
  const [newTask, setNewTask] = useState({ task: "", date: "" });

  // Get current state data
  const getCurrentStateData = () => {
    return stateData.states.find((state) => state.name === selectedState);
  };

  const currentState = getCurrentStateData();

  // Transform monthly prices data for the chart
  const getMarketData = () => {
    return currentState.marketAnalysis.topCrops.map((crop) => ({
      crop: crop.name,
      demand: crop.demandIndex,
      price: crop.marketPrice,
      trend: crop.growth.startsWith("+") ? "up" : "down",
      forecast: Math.round(
        crop.marketPrice * (1 + parseFloat(crop.growth) / 100)
      ),
    }));
  };

  // Resource usage data (mock data as it's not in the JSON)
  const resourceData = [
    { name: "Water Usage", value: 75, total: 100 },
    { name: "Fertilizer", value: 45, total: 100 },
    { name: "Pesticides", value: 30, total: 100 },
    { name: "Seeds", value: 60, total: 100 },
  ];

  const addTask = () => {
    if (newTask.task && newTask.date) {
      setSchedule([
        ...schedule,
        {
          id: schedule.length + 1,
          ...newTask,
          status: "pending",
        },
      ]);
      setNewTask({ task: "", date: "" });
    }
  };

  const removeTask = (id) => {
    setSchedule(schedule.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setSchedule(
      schedule.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  const getCropSuggestions = () => {
    const suggestions = {
      clay: {
        summer: [
          {
            crop: currentState.marketAnalysis.topCrops[0].name,
            confidence: currentState.marketAnalysis.topCrops[0].demandIndex,
            reason: `High demand with ${currentState.marketAnalysis.topCrops[0].growth} growth`,
            waterNeeds: currentState.marketAnalysis.topCrops[0].exportPotential,
          },
          {
            crop: currentState.marketAnalysis.topCrops[1].name,
            confidence: currentState.marketAnalysis.topCrops[1].demandIndex,
            reason: `Strong market with ${currentState.marketAnalysis.topCrops[1].growth} growth`,
            waterNeeds: currentState.marketAnalysis.topCrops[1].exportPotential,
          },
          {
            crop: currentState.marketAnalysis.topCrops[2].name,
            confidence: currentState.marketAnalysis.topCrops[2].demandIndex,
            reason: `Stable growth at ${currentState.marketAnalysis.topCrops[2].growth}`,
            waterNeeds: currentState.marketAnalysis.topCrops[2].exportPotential,
          },
        ],
        winter: [
          {
            crop: currentState.marketAnalysis.topCrops[3].name,
            confidence: currentState.marketAnalysis.topCrops[3].demandIndex,
            reason: "Weather suitable",
            waterNeeds: currentState.marketAnalysis.topCrops[3].exportPotential,
          },
          {
            crop: currentState.marketAnalysis.topCrops[4].name,
            confidence: currentState.marketAnalysis.topCrops[4].demandIndex,
            reason: "Good soil compatibility",
            waterNeeds: currentState.marketAnalysis.topCrops[4].exportPotential,
          },
        ],
      },
    };
    return suggestions[selectedSoilType]?.[selectedSeason] || [];
  };

  const alerts = [
    {
      type: "warning",
      message: `Low soil moisture detected in ${selectedState} Field B-7`,
    },
    {
      type: "info",
      message: `Optimal planting window for ${currentState.marketAnalysis.topCrops[0].name} approaching in ${selectedState}`,
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header with State Selection */}
      <div className="flex justify-between items-center mb-8 border-b border-green-100 pb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-green-800">
            Farm Production Dashboard
          </h1>
          <select
            className="p-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {stateData.states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => setShowScheduleModal(true)}
          >
            <Calendar size={20} />
            Schedule
          </button>
        </div>
      </div>

      {/* Rest of the component remains the same until the Weather Section */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-green-800">
                Task Schedule
              </h2>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="text-green-600 hover:text-green-800"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6 flex gap-4">
              <input
                type="text"
                placeholder="Enter task description"
                className="flex-1 p-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500"
                value={newTask.task}
                onChange={(e) =>
                  setNewTask({ ...newTask, task: e.target.value })
                }
              />
              <input
                type="date"
                className="p-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500"
                value={newTask.date}
                onChange={(e) =>
                  setNewTask({ ...newTask, date: e.target.value })
                }
              />
              <button
                onClick={addTask}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Plus size={20} />
                Add Task
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {schedule.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={task.status === "completed"}
                      onChange={() => toggleTaskStatus(task.id)}
                      className="w-5 h-5 rounded border-green-500 text-green-600 focus:ring-green-500"
                    />
                    <div
                      className={
                        task.status === "completed"
                          ? "line-through text-green-600"
                          : ""
                      }
                    >
                      <div className="font-medium text-green-800">
                        {task.task}
                      </div>
                      <div className="text-sm text-green-600">{task.date}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Alerts Section */}
      {showAlerts && (
        <div className="mb-6 space-y-2">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 bg-green-50 border-l-4 border-green-600"
            >
              <svg
                className="w-5 h-5 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-green-700">{alert.message}</span>
            </div>
          ))}
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weather Section */}
        <div className="border-b border-green-100 pb-6 lg:border-b-0">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700">
            <CloudRain size={24} />
            Current Conditions
          </h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
              <Thermometer className="text-green-600" />
              <div>
                <p className="text-sm text-green-600">Temperature</p>
                <p className="text-lg font-semibold text-green-800">
                  {currentState.weather.temperature.current}°C
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
              <Droplets className="text-green-600" />
              <div>
                <p className="text-sm text-green-600">Humidity</p>
                <p className="text-lg font-semibold text-green-800">
                  {currentState.weather.humidity.current ||
                    currentState.weather.humidity.morning}
                  %
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
              <Wind className="text-green-600" />
              <div>
                <p className="text-sm text-green-600">Wind</p>
                <p className="text-lg font-semibold text-green-800">
                  {currentState.weather.wind.speed}{" "}
                  {currentState.weather.wind.unit}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
              <Sun className="text-green-600" />
              <div>
                <p className="text-sm text-green-600">UV Index</p>
                <p className="text-lg font-semibold text-green-800">
                  {currentState.weather.uvIndex.value}
                </p>
              </div>
            </div>
          </div>

          {/* Weather Chart using monthly prices data */}
          <div className="h-48 bg-green-50 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentState.marketAnalysis.monthlyPrices}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="averagePrice"
                  stroke="#059669"
                  name="Price"
                />
                <Line
                  type="monotone"
                  dataKey="tradingVolume"
                  stroke="#047857"
                  name="Volume"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Suggestions Section */}
        <div className="border-b border-green-100 pb-6 lg:border-b-0">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700">
            AI Crop Suggestions
          </h2>

          <div className="mb-4 space-y-3">
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Soil Type
              </label>
              <select
                className="w-full rounded-lg border-green-200 p-2focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50"
                value={selectedSoilType}
                onChange={(e) => setSelectedSoilType(e.target.value)}
              >
                <option value="clay">Clay</option>
                <option value="loam">Loam</option>
                <option value="sandy">Sandy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Season
              </label>
              <select
                className="w-full rounded-lg border-green-200 p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-green-50"
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="fall">Fall</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {getCropSuggestions().map((suggestion, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-green-800">
                    {suggestion.crop}
                  </h3>
                  <span className="text-green-600 font-semibold">
                    {suggestion.confidence}% match
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  {suggestion.reason}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Droplets size={16} className="text-green-600" />
                  <span className="text-sm text-green-600">
                    Water needs: {suggestion.waterNeeds}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Analysis Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700">
            <TrendingUp size={24} />
            Market Analysis
          </h2>

          <div className="space-y-4 mb-6">
            {getMarketData().map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-2 bg-green-50 p-3 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-green-800">{item.crop}</h3>
                  <p className="text-sm text-green-600">
                    Demand: {item.demand}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold flex items-center gap-1 text-green-700">
                    <IndianRupeeIcon size={16} />
                    {item.price}
                    {/* <span className="text-sm text-green-600">
                      (Forecast: Rs {item.forecast})
                    </span> */}
                  </p>
                  <span
                    className={`text-sm ${
                      item.trend === "up"
                        ? "text-green-600"
                        : item.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {item.trend === "up"
                      ? "↑"
                      : item.trend === "down"
                      ? "↓"
                      : "→"}{" "}
                    {item.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="h-48 bg-green-50 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getMarketData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="crop" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="demand" fill="#059669" name="Demand Index" />
                <Bar dataKey="price" fill="#047857" name="Market Price" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resource Management Section */}
        <div className="col-span-full">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700 border-t border-green-100 pt-6">
            <Battery size={24} />
            Resource Management
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-64 bg-green-50 p-4 rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {resourceData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4 bg-green-50 p-6 rounded-lg">
              {resourceData.map((resource, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-green-700">
                    {resource.name}
                  </span>
                  <div className="w-48 bg-white rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                      style={{
                        width: `${(resource.value / resource.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-green-600">
                    {resource.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
