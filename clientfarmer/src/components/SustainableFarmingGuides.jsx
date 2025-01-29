import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SustainableFarmingGuides = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const guides = [
    {
      id: 1,
      category: 'soil',
      title: 'Soil Health Management',
      description: 'Learn essential techniques for maintaining healthy soil through natural methods, including organic matter management and soil testing.',
      duration: '15 min',
      difficulty: 'Beginner',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      )
    },
    {
      id: 2,
      category: 'water',
      title: 'Water Conservation Methods',
      description: 'Discover efficient irrigation techniques and water management strategies for sustainable farming practices.',
      duration: '20 min',
      difficulty: 'Intermediate',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      )
    },
    {
      id: 3,
      category: 'pest',
      title: 'Natural Pest Control',
      description: 'Master effective organic methods to manage pests without harmful chemicals while protecting beneficial insects.',
      duration: '25 min',
      difficulty: 'Advanced',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      )
    }
  ];

  const categories = [
    { id: 'all', name: 'All Guides', icon: '🌱' },
    { id: 'soil', name: 'Soil Management', icon: '🌍' },
    { id: 'water', name: 'Water Conservation', icon: '💧' },
    { id: 'pest', name: 'Pest Control', icon: '🐞' },
    { id: 'crop', name: 'Crop Planning', icon: '🌾' }
  ];

  const filteredGuides = activeCategory === 'all'
    ? guides
    : guides.filter(guide => guide.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-green-700 text-white">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1200/400"
            // alt="Sustainable farming"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-6">Grow Sustainably</h1>
        <p className="text-xl text-green-100 max-w-xl">
            Discover eco-friendly farming practices that benefit both your land and the environment.
            Join thousands of farmers worldwide in sustainable agriculture.
        </p>
        </div>

      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-green-100 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {filteredGuides.map(guide => (
            <div
              key={guide.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 bg-green-100 relative overflow-hidden">
                <img
                  src={
                    guide.category === 'soil'
                      ? 'C:\coding\react\amity\foodsecur\src\components\soilhealth.jpg' // Replace with Soil Health image URL
                      : guide.category === 'water'
                      ? 'C:\coding\react\amity\foodsecur\src\components\water.jpeg' // Replace with Water Conservation image URL
                      : guide.category === 'pest'
                      ? 'C:\coding\react\amity\foodsecur\src\components\pest.jpeg' // Replace with Pest Control image URL
                      : '/api/placeholder/600/400'
                  }
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  {guide.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {guide.difficulty}
                  </span>
                  <span className="text-green-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {guide.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600">
                  {guide.title}
                </h3>
                <p className="text-green-700 mb-4">{guide.description}</p>
                <Link to={
                guide.category === 'soil' ? '/soil-health' :
                guide.category === 'water' ? '/water-health' :
                guide.category === 'pest' ? '/pest-health' :
                '/'
                }>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  Start Learning
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainableFarmingGuides;
