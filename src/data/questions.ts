import { CppQuestion } from '../types';

export const questions: CppQuestion[] = [
  {
    id: 1,
    title: 'Convert Temperature (Fahrenheit ↔ Celsius)',
    category: 'Basics',
    description: 'Program to convert temperature between Fahrenheit and Celsius using bidirectional conversion',
    code: `#include <iostream>
using namespace std;

int main() {
    float fahrenheit, celsius;
    
    // Fahrenheit to Celsius
    cout << "Enter temperature in Fahrenheit: ";
    cin >> fahrenheit;
    celsius = (fahrenheit - 32) * 5 / 9;
    cout << "Temperature in Celsius: " << celsius << endl;
    
    // Celsius to Fahrenheit
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    fahrenheit = (celsius * 9 / 5) + 32;
    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;
    
    return 0;
}`
  },
  {
    id: 2,
    title: 'Calculate Simple Interest',
    category: 'Basics',
    description: 'Calculate Simple Interest using the formula: SI = (P × R × T)/100',
    code: `#include <iostream>
using namespace std;

int main() {
    float principal, rate, time, simpleInterest;
    
    cout << "Enter Principal amount (P): ";
    cin >> principal;
    cout << "Enter Rate of interest (R): ";
    cin >> rate;
    cout << "Enter Time period (T): ";
    cin >> time;
    
    simpleInterest = (principal * rate * time) / 100;
    
    cout << "Simple Interest = " << simpleInterest << endl;
    return 0;
}`
  },
  {
    id: 3,
    title: 'Single Inheritance Example',
    category: 'OOP',
    description: 'Demonstrates single inheritance with a base class and derived class',
    code: `#include <iostream>
using namespace std;

class Base {
public:
    void displayBase() {
        cout << "This is base class" << endl;
    }
};

class Derived : public Base {
public:
    void displayDerived() {
        cout << "This is derived class" << endl;
    }
};

int main() {
    Derived obj;
    obj.displayBase();    // Calling base class method
    obj.displayDerived(); // Calling derived class method
    return 0;
}`
  },
  {
    id: 4,
    title: 'Find Area of Rectangle',
    category: 'Basics',
    description: 'Calculate the area of a rectangle using length and width',
    code: `#include <iostream>
using namespace std;

int main() {
    float length, width, area;
    
    cout << "Enter length of rectangle: ";
    cin >> length;
    cout << "Enter width of rectangle: ";
    cin >> width;
    
    area = length * width;
    
    cout << "Area of rectangle = " << area << endl;
    return 0;
}`
  },
  {
    id: 5,
    title: 'Check if Number is Odd or Even',
    category: 'Basics',
    description: 'Program to check if a given number is odd or even using modulus operator',
    code: `#include <iostream>
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if(number % 2 == 0) {
        cout << number << " is Even" << endl;
    } else {
        cout << number << " is Odd" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 6,
    title: 'Simple Calculator using Switch Case',
    category: 'Control Flow',
    description: 'A basic calculator implementing addition, subtraction, multiplication, and division using switch case',
    code: `#include <iostream>
using namespace std;

int main() {
    int num1, num2, choice;
    float result;

    cout << "Enter two numbers: " << endl;
    cin >> num1 >> num2;

    cout << "1. Addition" << endl;
    cout << "2. Subtraction" << endl;
    cout << "3. Multiplication" << endl;
    cout << "4. Division" << endl;
    cout << "Enter your choice (1-4): ";
    cin >> choice;

    switch(choice) {
        case 1:
            result = num1 + num2;
            cout << "Result: " << result << endl;
            break;
        case 2:
            result = num1 - num2;
            cout << "Result: " << result << endl;
            break;
        case 3:
            result = num1 * num2;
            cout << "Result: " << result << endl;
            break;
        case 4:
            if(num2 == 0) {
                cout << "Error: Division by zero!" << endl;
            } else {
                result = static_cast<float>(num1) / num2;
                cout << "Result: " << result << endl;
            }
            break;
        default:
            cout << "Invalid choice!" << endl;
    }
    return 0;
}`
  },
  {
    id: 7,
    title: 'Check if Number is Positive or Negative',
    category: 'Basics',
    description: 'Program to check if a number is positive, negative, or zero',
    code: `#include <iostream>
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if(number > 0) {
        cout << number << " is positive" << endl;
    } else if(number < 0) {
        cout << number << " is negative" << endl;
    } else {
        cout << "Number is zero" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 8,
    title: 'Function Overloading Example',
    category: 'Functions',
    description: 'Demonstrates function overloading with different parameter types',
    code: `#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    Calculator calc;
    
    cout << "Integer addition: " << calc.add(5, 3) << endl;
    cout << "Double addition: " << calc.add(5.5, 3.7) << endl;
    
    return 0;
}`
  },
  {
    id: 9,
    title: 'Print Number Pattern',
    category: 'Patterns',
    description: 'Print a pattern where each row contains the row number repeated row number times',
    code: `#include <iostream>
using namespace std;

int main() {
    int rows = 5;
    
    for(int i = 1; i <= rows; i++) {
        for(int j = 1; j <= i; j++) {
            cout << i;
        }
        cout << endl;
    }
    return 0;
}`
  },
  {
    id: 10,
    title: 'Calculate Area of Circle',
    category: 'Basics',
    description: 'Calculate the area of a circle using the formula A = π * r²',
    code: `#include <iostream>
using namespace std;

const double PI = 3.14159;

int main() {
    float radius, area;
    
    cout << "Enter radius of circle: ";
    cin >> radius;
    
    area = PI * radius * radius;
    
    cout << "Area of circle = " << area << endl;
    return 0;
}`
  },
  {
    id: 11,
    title: 'Reverse a Number',
    category: 'Basics',
    description: 'Program to reverse a given number using a while loop',
    code: `#include <iostream>
using namespace std;

int main() {
    int number, reversed = 0;
    
    cout << "Enter a number: ";
    cin >> number;
    
    while(number > 0) {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number /= 10;
    }
    
    cout << "Reversed number: " << reversed << endl;
    return 0;
}`
  },
  {
    id: 12,
    title: 'Check Prime Number',
    category: 'Functions',
    description: 'Program to check if a number is prime using optimized algorithm',
    code: `#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if(n <= 1) return false;
    if(n <= 3) return true;
    
    if(n % 2 == 0 || n % 3 == 0) return false;
    
    for(int i = 5; i <= sqrt(n); i += 6) {
        if(n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if(isPrime(number)) {
        cout << number << " is prime" << endl;
    } else {
        cout << number << " is not prime" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 13,
    title: 'Constructor and Function Overloading',
    category: 'OOP',
    description: 'Demonstrates both constructor and function overloading in C++',
    code: `#include <iostream>
using namespace std;

class Calculator {
private:
    int value;
    double dValue;

public:
    // Constructor Overloading
    Calculator() : value(0), dValue(0.0) {}
    
    Calculator(int v) : value(v), dValue(0.0) {}
    
    Calculator(double v) : value(0), dValue(v) {}

    // Function Overloading
    void add(int a, int b) {
        value = a + b;
        cout << "Integer addition: " << value << endl;
    }

    void add(double a, double b) {
        dValue = a + b;
        cout << "Double addition: " << dValue << endl;
    }
};

int main() {
    Calculator calc1;             // Default constructor
    Calculator calc2(10);         // Integer constructor
    Calculator calc3(10.5);       // Double constructor
    
    calc1.add(5, 3);             // Integer addition
    calc1.add(5.5, 3.5);         // Double addition
    
    return 0;
}`
  },
  {
    id: 14,
    title: 'Multilevel Inheritance',
    category: 'OOP',
    description: 'Demonstrates multilevel inheritance with three classes',
    code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal can eat" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog can bark" << endl;
    }
};

class GermanShepherd : public Dog {
public:
    void guard() {
        cout << "German Shepherd can guard" << endl;
    }
};

int main() {
    GermanShepherd dog;
    
    dog.eat();    // From Animal class
    dog.bark();   // From Dog class
    dog.guard();  // From GermanShepherd class
    
    return 0;
}`
  },
  {
    id: 15,
    title: 'Area Calculator (Rectangle and Square)',
    category: 'Control Flow',
    description: 'Calculate area of rectangle or square based on user choice using switch case',
    code: `#include <iostream>
using namespace std;

int main() {
    int choice;
    float area;
    
    cout << "Choose shape to calculate area:" << endl;
    cout << "1. Rectangle" << endl;
    cout << "2. Square" << endl;
    cout << "Enter choice (1 or 2): ";
    cin >> choice;
    
    switch(choice) {
        case 1: {
            float length, width;
            cout << "Enter length of rectangle: ";
            cin >> length;
            cout << "Enter width of rectangle: ";
            cin >> width;
            area = length * width;
            cout << "Area of rectangle = " << area << endl;
            break;
        }
        case 2: {
            float side;
            cout << "Enter side of square: ";
            cin >> side;
            area = side * side;
            cout << "Area of square = " << area << endl;
            break;
        }
        default:
            cout << "Invalid choice!" << endl;
    }
    return 0;
}`
  }
];

export default questions;