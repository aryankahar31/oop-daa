import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cpp from './pages/Cpp';
import DAA from './pages/DAA';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Toaster position="bottom-right" />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cpp" element={<Cpp />} />
          <Route path="/daa" element={<DAA />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600 dark:text-gray-300">
              © 2025 Programming Learning Hub. Created with ❤️ for students.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;