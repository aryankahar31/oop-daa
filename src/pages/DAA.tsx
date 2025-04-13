import React, { useState } from 'react';
import { daaQuestions } from '../data/daaQuestions';
import QuestionCard from '../components/QuestionCard';
import SearchBar from '../components/SearchBar';
import { Category } from '../types';

const DAA = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Searching', 'Sorting', 'Dynamic Programming', 'Greedy', 'Recursion'];

  const filteredQuestions = daaQuestions.filter((question) => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || question.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Design and Analysis of Algorithms
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn fundamental algorithms and their implementations
        </p>
      </div>

      <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
        <div className="sm:w-64">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} isDaa={true} />
        ))}
      </div>
    </div>
  );
};

export default DAA;