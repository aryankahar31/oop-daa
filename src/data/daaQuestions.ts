import { DAAQuestion } from '../types';

export const daaQuestions: DAAQuestion[] = [
  {
    id: 1,
    title: 'Array Operations',
    category: 'Arrays',
    description: 'Implementation of basic array operations including creation, access, modification, and iteration.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    code: `arr = [12, 113, 1, 129, 126, 118, 45, 77, 89, 91]

# Display array
print("Array elements:", *arr)

# Access elements
print("First element:", arr[0])
print("Fifth element:", arr[4])

# Modify element
arr[3] = 104
print("After modification:", *arr)`
  },
  {
    id: 2,
    title: 'Stack Implementation',
    category: 'Data Structures',
    description: 'Implementation of a stack with push, pop, peek, and display operations',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)',
    code: `class Stack:
    def __init__(self, size):
        self.arr = [None] * size
        self.capacity = size
        self.top = -1
    
    def push(self, x):
        if self.top >= self.capacity - 1:
            print("Stack Overflow")
            return
        self.top += 1
        self.arr[self.top] = x
    
    def pop(self):
        if self.top < 0:
            print("Stack Underflow")
            return -1
        value = self.arr[self.top]
        self.top -= 1
        return value
    
    def peek(self):
        if self.top < 0:
            print("Stack is Empty")
            return -1
        return self.arr[self.top]
    
    def display(self):
        if self.top < 0:
            print("Stack is Empty")
            return
        print("Stack elements:", end=" ")
        for i in range(self.top, -1, -1):
            print(self.arr[i], end=" ")
        print()

s = Stack(5)
s.push(10)
s.push(20)
s.push(30)
s.display()
print("Top element:", s.peek())
print("Popped:", s.pop())
s.display()`
  },
  {
    id: 3,
    title: 'Linear and Binary Search',
    category: 'Searching',
    description: 'Implementation of Linear and Binary Search algorithms',
    timeComplexity: 'O(n) for Linear, O(log n) for Binary',
    spaceComplexity: 'O(1)',
    code: `def linear_search(arr, n, key):
    for i in range(n):
        if arr[i] == key:
            return i
    return -1

def binary_search(arr, left, right, key):
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
            left = mid + 1
        else:
            right = mid - 1
    return -1

arr = [2, 3, 4, 10, 40]
n = len(arr)
key = 10

print("Linear Search Result:", linear_search(arr, n, key))
print("Binary Search Result:", binary_search(arr, 0, n-1, key))`
  },
  {
    id: 4,
    title: 'Sorting Algorithms',
    category: 'Sorting',
    description: 'Implementation of Bubble, Selection, and Insertion Sort',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def selection_sort(arr):
    n = len(arr)
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[min_idx], arr[i] = arr[i], arr[min_idx]

def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

def print_array(arr):
    print(*arr)

arr = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", end=" ")
print_array(arr)
bubble_sort(arr)
print("Sorted array:", end=" ")
print_array(arr)`
  },
  {
    id: 5,
    title: 'Quick Select Algorithm',
    category: 'Searching',
    description: 'Implementation of Quick Select to find the kth smallest element',
    timeComplexity: 'O(n) average case',
    spaceComplexity: 'O(1)',
    code: `def partition(arr, l, r):
    pivot = arr[r]
    i = l - 1
    
    for j in range(l, r):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[r] = arr[r], arr[i + 1]
    return i + 1

def quick_select(arr, l, r, k):
    if k > 0 and k <= r - l + 1:
        pos = partition(arr, l, r)
        
        if pos - l == k - 1:
            return arr[pos]
        elif pos - l > k - 1:
            return quick_select(arr, l, pos - 1, k)
        return quick_select(arr, pos + 1, r, k - pos + l - 1)
    return -1

arr = [10, 4, 5, 8, 6, 11, 26]
n = len(arr)
k = 3
print(f"{k}th smallest element:", quick_select(arr, 0, n-1, k))`
  },
  {
    id: 6,
    title: 'String Matching Algorithms',
    category: 'Searching',
    description: 'Implementation of Naive and KMP Pattern Matching algorithms',
    timeComplexity: 'O(mn) for Naive, O(m+n) for KMP',
    spaceComplexity: 'O(m)',
    code: `def naive_search(text, pattern):
    n = len(text)
    m = len(pattern)
    
    for i in range(n - m + 1):
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        if j == m:
            print(f"Pattern found at index {i}")

def compute_lps(pattern):
    m = len(pattern)
    lps = [0] * m
    len_ = 0
    i = 1
    
    while i < m:
        if pattern[i] == pattern[len_]:
            len_ += 1
            lps[i] = len_
            i += 1
        else:
            if len_ != 0:
                len_ = lps[len_ - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    lps = compute_lps(pattern)
    
    i = j = 0
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        if j == m:
            print(f"Pattern found at index {i - j}")
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
print("Naive String Matching:")
naive_search(text, pattern)
print("\nKMP Algorithm:")
kmp_search(text, pattern)`
  },
  {
    id: 7,
    title: 'Greedy Algorithms',
    category: 'Greedy',
    description: 'Implementation of File Merging and Coin Change problems using Greedy approach',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    code: `import heapq

def min_cost(files):
    pq = []
    for x in files:
        heapq.heappush(pq, x)
    
    cost = 0
    while len(pq) > 1:
        first = heapq.heappop(pq)
        second = heapq.heappop(pq)
        cost += first + second
        heapq.heappush(pq, first + second)
    return cost

def coin_change(coins, amount):
    coins.sort(reverse=True)
    result = []
    
    for coin in coins:
        while amount >= coin:
            result.append(coin)
            amount -= coin
    return result

files = [2, 3, 4, 5]
print("Minimum cost of merging files:", min_cost(files))

coins = [25, 10, 5, 1]
amount = 67
change = coin_change(coins, amount)
print("Coins needed for", amount, "cents:", *change)`
  },
  {
    id: 8,
    title: 'Divide and Conquer',
    category: 'Recursion',
    description: 'Implementation of Merge Sort and Matrix Multiplication using Divide and Conquer',
    timeComplexity: 'O(n log n) for Merge Sort',
    spaceComplexity: 'O(n)',
    code: `def merge(arr, l, m, r):
    left = arr[l:m + 1]
    right = arr[m + 1:r + 1]
    
    i = j = 0
    k = l
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1
    
    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1
    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1

def merge_sort(arr, l, r):
    if l < r:
        m = l + (r - l) // 2
        merge_sort(arr, l, m)
        merge_sort(arr, m + 1, r)
        merge(arr, l, m, r)

def matrix_multiply(A, B):
    n = len(A)
    C = [[0 for _ in range(n)] for _ in range(n)]
    
    if n == 1:
        C[0][0] = A[0][0] * B[0][0]
        return C
    
    for i in range(n):
        for j in range(n):
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]
    return C

arr = [12, 11, 13, 5, 6, 7]
print("Original array:", *arr)
merge_sort(arr, 0, len(arr) - 1)
print("Sorted array:", *arr)`
  },
  {
    id: 9,
    title: 'Dynamic Programming',
    category: 'Dynamic Programming',
    description: 'Implementation of Fibonacci and Longest Common Subsequence using Dynamic Programming',
    timeComplexity: 'O(n) for Fibonacci, O(mn) for LCS',
    spaceComplexity: 'O(n) for Fibonacci, O(mn) for LCS',
    code: `def fibonacci(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

def lcs(X, Y):
    m, n = len(X), len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i-1] == Y[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

n = 10
print(f"{n}th Fibonacci number:", fibonacci(n))

X = "AGGTAB"
Y = "GXTXAYB"
print("Length of LCS:", lcs(X, Y))`
  },
  {
    id: 10,
    title: 'Advanced Array Operations',
    category: 'Arrays',
    description: 'Implementation of operations on arrays with 20 elements',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    code: `class ArrayOperations:
    def __init__(self):
        self.arr = [i * 2 for i in range(20)]
        self.size = 20
    
    def display(self):
        print("Array elements:", *self.arr)
    
    def insert(self, pos, value):
        if 0 <= pos < self.size:
            self.arr[pos] = value
            print(f"Inserted {value} at position {pos}")
        else:
            print("Invalid position")
    
    def search(self, value):
        for i in range(self.size):
            if self.arr[i] == value:
                print(f"Found {value} at position {i}")
                return
        print(f"{value} not found in array")
    
    def reverse(self):
        for i in range(self.size // 2):
            self.arr[i], self.arr[self.size - 1 - i] = self.arr[self.size - 1 - i], self.arr[i]
        print("Array reversed")
    
    def get_max(self):
        return max(self.arr)
    
    def get_min(self):
        return min(self.arr)

arr = ArrayOperations()
arr.display()
arr.insert(5, 100)
arr.display()
arr.search(100)
print("Maximum value:", arr.get_max())
print("Minimum value:", arr.get_min())
arr.reverse()
arr.display()`
  }
];