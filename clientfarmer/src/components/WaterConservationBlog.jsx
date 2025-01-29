import React, { useState } from 'react';

const WaterConservationBlog = () => {
  const [activeSection, setActiveSection] = useState('basics');

  const content = {
    basics: {
      title: "Water Conservation Fundamentals",
      content: `Water is one of our most precious agricultural resources. Understanding basic water 
      conservation principles can help you maintain productivity while reducing water usage.
      
      Key Water Management Concepts:
      • Water Cycle Understanding
      • Soil-Water Relationship
      • Evapotranspiration Basics
      • Water Use Efficiency
      • Drought Resistance Principles
      
      Every drop of water saved contributes to sustainable farming and helps protect our water resources
      for future generations. Start with understanding your current water usage patterns and identify
      areas where conservation can make the biggest impact.`
    },
    methods: {
      title: "Conservation Methods",
      content: `Modern farming offers numerous ways to conserve water while maintaining or even improving
      crop yields. Here are proven methods you can implement:

      Irrigation Techniques:
      • Drip Irrigation: Delivers water directly to plant roots
      • Precision Sprinklers: Reduces water loss through evaporation
      • Soil Moisture Sensors: Helps optimize watering schedules
      • Variable Rate Irrigation: Applies water based on specific field conditions
      
      Soil Management:
      • Mulching to retain moisture
      • No-till farming to improve water retention
      • Cover crops to reduce evaporation
      • Organic matter addition to increase water-holding capacity`
    },
    technology: {
      title: "Smart Technology",
      content: `Embrace modern technology to optimize water usage on your farm. Smart farming tools
      can significantly improve water conservation efforts.
      
      Available Technologies:
      • Soil Moisture Sensors
      • Weather Monitoring Systems
      • Smart Irrigation Controllers
      • Precision Agriculture Tools
      • Drought-Resistant Crop Varieties
      
      These technologies can help you make data-driven decisions about when and how much to irrigate,
      leading to significant water savings while maintaining optimal crop growth conditions.`
    },
    planning: {
      title: "Water Management Planning",
      content: `Developing a comprehensive water management plan is crucial for successful water conservation.
      Consider these elements when creating your plan:
      
      Planning Elements:
      • Water Source Assessment
      • Crop Water Requirements
      • Seasonal Water Availability
      • Infrastructure Evaluation
      • Emergency Drought Plans
      
      Regular monitoring and adjustment of your water management plan ensures continued effectiveness
      and helps you adapt to changing conditions throughout the growing season.`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">
            Water Conservation in Agriculture
          </h1>
          <p className="text-xl text-green-100">
            Practical methods and strategies to optimize water usage on your farm
          </p>
        </div>
      </header>

      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <nav className="max-w-4xl mx-auto px-6 py-1">
          <div className="flex flex-wrap gap-4">
            {Object.keys(content).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${activeSection === section
                    ? 'bg-green-600 text-white'
                    : 'text-green-700 hover:bg-green-50'
                  }`}
              >
                {content[section].title}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            {content[activeSection].title}
          </h2>
          <div className="text-green-700 space-y-6 whitespace-pre-line">
            {content[activeSection].content}
          </div>
        </article>

        {/* Tips Section */}
        <section className="mt-16 py-8 px-8 bg-green-50 rounded-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Quick Water Conservation Tips
          </h3>
          <div className="text-green-700 space-y-2">
            <p>• Monitor soil moisture levels regularly</p>
            <p>• Water during early morning or evening to reduce evaporation</p>
            <p>• Maintain irrigation systems to prevent leaks and waste</p>
            <p>• Use mulch to retain soil moisture</p>
            <p>• Choose drought-resistant crop varieties when possible</p>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 border-t border-green-100 pt-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Stay Informed
            </h3>
            <p className="text-green-700 mb-6">
              Get the latest water conservation tips and techniques delivered to your inbox.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm">
            &copy; 2025 Agricultural Water Conservation Blog. Helping farmers conserve water through education and practical solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WaterConservationBlog;