# JavaScript Concepts and Examples

## 1. Types of Scopes in JavaScript
### File Scope:
- In JavaScript, file scope refers to the scope of variables and functions within a single file. 
- This concept is particularly relevant in the context of modules, where each file can be treated as a separate module with its own scope.

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
a.x(); // `this` refers to the object `a` in a node js and window object in case of js. 
```

## 4. Closures in JavaScript
A **Closure** is a function that remembers its lexical environment even when it’s executed outside its original scope.

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

## 11. SDLC (Software Development Life Cycle)
The SDLC consists of various stages like Planning, Design, Development, Testing, Deployment, and Maintenance. It provides a structured approach to software development.

## 12. Middleware in Node.js
A **middleware** is a function that has access to the request and response objects and can modify them or end the response.

### Example:
```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
```

## 13. Function Binding in JavaScript
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

### 14. Hoisting
  **Hoisting** refers to the behavior in JavaScript where variable declarations (not initializations) are moved to the top of their scope before code execution. This allows variables to be used before they are declared.

### 1. **`var` Hoisting**:
   - Variables declared with `var` are **hoisted** to the top of their scope (function or global scope).
   - The declaration is hoisted, but the initialization stays in place.
   - When a `var` variable is used before initialization, its value is `undefined` (since only the declaration is hoisted).

   Example:
   ```js
   console.log(x);  // Output: undefined
   var x = 5;       // Declaration hoisted to the top, but initialization happens here.
   ```

### 2. **`let` and `const` Hoisting**:
   - Variables declared with `let` and `const` are also hoisted, but they are **not initialized** during hoisting. Instead, they enter the **"temporal dead zone" (TDZ)** until the declaration is encountered.
   - If you try to access a `let` or `const` variable before its declaration, JavaScript will throw a **ReferenceError**.

   Example (`let`):
   ```js
   console.log(y);  // ReferenceError: Cannot access 'y' before initialization
   let y = 5;
   ```

   Example (`const`):
   ```js
   console.log(z);  // ReferenceError: Cannot access 'z' before initialization
   const z = 10;
   ```

### 15. **Difference Between `var`, `let`, and `const` in Hoisting**:

| Feature                      | `var`                                       | `let`                              | `const`                            |
|------------------------------|---------------------------------------------|------------------------------------|------------------------------------|
| **Scope**                     | Function scope (or global if outside).      | Block scope.                       | Block scope.                       |
| **Hoisting**                  | Hoisted and initialized with `undefined`.   | Hoisted but uninitialized (TDZ).   | Hoisted but uninitialized (TDZ).   |
| **Re-declaration**            | Allowed within the same scope.              | Not allowed in the same scope.     | Not allowed in the same scope.     |
| **Re-assignment**             | Allowed.                                   | Allowed.                           | Not allowed (must be initialized). |

### 16. **How many iterators are in JavaScript?**

JavaScript has several iterators, some of the most commonly used are:

- **forEach**: Executes a provided function once for each array element.
- **map**: Returns a new array by applying a function to each element of an array.
- **filter**: Creates a new array with all elements that pass a test implemented by the provided function.
- **reduce**: Executes a reducer function on each element, resulting in a single output value.
- **some**: Tests whether at least one element in the array passes the test.
- **every**: Tests whether all elements in the array pass the test.
- **find**: Returns the value of the first element that satisfies the condition.
- **findIndex**: Returns the index of the first element that satisfies the condition.
- **entries**: Returns a new Array Iterator object that contains key/value pairs for each index.
- **keys**: Returns a new Array Iterator that contains the keys for each index.
- **values**: Returns a new Array Iterator that contains the values for each index.

### 17. **Difference between `forEach` and `map`?**

| Feature              | `forEach`                                  | `map`                                      |
|----------------------|--------------------------------------------|--------------------------------------------|
| **Return Value**      | `undefined`, doesn’t return a new array.   | Returns a new array.                       |
| **Use Case**          | Used for side effects like logging, mutations. | Used when you want to transform each element. |
| **Chaining**          | Cannot be chained since it returns `undefined`. | Can be chained with other array methods.   |
| **Performance**       | Generally, slightly faster.                | Slightly slower due to creating a new array. |
| **Modification**      | Directly modifies the original array (if intended). | Doesn’t modify the original array.         |

### 18. **ES6 Features You’ve Used**

Some commonly used ES6 features:
- **Arrow Functions**: Cleaner syntax for functions.
  ```js
  const add = (a, b) => a + b;
  ```
  
- **Template Literals**: Embed expressions inside strings.
  ```js
  const name = 'John';
  console.log(`Hello, ${name}`);
  ```

- **Destructuring**: Easily extract values from arrays/objects.
  ```js
  const { name, age } = person;
  const [first, second] = array;
  ```

- **Spread/Rest Operators**: Expanding or combining arrays/objects.
  ```js
  const combined = { ...obj1, ...obj2 };
  const newArray = [...arr1, ...arr2];
  ```

- **Classes**: ES6 syntax for object-oriented programming.
  ```js
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  ```

- **Modules**: Import/export functionality between files.
  ```js
  import { moduleName } from './file';
  export default function() { ... };
  ```

- **Promise**: For handling asynchronous operations.
  ```js
  const promise = new Promise((resolve, reject) => {
    resolve("Success");
  });
  ```

- **let/const**: Block-scoped variable declarations.


### 19. What is curry in js ?
Currying is a functional programming technique in JavaScript where a function is transformed into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, a curried function takes the first argument and returns a new function that takes the second argument, and so on, until all arguments have been provided.

- Non-Curried Function
  ```js
  function add(a, b) {
    return a + b;
  }

  console.log(add(2, 3)); // Output: 5
  ```
  Curried Function
  ```js
    function add(a) {
    return function(b) {
      return a + b;
    };
  }

  const addTwo = add(2);
  console.log(addTwo(3)); // Output: 5

  // Or directly
  console.log(add(2)(3)); // Output: 5
  ```
### Benefits of Currying
- Reusability: Curried functions can be partially applied, creating new functions with preset arguments.
- Function Composition: Currying makes it easier to compose functions and create more modular and reusable code.
- Readability: It can make the code more readable and expressive, especially when dealing with higher-order functions.
- Practical Example
  ```js
    function multiply(a) {
    return function(b) {
      return a * b;
    };
  }

  const double = multiply(2);
  const triple = multiply(3);

  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15

  4. Configuration
  const configureRequest = method => url => data => {
    return fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const postRequest = configureRequest('POST');
  const putRequest = configureRequest('PUT');

  postRequest('/api/data')({ key: 'value' }).then(response => response.json()).then(data => console.log(data));
  putRequest('/api/data/1')({ key: 'newValue' }).then(response => response.json()).then(data => console.log(data));
  ```
#### Summary
  - Currying: Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.
  - Benefits: Enhances reusability, function composition, and readability.
  - Usage: Useful in scenarios like event handling, configuration settings, and creating partially applied functions.

### What is JWT token and d/f part of jwt token?
  - A JWT (JSON Web Token) is a compact, URL-safe token used for securely transmitting information between parties as a JSON object.
  - It consists of three parts: Header, Payload, and Signature.
### Is there any other reason why JWT token is use other that authentication?
  - Yes, for not maintain the session. for example in distributed System we are using load balancer. If we are using session then load balancer has to check every time to sent the request to that server there first session was created. For Prevent that issue we are using JWT token. JWT token it self containing all the detail that required to handshake again. [Click to learn more](https://www.youtube.com/shorts/4o2AkDC8Z9c)
### Difference between packages and libraries and framework?
### D/F B/W Promise.All and Promise.Settled?
### D/F B/W slice and splice?
### D/f b/w Call & Apply and bind?
### D/f b/w arrow and regular function ?
### D/f b/w JS and TS?
### What is static typing in TS?
### D/f b/w npm and yarn?
### Why are we using node js while there are php, java, python etc lot's of technologies there?
### What is callback function?
### pros and cons of using promises?
### what is the use of async and await?


