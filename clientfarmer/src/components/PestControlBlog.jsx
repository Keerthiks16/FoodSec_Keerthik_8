import React, { useState } from 'react';

const PestControlBlog = () => {
  const [activeSection, setActiveSection] = useState('ipm');

  const content = {
    ipm: {
      title: "Integrated Pest Management (IPM)",
      content: `Integrated Pest Management is a sustainable approach that combines different pest control
      methods to minimize crop damage while protecting the environment. This comprehensive strategy
      focuses on long-term prevention and control.

      Key IPM Principles:
      • Prevention First: Start with preventive measures
      • Regular Monitoring: Scout fields frequently
      • Economic Thresholds: Act only when necessary
      • Multiple Tactics: Use various control methods
      • Environmental Protection: Minimize ecological impact

      Implementing IPM requires understanding pest lifecycles, crop susceptibility periods, and
      the relationship between pests and beneficial organisms in your agricultural ecosystem.`
    },
    natural: {
      title: "Natural Control Methods",
      content: `Natural pest control methods work with nature to manage pest populations effectively.
      These approaches help maintain ecological balance while protecting your crops.

      Biological Control:
      • Beneficial Insects: Ladybugs, parasitic wasps, praying mantises
      • Predatory Mites: For controlling smaller pests
      • Beneficial Nematodes: For soil-dwelling pests
      • Birds and Bats: Natural pest controllers
      
      Cultural Controls:
      • Crop Rotation: Breaks pest cycles
      • Companion Planting: Repels pests naturally
      • Trap Crops: Attracts pests away from main crops
      • Timing Adjustments: Avoid peak pest periods`
    },
    chemical: {
      title: "Chemical Control Guidelines",
      content: `When chemical controls become necessary, it's crucial to use them responsibly
      and effectively. Follow these guidelines for optimal results and safety.

      Best Practices:
      • Select Appropriate Products: Choose specific rather than broad-spectrum
      • Time Applications Carefully: Consider weather and pest lifecycle
      • Follow Label Instructions: Always read and follow guidelines
      • Practice Resistance Management: Rotate chemical classes
      • Protect Beneficial Insects: Use selective pesticides
      
      Safety Considerations:
      • Use Personal Protective Equipment
      • Maintain Application Equipment
      • Store Chemicals Properly
      • Keep Detailed Application Records
      • Monitor Treatment Effectiveness`
    },
    prevention: {
      title: "Preventive Measures",
      content: `Prevention is the foundation of effective pest management. Implementing strong
      preventive measures can significantly reduce pest problems before they start.

      Key Prevention Strategies:
      • Maintain Healthy Soil: Strong plants resist pests better
      • Select Resistant Varieties: Choose pest-resistant crops
      • Practice Good Sanitation: Remove pest habitats
      • Install Physical Barriers: Prevent pest access
      • Monitor Weather Patterns: Anticipate pest outbreaks
      
      Regular Field Monitoring:
      • Scout fields weekly during growing season
      • Keep detailed pest observation records
      • Identify pest entry points
      • Track beneficial insect populations
      • Document weather conditions`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Section */}
      <header className="bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">
            Sustainable Pest Control Methods
          </h1>
          <p className="text-xl text-green-100">
            Effective strategies for managing agricultural pests while protecting your farm's ecosystem
          </p>
        </div>
      </header>

      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <nav className="max-w-4xl mx-auto px-6 py-2">
          <div className="flex flex-wrap gap-3">
            {Object.keys(content).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
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

        {/* Quick Reference Guide */}
        <section className="mt-16 bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            Quick Response Guide
          </h3>
          <div className="space-y-4 text-green-700">
            <p className="font-medium">When You Spot Pest Damage:</p>
            <div className="space-y-2">
              <p>1. Identify the pest species accurately</p>
              <p>2. Assess damage levels and spread</p>
              <p>3. Check economic threshold levels</p>
              <p>4. Consider multiple control options</p>
              <p>5. Implement chosen control methods quickly</p>
            </div>
          </div>
        </section>

        {/* Email Signup */}
        <section className="mt-16 border-t border-green-100 pt-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Get Pest Control Updates
            </h3>
            <p className="text-green-700 mb-6">
              Subscribe to receive seasonal pest alerts and management tips for your region.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="border-b border-green-800 pb-4 mb-4">
            <p className="font-medium">Emergency Pest Control Contacts:</p>
            <p className="text-sm mt-2">Agricultural Extension Service: 1-800-555-0123</p>
            <p className="text-sm">Pest Management Hotline: 1-800-555-0124</p>
          </div>
          <p className="text-sm">
            &copy; 2025 Sustainable Pest Management Blog. Protecting crops through integrated pest management.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PestControlBlog;