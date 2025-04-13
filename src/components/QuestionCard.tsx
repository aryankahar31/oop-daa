import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check, Download } from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import toast from 'react-hot-toast';
import { CppQuestion, DAAQuestion } from '../types';

SyntaxHighlighter.registerLanguage('cpp', cpp);

interface QuestionCardProps {
  question: CppQuestion | DAAQuestion;
  isDaa?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, isDaa = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDone, setIsDone] = useState(question.isDone || false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(question.code);
    toast.success('Code copied to clipboard!');
  };

  const downloadAsPDF = () => {
    // PDF download functionality will be implemented later
    toast.success('PDF download feature coming soon!');
  };

  const toggleDone = () => {
    setIsDone(!isDone);
    toast.success(isDone ? 'Marked as not done' : 'Marked as done');
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
      ${isDone ? 'border-l-4 border-green-500' : ''}`}>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDone}
              className={`p-1 rounded-full ${
                isDone ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <Check className={`h-4 w-4 ${isDone ? 'text-white' : 'text-gray-400'}`} />
            </button>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {question.title}
            </h3>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-block px-2 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 rounded">
            {question.category}
          </span>
          {isDaa && 'timeComplexity' in question && (
            <span className="inline-block px-2 py-1 text-sm font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900 rounded">
              Time: {question.timeComplexity}
            </span>
          )}
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {question.description}
            </p>
            <div className="relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
                <button
                  onClick={downloadAsPDF}
                  className="p-2 rounded bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700"
                  title="Download as PDF"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
              <SyntaxHighlighter
                language="cpp"
                style={vs2015}
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                }}
              >
                {question.code}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;