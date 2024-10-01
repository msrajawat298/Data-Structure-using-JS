```markdown
# JavaScript Concepts and Examples

## 1. Types of Scopes in JavaScript
### File Scope:
In JavaScript, file scope refers to the scope of variables and functions within a single file. This concept is particularly relevant in the context of modules, where each file can be treated as a separate module with its own scope.

#### Key Points:
- **Global Variables in Non-Module Files**: In non-module files (i.e., files not using ES6 modules), variables declared with `var` at the top level are added to the global scope.
- **Module Scope**: In ES6 modules (files using `import` and `export`), top-level variables and functions are scoped to the module itself and are not added to the global scope.
- **IIFE (Immediately Invoked Function Expression)**: Another way to create file scope is by wrapping the entire file content in an IIFE, which creates a new function scope.

### Example:
```js
(function() {
  var fileScopedVar = "I am scoped to this file";
  console.log(fileScopedVar); // Accessible within the IIFE
})();
console.log(fileScopedVar); // Uncaught ReferenceError: fileScopedVar is not defined
```

## 2. Common Output Questions
### Q1: 
```js
console.log(a);
a = 5;
```
**Output**: `ReferenceError: a is not defined` (because `a` is not hoisted).

### Q2: 
```js
console.log(a);
var a = 5;
```
**Output**: `undefined` (due to hoisting; `var a` is declared but not initialized yet).

## 3. Regular Function vs Arrow Function
### Differences:
- **Syntax**: Arrow functions have a shorter syntax.
- **`this` Context**: Arrow functions don't bind their own `this`, while regular functions do.
- **Object Creation**: Arrow functions cannot be used as constructors.

### Example:
```js
var a = { 'x': () => console.log(this) };
a.x(); // `this` refers to the surrounding lexical scope (global object in non-strict mode).
```

### Example with Regular Function:
```js
var a = { 'x': function() { console.log(this) } };
a.x(); // `this` refers to the object `a`.
```

## 4. Closures in JavaScript
A **closure** is a function that remembers its lexical environment even when it’s executed outside its original scope.

### Example:
```js
function outer() {
  var a = 10;
  return function inner() {
    console.log(a);
  };
}
const innerFunc = outer();
innerFunc(); // Output: 10
```

## 5. Polyfills
A **polyfill** is a piece of code (usually JavaScript) used to provide modern functionality on older browsers that do not natively support it.

## 6. Difference Between Closure and Inner Function
- **Closure**: A function that retains access to variables from its outer scope.
- **Inner Function**: A function defined inside another function; it doesn't necessarily retain access to the outer scope unless a closure is formed.

## 7. Event Loop Example with `setTimeout` and `Promises`

### Using `setTimeout`:
```js
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
```
**Output**: 
```
1
3
2
```

### Using Promises:
```js
function test2() {
  return new Promise((resolve) => setTimeout(() => {
      console.log(2);
      resolve();
  }));
}
console.log(1);
test2().then(() => console.log(3));
```
**Output**:
```
1
2
3
```

### Using `async/await`:
```js
async function runTest() {
  console.log(1);
  await test2();
  console.log(3);
}
runTest();
```

## 8. JavaScript Generators
**Generators** allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

### Example: Batch Processing Large Arrays Using Generators
```js
function* processBatch(arr) {
  for (let item of arr) {
    yield item;
  }
}
```

## 9. Flatten a Multi-Dimensional Array
```js
function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

let arr = [1, 2, 3, [4, 5], [6, 7, [8, 19]], 101, [11], 12];
console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 19, 101, 11, 12]
```

## 10. Anagram Check
```js
function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
```

## 11. React Example - Button Click to Increase Number
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

## 12. SDLC (Software Development Life Cycle)
The SDLC consists of various stages like Planning, Design, Development, Testing, Deployment, and Maintenance. It provides a structured approach to software development.

## 13. Middleware in Node.js
A **middleware** is a function that has access to the request and response objects and can modify them or end the response.

### Example:
```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
```

## 14. Function Binding in JavaScript
The `bind()` method allows you to permanently set the value of `this` for a function.

### Example:
```js
const person = {
  name: 'Charlie',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
const person2 = {
  name: 'Mayank',
};

const greet = person.greet.bind(person2);
greet(); // Output: Hello, my name is Mayank
```
```

How many iterator in js?
d/f b/w foreach and map?
Pure component and component (in term of class and function)
react life cycle method?
ES6 features what have you used?