import React, { useState, useEffect } from "react";
import blogData from "../data/blogdata.json";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [displayedGuidelines, setDisplayedGuidelines] = useState([]);

  // Function to get random items from array
  const getRandomItems = (array = [], count) => {
    // Add safety check
    if (!Array.isArray(array)) {
      console.error("Expected array, got:", array);
      return [];
    }
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  useEffect(() => {
    // console.log("Blog data:", blogData);
    // console.log("Posts:", blogData.blogPosts);
    // console.log("Guidelines:", blogData.guidelines);

    try {
      const filteredPosts =
        activeCategory === "all"
          ? blogData.blogPosts || []
          : (blogData.blogPosts || []).filter(
              (post) => post.category === activeCategory
            );

      setDisplayedPosts(getRandomItems(filteredPosts, 6));
    } catch (error) {
      console.error("Error processing posts:", error);
      setDisplayedPosts([]);
    }
  }, [activeCategory]);

  useEffect(() => {
    try {
      setDisplayedGuidelines(getRandomItems(blogData.guidelines || [], 2));
    } catch (error) {
      console.error("Error processing guidelines:", error);
      setDisplayedGuidelines([]);
    }
  }, []);

  // Add safety check for rendering
  if (!blogData || !blogData.blogPosts || !blogData.guidelines) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Farmer's Knowledge Hub</h1>
          <p className="text-xl">
            Your guide to sustainable and profitable farming
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-green-100 p-4">
        <div className="container mx-auto flex flex-wrap gap-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded ${
              activeCategory === "all"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600"
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setActiveCategory("soil")}
            className={`px-4 py-2 rounded ${
              activeCategory === "soil"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600"
            }`}
          >
            Soil Management
          </button>
          <button
            onClick={() => setActiveCategory("tips")}
            className={`px-4 py-2 rounded ${
              activeCategory === "tips"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600"
            }`}
          >
            Farming Tips
          </button>
          <button
            onClick={() => setActiveCategory("market")}
            className={`px-4 py-2 rounded ${
              activeCategory === "market"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600"
            }`}
          >
            Market Insights
          </button>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex justify-between items-center text-sm text-green-600">
                  <span>{post.readTime} read</span>
                  <button className="bg-green-50 px-4 py-2 rounded-full hover:bg-green-100">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Essential Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {displayedGuidelines.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  {guide.title}
                </h3>
                <ul className="space-y-2">
                  {guide.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Farming Trends
          </h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest agricultural insights and
            tips
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded text-gray-800"
            />
            <button className="bg-white text-green-700 px-6 py-2 rounded font-semibold hover:bg-green-50">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
