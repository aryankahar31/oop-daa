import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Programming Learning Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Empowering students to master programming concepts through practical learning
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
            Comprehensive Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Structured content covering both basic and advanced programming concepts
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
            Student-Focused
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Designed specifically for students, with practical examples and clear explanations
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
            Quality Content
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Carefully curated programming examples and algorithmic problems
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          We believe that learning to program should be accessible, practical, and engaging. Our platform is designed to help students master programming concepts through hands-on practice and real-world examples.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Whether you're just starting with C++ or diving deep into advanced algorithms, we're here to support your learning journey with high-quality resources and structured learning paths.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Join Our Community</h2>
        <p className="text-lg text-center mb-8">
          Connect with fellow learners and start your programming journey today
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;