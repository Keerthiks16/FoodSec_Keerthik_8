import React, { useState } from 'react';

const SoilHealthBlog = () => {
  const [activeTab, setActiveTab] = useState('basics');
  
  const blogSections = {
    basics: {
      title: 'Soil Health Basics',
      content: `Soil health is the foundation of successful farming. Think of your soil as a living ecosystem
      that needs care and attention, just like your crops. Healthy soil contains billions of microorganisms
      working together to create the perfect environment for plant growth. When you prioritize soil health,
      you're investing in your farm's future productivity and sustainability.
      
      Key indicators of healthy soil include:
      • Good structure and tilth
      • High organic matter content
      • Active biological activity
      • Proper water retention
      • Balanced nutrient levels`
    },
    practices: {
      title: 'Management Practices',
      content: `Implementing the right management practices can dramatically improve your soil health over time.
      Consider incorporating these proven techniques into your farming operation:
      
      1. Minimize Tillage: Reduced tillage helps preserve soil structure and organic matter.
      2. Use Cover Crops: Plant cover crops during off-seasons to protect and enrich your soil.
      3. Practice Crop Rotation: Diverse rotation breaks pest cycles and balances nutrient use.
      4. Add Organic Matter: Incorporate compost and crop residues to feed soil life.
      5. Monitor Soil Moisture: Maintain optimal moisture levels for biological activity.`
    },
    testing: {
      title: 'Soil Testing Guide',
      content: `Regular soil testing is crucial for maintaining optimal soil health. A comprehensive soil test
      can reveal critical information about your soil's condition and help you make informed decisions about
      amendments and management practices.
      
      Testing Schedule:
      • Conduct basic soil tests annually
      • Perform comprehensive tests every 3-5 years
      • Test before major changes in crop rotation
      • Monitor pH levels seasonally
      • Track organic matter content yearly`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Soil Health Management</h1>
          <p className="text-xl text-green-100">
            Practical insights for maintaining healthy, productive soil on your farm
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-green-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex space-x-8">
            {Object.keys(blogSections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveTab(section)}
                className={`py-4 px-2 -mb-px border-b-2 transition-colors ${
                  activeTab === section
                    ? 'border-green-600 text-green-800 font-medium'
                    : 'border-transparent text-green-600 hover:text-green-800'
                }`}
              >
                {blogSections[section].title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg prose-green max-w-none">
          <h2 className="text-3xl font-bold text-green-800 mb-8">
            {blogSections[activeTab].title}
          </h2>
          <div className="text-green-700 space-y-6 whitespace-pre-line">
            {blogSections[activeTab].content}
          </div>
        </article>

        {/* Newsletter Section */}
        <div className="mt-16 py-8 border-t border-green-100">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Get Soil Health Updates
            </h3>
            <p className="text-green-700 mb-6">
              Join our community of farmers committed to building healthier soils.
              Receive practical tips, seasonal reminders, and research updates.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p>&copy; 2025 Soil Health Management Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SoilHealthBlog;