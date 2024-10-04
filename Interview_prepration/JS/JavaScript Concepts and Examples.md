# JavaScript Concepts and Examples

This README provides an overview of some fundamental JavaScript concepts, including utility functions, the `reduce()` method, prototypes, inheritance, and more. It includes explanations, pseudocode, and example code snippets to illustrate each concept.

---

## Table of Contents

- [Utility Functions](#utility-functions)
- [JavaScript Array `reduce()` Method](#javascript-array-reduce-method)
  - [Summing Values](#summing-values)
  - [Finding the Maximum Value](#finding-the-maximum-value)
  - [Flattening Arrays](#flattening-arrays)
  - [Counting Instances of Values](#counting-instances-of-values)
  - [Removing Duplicates](#removing-duplicates)
- [Prototype in JavaScript](#prototype-in-javascript)
  - [Prototype Chain](#prototype-chain)
- [Prototypal vs. Classical Inheritance](#prototypal-vs-classical-inheritance)
  - [Prototypal Inheritance Example](#prototypal-inheritance-example)
  - [Classical Inheritance Example](#classical-inheritance-example)
- [Additional Resources](#additional-resources)

---

## Utility Functions

A **utility function** is a standalone function that has no side effects and whose output depends solely on its input. 
- Utility functions are used to perform common, reusable tasks and are not tightly coupled to any other part of the codebase.
- They are usually grouped together in their own files for easy reuse.
- The Output only depends on input what user provided.

**Key Points:**

- **Pure Functions:** Utility functions are often pure functions, meaning they do not modify any external state.
- **Reusability:** They perform common tasks that can be reused across different parts of an application.
- **Decoupling:** Since they are not tied to specific clients or modules, they can be easily maintained and tested.



---

## JavaScript Array `reduce()` Method

The `reduce()` method executes a reducer function on each element of an array, resulting in a single output value. 
- It's versatile and can be used for various operations like summing values, finding maximums, flattening arrays, and more.

- Syntax
  ```
  reduce(callbackFn, initialValue) //optional to pass
  reduce(callbackFn) //default initialValue is arr[0]
  ```
### Summing Values

**Pseudocode:**

1. Define an array of numbers.
2. Use the `reduce()` method to sum up the values.
3. Provide a reducer function with an accumulator and the current value.
4. Optionally, provide an initial value for the accumulator.

**Example Code:**

```javascript
// JavaScript

// Example array
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum up the values
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```

### Finding the Maximum Value

You can find the maximum value by comparing the accumulator with the current value and returning the larger one.

**Example Code:**

```javascript
// JavaScript

// Example array
const numbers = [1, 3, 7, 2, 5, 10, 6];

// Using reduce to find the maximum value
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max); // Output: 10
```

### Flattening Arrays

Flatten nested arrays into a single array using `reduce()`.

**Example Code:**

```javascript
// JavaScript

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
```

### Counting Instances of Values

Count how many times each value appears in an array.

**Example Code:**

```javascript
// JavaScript

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const countInstances = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(countInstances); 
// Output: { apple: 2, banana: 3, orange: 2 }
```

### Removing Duplicates

Use `reduce()` to create a new array without duplicate values.

**Example Code:**

```javascript
// JavaScript

const arrayWithDuplicates = [1, 2, 3, 4, 3, 2, 1, 5, 6, 5];

const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
```

---

## Prototype in JavaScript

In JavaScript, the **prototype** is an object that is associated with every function and object by default. It allows objects to inherit properties and methods from other objects, enabling a powerful form of object-oriented programming.

### Key Points

- **Prototype Property:** Every function has a `prototype` property used to attach properties and methods to be inherited by instances.
- **Prototype Chain:** Objects inherit from other objects through the `__proto__` property, forming a chain.
- **Inheritance:** Prototypes enable inheritance, allowing objects to share properties and methods efficiently.

### Example Code

```javascript
// JavaScript

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances
const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

// Calling the inherited method
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
bob.greet();   // Output: Hello, my name is Bob and I am 25 years old.
```

### Prototype Chain

```javascript
// JavaScript

// Checking the prototype chain
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
```

---

## Prototypal vs. Classical Inheritance

JavaScript supports both prototypal and classical inheritance models, each with its own advantages.

### Summary

- **Prototypal Inheritance:**
  - Objects inherit directly from other objects.
  - More dynamic and flexible.
  - Uses constructor functions and prototypes.
  - Objects can be created using `Object.create()`.

- **Classical Inheritance:**
  - Based on classes.
  - More static and less flexible.
  - Uses `class` syntax and the `new` keyword.
  - Supports single inheritance.

### Prototypal Inheritance Example

```javascript
// JavaScript

const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const alice = Object.create(person);
alice.name = 'Alice';
alice.greet(); // Output: Hello, my name is Alice
```

### Classical Inheritance Example

```javascript
// JavaScript

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const bob = new Student('Bob', 123);
bob.greet(); // Output: Hello, my name is Bob
bob.study(); // Output: Bob is studying.
```

---

### HOF (Higher-Order Function)

A **Higher-Order Function (HOF)** in JavaScript (and many other programming languages) refers to a function that either:

1. **Takes one or more functions as arguments**, or
2. **Returns a function** as its result.

HOFs are a key part of functional programming, allowing for more abstract and reusable code.

#### Examples of HOF:

- **`map()`, `filter()`, `reduce()`** are common higher-order functions.

```javascript
const numbers = [1, 2, 3, 4];

// Example of a HOF that takes a function as an argument (callback)
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Example of a HOF that returns a function
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```

### HOC (Higher-Order Component)

A **Higher-Order Component (HOC)** in **React** is a pattern that emerges from React’s compositional nature. An HOC is a function that **takes a component as an argument** and returns a **new enhanced component**. It allows you to reuse component logic across multiple components without repeating code.

#### Key points about HOCs:
- HOCs are **not part of the React API** but rather a pattern.
- They are used for tasks like authentication, authorization, logging, performance optimizations, etc.

#### Example of HOC:

```javascript
import React from 'react';

// A simple component
function HelloWorld({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Higher-Order Component that adds additional functionality
function withLogger(WrappedComponent) {
  return function (props) {
    console.log('Rendering', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

// Using HOC
const EnhancedHelloWorld = withLogger(HelloWorld);

// Render the Enhanced Component
function App() {
  return <EnhancedHelloWorld name="John" />;
}
```

In this example:
- **`withLogger`** is the HOC that enhances the `HelloWorld` component by logging a message every time it renders.
- The enhanced component (`EnhancedHelloWorld`) now includes this extra functionality without modifying the original `HelloWorld` component.

Both HOFs and HOCs allow for cleaner, more modular, and reusable code.

---
### [Web workers](https://www.youtube.com/watch?v=Gcp7triXFjg)
  - Web workers cannot perform any dom manipulation and it is running Separated thread instead of main thread, only the main thread can access and manipulate the dom.

---
- **Understanding `bind()`, `call()`, and `apply()`:** [JavaScript `bind()` Method Explained](https://youtu.be/75dMiOY_4ac?si=XPopKXy5VioU9exM)


- **Rest Operator VS Spread Operator**
  - We can only have at most one rest parameter function test(...arg1, ...arg2) (Invalid), function test(...arg1, ...arg2) (valid)
  - Rest parameter must be the last parameter function test(arg1, ...arg2)
  - Rest Operator (...): Collects multiple elements into a single array. Used in function parameters.
  - Spread Operator (...): Expands elements of an iterable into individual elements. Used in array and object literals, and function calls. 
  - **Rest Operator**
      - The rest operator is used to collect multiple elements into a single array. 
      - It is typically used in function parameters to handle an indefinite number of arguments.
        ```js
        function sum(...numbers) {
          return numbers.reduce((acc, curr) => acc + curr, 0);
        }

        console.log(sum(1, 2, 3, 4)); // Output: 10
        ```


  - **Spread Operator**
    - The spread operator is used to expand elements of an iterable (like an array) into individual elements. 
    - It is commonly used in array and object literals, as well as function calls.

      ```js
      // Using spread in array literals
      const arr1 = [1, 2, 3];
      const arr2 = [...arr1, 4, 5, 6];
      console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

      // Using spread in function calls
      const numbers = [1, 2, 3, 4];
      console.log(Math.max(...numbers)); // Output: 4

      // Using spread in object literals
      const obj1 = { a: 1, b: 2 };
      const obj2 = { ...obj1, c: 3 };
      console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
      ```
---