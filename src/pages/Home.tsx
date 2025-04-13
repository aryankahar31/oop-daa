import React from 'react';
import { BookOpen, Code, Brain } from 'lucide-react';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Programming Learning Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Master programming concepts with our comprehensive learning resources
        </p>
      </div>

      <SearchBar />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">C++ Programming</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Learn core programming concepts with C++, from basics to advanced topics
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">Data Structures & Algorithms</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Master algorithmic thinking and solve complex programming challenges
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">Study Resources</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Access comprehensive study materials, practice problems, and tutorials
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Start Your Learning Journey Today</h2>
        <p className="text-lg text-center mb-8">
          Join thousands of students mastering programming concepts through our structured learning paths
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;