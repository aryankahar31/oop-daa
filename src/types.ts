export interface CppQuestion {
  id: number;
  title: string;
  category: string;
  code: string;
  description: string;
  isDone?: boolean;
}

export interface DAAQuestion {
  id: number;
  title: string;
  category: string;
  code: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  isDone?: boolean;
}

export type Category = 'Basics' | 'Functions' | 'OOP' | 'Patterns' | 'All' | 
                      'Arrays' | 'Searching' | 'Sorting' | 'Dynamic Programming' | 
                      'Greedy' | 'Recursion' | 'Data Structures';