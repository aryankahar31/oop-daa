import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Code2 } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Programming Hub
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/cpp"
                className={`nav-link ${isActive('/cpp') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              >
                C++
              </Link>
              <Link
                to="/daa"
                className={`nav-link ${isActive('/daa') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              >
                DAA
              </Link>
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              >
                Contact
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;