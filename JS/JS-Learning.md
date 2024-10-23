## Basic of JS

- [Hoisting](https://youtu.be/aT1WFBmHstw?si=rUDZqRNFL6XdypkU)
- [Let & Const](https://youtu.be/swl_GTyPEs0?si=6n9bb_4gQegngYDs)
- [Event Propagation (Bubbling and Capturing)](https://youtu.be/nhyPuULoiAE?si=ZuZC6yrtcYjfG1Sp)
- [Utility Functions](https://youtu.be/wWw1XQgK5pM?si=mHSFeo-jD_2MRDGk)
- [Polyfills](https://youtu.be/CJUAL18dbKs?si=JW-s2OUXorAuvqEX)
- [Dynamic Property Names](https://youtu.be/NdIfAdIo290?si=l9UumUIwplV4CI1s)
- [What is this](https://www.youtube.com/watch?v=cwChC4BQF0Q)
- [What is debouncing ?](https://www.youtube.com/watch?v=DwU6Q4bCAB0)
- [Closures](https://www.youtube.com/watch?v=hctBPFsbSu0)
- [Method Chaining](https://youtu.be/Iz3F3yv5rN0?si=KMSmmV5UGsQ7hNvE)
- [What is Rest and Spread Operator?](https://youtu.be/WqYk7T7yOXQ?si=suPyuNXsA6Yce371)
- [Async/Await](https://youtu.be/lWhOf6Kvknc?si=V3GuWoM7bMeZ9NjB)
- [Async Javascript fundamentals](https://youtu.be/zgt5oTD3rRc?si=P0-ONx07MdSXP8cX)
- [Promises](https://youtu.be/ohQsVNyA4D0?si=ariLK4UqQWM3pjWc)
    - Promises, Arrow functions, alert, fetch etc. are not a part of JS. It is a part of Browser window.
- [Web Workers](https://www.youtube.com/watch?v=Gcp7triXFjg)
- [Create a Wrapper Class](https://youtu.be/1bmRVC7eiik?si=Tnb6xKwy7L52P2JI)
- [Map Filter Reduce](https://youtu.be/kmcbAiudceM?si=Wo-HBxF2mYSclDNm)
- [JSON Web Tokens (JWT)](https://youtu.be/E5gnjCfhLr4?si=4oua_Iqe2BeUx9iV)
- [Immediately Invoked Function Expressions IIFE ](https://youtu.be/GAIbn16Iytc?si=bRwUeQPej-H3s3gc)
- [What is prototype?]()
- [What is bind, call , apply.](https://youtu.be/rRAvhzux-7Y?si=CzG0og0i0kRQg_uR)
- [Events in Javascript](https://youtu.be/_ALUMTa8BAE?si=sqYEVKhJ5iAVJNkK)
- [You don't know array in javascript | PACKED vs HOLEY | JSVU | V8-debug](https://youtu.be/ZRS485LxX0s?si=YVECC-gZdBM-Ptkv)
- [fetch](https://youtu.be/Rive84an6Lc?si=aOPvLCR9qftit1Kf)

what is HOF or HOC?


## [Design Patterns in js]

1. [Factory Pattern](https://youtu.be/kuirGzhGhyw?si=JZhGdI55aKP4ZndX)
2. [Singleton Pattern](https://youtu.be/JKNjfDCNPa4?si=_NaEIdQAgx0ixWyO)
3. [Strategy Pattern](https://youtu.be/SicL4fYCz8w?si=rRFD1Mo-3SC6zlBX)
4. [Iterator Pattern](https://youtu.be/c85EStPZR8M?si=A-JfyTJcROwDxBRI)
5. [Observer Pattern](https://youtu.be/45TeJEmcqk8?si=gw5A0-QitJe3fJez)
6. [Proxy Pattern](https://youtu.be/SFTpSFQNPts?si=pVCZ-ZyHbjnmxDno)
7. [Mediator Pattern](https://youtu.be/ZuhgOu-DGA4?si=SgsWJ_RiJ3y7Whps)
8. [Visitor Pattern](https://youtu.be/x-Gx0Ym1Di0?si=ME94_R8X-1iMq958)
9. [Retry Pattern](https://youtu.be/fYZfFdbr8mc?si=W8joDB1P-dxyMdDD)
10. [Builder Pattern](https://youtu.be/McF9ak0kKjA?si=y8vMdmCsLsUOcaxa) 


//todo : why need Design Patterns ? application of each Design Patterns.
Such as we can optimze the latency of the network by caching the deatils 


## Reference Links
- [https://www.youtube.com/@DevSage/playlists](DevSage Learn JS)
- [Build React.js From Scratch](https://youtu.be/zx6GRScq93U?si=Sy_CGUKuAb5fZvUB)
- [Building an Unblockable Web Scraper with Proxies! | Node.js](https://youtu.be/oF71O9urS14?si=sDLTOR6Rencgc88y)
- [Javascript Core Concepts](https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37)
web workers cannot perform any dom manipulation
only the main thread can access and manipulate the dom



- We can only have at most one rest parameter function test(...arg1, ...arg2) (Invalid), function test(...arg1, ...arg2) (valid)
- Rest parameter must be the last parameter function test(arg1, ...arg2)

Rest Operator VS Spread Operator

Rest Operator (...): Collects multiple elements into a single array. Used in function parameters.
Spread Operator (...): Expands elements of an iterable into individual elements. Used in array and object literals, and function calls. 


Rest Operator
The rest operator is used to collect multiple elements into a single array. It is typically used in function parameters to handle an indefinite number of arguments.

// JavaScript

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10



Spread Operator
The spread operator is used to expand elements of an iterable (like an array) into individual elements. It is commonly used in array and object literals, as well as function calls.

Example

// JavaScript

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







A utility function is a standalone function that does not have any side effects and whose output is directly depends on input.
Utility Functions are usually set aside to perform very common and often reused routines or tasks
therefore you are able to have these utility function which are not tightly coupled to any other client or anybody  that wants to use them
they are usually grouped together in their own files and you can take them reuse




what is the use of JavaScript Array reduce()
The reduce() method in JavaScript is used to execute a reducer function on each element of the array, resulting in a single output value. It is often used for summing up values, but it can be used for more complex operations like flattening arrays, counting instances of values, grouping objects by property, etc.

Pseudocode
Define an array.
Use the reduce() method on the array.
Provide a reducer function that takes an accumulator and the current value.
Optionally, provide an initial value for the accumulator.
Example Code
// JavaScript

// Example array
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum up the values
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
In this example:

accumulator is the accumulated value previously returned in the last invocation of the callback, or the initial value if provided.
currentValue is the current element being processed in the array.
0 is the initial value for the accumulator.

You can use the reduce() method to find the maximum value in an array by comparing the current value with the accumulator and returning the larger of the two. Here's how you can do it:

Pseudocode
Define an array of numbers.
Use the reduce() method on the array.
Provide a reducer function that takes an accumulator and the current value.
The reducer function should return the larger of the accumulator and the current value.
Optionally, provide an initial value for the accumulator.
Example Code

// JavaScript

// Example array
const numbers = [1, 3, 7, 2, 5, 10, 6];

// Using reduce to find the maximum value
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max); // Output: 10

In this example:

accumulator is the accumulated value previously returned in the last invocation of the callback, or the initial value if provided.
currentValue is the current element being processed in the array.
Math.max(accumulator, currentValue) returns the larger of the two values.
-Infinity is used as the initial value to ensure that any number in the array will be larger.


Here are examples of using the reduce() method for flattening arrays, counting instances of values, and grouping objects by a property.

Flattening Arrays
// JavaScript

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]



Counting Instances of Values
// JavaScript

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const countInstances = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(countInstances); 
// Output: { apple: 2, banana: 3, orange: 2 }

Grouping Objects by a Property
// JavaScript

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 },
  { name: 'Edward', age: 21 }
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
  const age = currentValue.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push(currentValue);
  return accumulator;
}, {});

console.log(groupedByAge); 
// Output: 
// {
//   '21': [
//     { name: 'Alice', age: 21 },
//     { name: 'Charlie', age: 21 },
//     { name: 'Edward', age: 21 }
//   ],
//   '25': [
//     { name: 'Bob', age: 25 },
//     { name: 'David', age: 25 }
//   ]
// }


You can use the reduce() method to remove duplicates from an array by checking if the accumulator already contains the current value before adding it. Here's how you can do it:

Pseudocode
Define an array with potential duplicate values.
Use the reduce() method on the array.
Provide a reducer function that takes an accumulator and the current value.
Check if the accumulator already contains the current value.
If not, add the current value to the accumulator.
Return the accumulator.


// JavaScript

const arrayWithDuplicates = [1, 2, 3, 4, 3, 2, 1, 5, 6, 5];

const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]


In this example:

accumulator is the array that will hold the unique values.
currentValue is the current element being processed in the array.
accumulator.includes(currentValue) checks if the current value is already in the accumulator.
If the current value is not in the accumulator, it is added using accumulator.push(currentValue).






prototype in Javascript


In JavaScript, the prototype is an object that is associated with every function and object by default. It allows objects to inherit properties and methods from other objects. This is a key feature of JavaScript's object-oriented programming model.

Key Points
Prototype Property: Every JavaScript function has a prototype property that is used to attach properties and methods that should be inherited by instances of that function.
Prototype Chain: Objects can inherit properties and methods from other objects through the prototype chain. This chain is formed by the __proto__ property, which points to the prototype of the constructor function.
Inheritance: Prototypes enable inheritance, allowing objects to share properties and methods without duplicating them.
Example Code

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

Prototype Chain
// JavaScript

// Checking the prototype chain
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null


Prototype Chain
// JavaScript

// Checking the prototype chain
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

Summary
Prototype Property: Functions have a prototype property to define properties and methods for instances.
Prototype Chain: Objects inherit from other objects through the __proto__ property.
Inheritance: Prototypes enable inheritance, allowing objects to share properties and methods efficiently.
This mechanism allows for efficient memory usage and a flexible way to share behavior among objects.


What are the differences between prototypal inheritance and classical inheritance in JavaScript?


Summary
Prototypal Inheritance:

Objects inherit directly from other objects.
More dynamic and flexible.
No classes, uses constructor functions and prototypes.
Objects can be created using Object.create().
Classical Inheritance:

Based on classes.
More static and less flexible.
Supports single inheritance.
Uses class syntax and new keyword for instance creation.
Both paradigms have their own advantages and use cases, and JavaScript supports both, allowing developers to choose the most appropriate model for their needs.


Example of Prototypal Inheritance
// JavaScript

const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const alice = Object.create(person);
alice.name = 'Alice';
alice.greet(); // Output: Hello, my name is Alice


Example of Classical Inheritance
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


[bind](https://youtu.be/75dMiOY_4ac?si=XPopKXy5VioU9exM)