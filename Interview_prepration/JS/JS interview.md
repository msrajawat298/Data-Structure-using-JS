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
  - The `bind()` method allows you to permanently set the value of `this` for a function.
  - It create the copy of the function with all values.
  - While call and apply is called immediately.

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

```js

//call 
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!


//apply

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello', '!']); // Output: Hello, Alice!


//bind
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Output: Hello, Alice!


```

### D/f b/w arrow and regular function ?
### D/f b/w JS and TS?
### What is static typing in TS?
### D/f b/w npm and yarn?
### Why are we using node js while there are php, java, python etc lot's of technologies there?
### What is callback function?
### pros and cons of using promises?
### what is the use of async and await?
### What is prop drilling?
### What is API gateway?
### What is Authorization & Automation
### What is interface in typescript?
### What is MVW?
### What is route Protection?
### What is CORS?
### What is Prototype in js?
  - In JavaScript, a prototype is an object from which other objects inherit properties and methods. It is a fundamental concept that allows for inheritance and the sharing of properties and methods among objects.
  - **Key Points**
    - Prototype Property: Every JavaScript function has a prototype property, which is an object. This property is used to build the [[Prototype]] of instances created by the constructor function.
    - Prototype Chain: When accessing a property or method on an object, JavaScript first looks at the object itself. If it doesn't find the property or method, it looks at the object's prototype, and so on, up the prototype chain.
    - Inheritance: Prototypes allow objects to inherit properties and methods from other objects.
### what is micro task query in js ?
  - **Microtasks:** Tasks that have higher priority than macrotasks and are executed immediately after the currently executing script.
  - **Common Microtasks:** Promises, MutationObserver callbacks, and queueMicrotask.
  - **Execution Order:** Microtasks are executed before any macrotasks, ensuring that they run as soon as possible after the current script.
### D/f b/w Memoization and cache in Javascript?
### How we decide when to use Memoization or cache or not required Memoization?
  - **Use Memoization:**
    - For expensive computations.
    - With pure functions.
    - When functions are called frequently with the same inputs.
  - **Use Caching:**
    - For data fetching from external sources.
    - With immutable or infrequently changing data.
    - To address performance bottlenecks.
  - **Avoid Memoization or Caching:**
    **For low-cost computations.**
    **With highly dynamic data.**
    **When memory resources are constrained.**
### Deep copy vs. shallow copy.
  - In JavaScript, copying objects or arrays can be done in two ways: shallow copy and deep copy. Understanding the difference between these two methods is crucial for managing data structures effectively.
  - **Shallow Copy**
    - A shallow copy of an object or array copies the top-level properties, but nested objects or arrays are not copied. Instead, references to the nested objects are copied, meaning changes to the nested objects will affect both the original and the copied object.
    ```js
      const original = {
    name: 'Alice',
    address: {
      city: 'Wonderland'
    }
  };

  // Shallow copy using Object.assign
  const shallowCopy = Object.assign({}, original);

  // Modify the nested object
  shallowCopy.address.city = 'New Wonderland';

  console.log(original.address.city); // Output: 'New Wonderland'
  console.log(shallowCopy.address.city); // Output: 'New Wonderland'
  ```
  **Deep Copy**
    - A deep copy of an object or array copies all levels of the object or array, including nested objects or arrays. This means that changes to the nested objects in the copied object will not affect the original object.
    ```js
      const original = {
        name: 'Alice',
        address: {
          city: 'Wonderland'
        }
      };

      // Deep copy using JSON methods
      const deepCopy = JSON.parse(JSON.stringify(original));

      // Modify the nested object
      deepCopy.address.city = 'New Wonderland';

      console.log(original.address.city); // Output: 'Wonderland'
      console.log(deepCopy.address.city); // Output: 'New Wonderland'
    ```

### What is null and undefined and what d/f in js?
  - In JavaScript, null and undefined are two distinct types that represent the absence of a value, but they are used in different contexts and have  different meanings.
  - **undefined**
    - **Type:** undefined is a primitive type.
    - **Meaning:** It indicates that a variable has been declared but has not yet been assigned a value.
    - **Default Value:** Variables that are declared but not initialized are automatically assigned the value undefined.
  - **null**
    - **Type:** null is also a primitive type, but it is considered an object type in JavaScript.
    - **Meaning:** It explicitly indicates the absence of any object value. It is often used to signify that a variable should have no value.
    - **Assignment:** null must be explicitly assigned to a variable.
  - **Differences**
    - **Type:**
      - undefined is of type undefined.
      - null is of type object.
    - **Usage:**
      - undefined is used when a variable has been declared but not yet assigned a value.
      - null is used to explicitly indicate that a variable should have no value.
    - **Default Values:**
      - Variables that are declared but not initialized are undefined.
      - null must be explicitly assigned.
    - **Equality:**
      - undefined == null is true because they are considered equal in non-strict comparison.
      - undefined === null is false because they are of different types.

---

### What is immediate invoked function?
  - An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that is executed immediately after it is defined. It is a common pattern used to create a new scope and avoid polluting the global namespace.
  **Use Cases**
    - **Avoiding Global Variables:** IIFEs create a new scope, which helps in avoiding global variable pollution.
    - **Encapsulation:** Encapsulate code to create private variables and functions.
    - **Initialization:** Execute initialization code that only needs to run once.
### == and  ==== d/f ?
### Does hoisting work with all the variables, and Why?
### What is Event Loop?
  - The Event Loop is a fundamental concept in JavaScript that allows for asynchronous programming. 
  - It is responsible for handling and executing multiple pieces of code, such as callbacks, promises, and events, in a non-blocking manner.
  - **How It Works**
    - **Call Stack:** This is where the code gets executed. Functions are pushed onto the stack when called and popped off when they return.
    - **Web APIs:** These are browser-provided APIs (like setTimeout, DOM events, fetch) that handle asynchronous operations.
    - **Callback Queue:** When an asynchronous operation completes, its callback is placed in the callback queue.
    - **Microtask Queue:** This queue holds microtasks such as promise callbacks. Microtasks have higher priority than macrotasks (callbacks from the callback queue).
    - **Event Loop:** The Event Loop continuously checks the call stack to see if it's empty. If it is, it pushes the first callback from the microtask queue (if any) or the callback queue onto the call stack for execution.

### What is the precedence in Event Loop? ( between Promise() and setTimeout() )?
  - In JavaScript, the Event Loop determines the execution order of code, particularly for asynchronous tasks. Understanding the precedence between Promise and setTimeout involves examining Microtasks and Macrotasks.

  - Key Concepts
    - Microtasks:
      - Includes tasks like Promise.then, Promise.catch, Promise.finally, and queueMicrotask.
      - These tasks are executed immediately after the currently executing synchronous code completes, before moving to the next macrotask.
    - Macrotasks:
      - Includes tasks like setTimeout, setInterval, setImmediate (Node.js), and I/O events.
      - These tasks are executed only after all microtasks in the current event loop iteration have been processed.
      - Precedence: Promise vs. setTimeout
      - Promise callbacks (.then, .catch, etc.) are microtasks, so they are executed before setTimeout, which is a macrotask.
      - Even if a setTimeout is queued with a delay of 0 ms, it will always be executed after the current queue of microtasks.
```js
    console.log('Start');

    setTimeout(() => {
      console.log('setTimeout');
    }, 0);

    Promise.resolve().then(() => {
      console.log('Promise');
    });

    console.log('End');

    //output
    Start
    End
    Promise
    setTimeout
  ```
### What is the Diff. b/ "setTimeout()" & "setInterval()"?
### What are the ES6 features you have used?
### Where do you mostly use Rest Operator?
  - The rest operator (...) in JavaScript is used to represent an indefinite number of arguments as an array. It is commonly used in the following scenarios:
    - Function Parameters
    - Array Destructuring
    - Object Destructuring

### D/f b/w local storage and session storage?
  - **Local Storage**
      - **Persistence:** Data stored in localStorage persists even after the browser is closed and reopened.
      - **Scope:** Data is shared across all tabs and windows with the same origin (protocol, host, and port).
      - **Capacity:** Typically has a larger storage limit (around 5-10MB per origin).
      - **Use Case:** Suitable for storing
    - **Session Storage**
        - **Persistence:** Data stored in sessionStorage is only available for the duration of the page session. It is cleared when the page session ends (i.e., when the tab or window is closed).
        - **Scope:** Data is specific to the tab or window where it was created and is not shared across other tabs or windows.
        - **Capacity:** Typically has a smaller storage limit (around 5MB per origin).
        - **Use Case:** Suitable for storing data that only needs to be available for the duration of the page session, such as temporary form data or state information.

### What is lexical scope?
- Lexical scope, also known as static scope, refers to the scope of a variable being determined by its physical location within the source code. In other words, the scope is defined by the structure of the code and the location where variables and functions are declared.

### What is callback hell in JS?
  - **Callback Hell:** A situation where multiple nested callbacks make the code difficult to read and maintain.
  - **Promises:** Provide a more readable way to handle asynchronous operations, avoiding deeply nested callbacks.
  - **Async/Await:** Allows writing asynchronous code that looks synchronous, further improving readability and maintainability.

### What is Promise in js?
  - **Promises:** Represent the eventual completion or failure of an asynchronous operation.
  - **States:** Pending, fulfilled, or rejected.
  - **Chaining:** Use .then() and .catch() to handle results and errors.
  - **Avoiding:** Callback Hell: Promises help avoid deeply nested callbacks.
  - **Async/Await:** Provides a more readable way to work with promises.



- What is inheritance how to implement in js. 
- What is promises?
- Explain event loop taking the example of setTimeout. 
- D/f b/w Object.Freeze and Const?
- Event Delegation