import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here, e.g.:
    // localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/api/placeholder/40/40"
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold text-gray-800">
              AharSetu
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/blogs"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blogs
              </Link>
              <Link
                to="/connect"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Connect
              </Link>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Blogs
          </Link>
          <Link
            to="/connect"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Connect
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
