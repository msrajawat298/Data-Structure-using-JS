How many type of scopes in js?
In JavaScript, file scope refers to the scope of variables and functions within a single file. This concept is particularly relevant in the context of modules, where each file can be treated as a separate module with its own scope.

Key Points about File Scope
Global Variables in Non-Module Files: In non-module files (i.e., files not using ES6 modules), variables declared with var at the top level are added to the global scope.
Module Scope: In ES6 modules (files using import and export), top-level variables and functions are scoped to the module itself and are not added to the global scope.
IIFE (Immediately Invoked Function Expression): Another way to create file scope is by wrapping the entire file content in an IIFE, which creates a new function scope.


Global Scope in Non-Module Files: Variables declared with var at the top level are global.
Module Scope: In ES6 modules, top-level variables and functions are scoped to the module.
IIFE: Wrapping code in an IIFE creates a new function scope, effectively creating file scope.

How to define one variable in one file and use in other file of js without export or import keywords?
Ans: 
// file.js
(function() {
  var fileScopedVar = "I am scoped to this file";
  console.log(fileScopedVar); // Accessible within the IIFE
})();

console.log(fileScopedVar); // Uncaught ReferenceError: fileScopedVar is not defined

What will be the output ?
console.log(a);
a=5;

What will be the output ?
console.log(a);
var a=5;


What is the difference between  regular and arrow function ?
Can we create object of arrow function ?

What will be the output and why?
var a = {'x':()=>console.log(this)};

a.x
a.x()

What will be the output ?
var a = {'x' :function test() {console.log(this)p};
a.x();

What is closures in javascript?
What are polyfills?
What is the d/f b/w closure  and inner function?



console.log(1);
setTimeout(()=>console.log(2));
console.log(3);

using promises
function test2() {
    return new Promise ((resolve) => setTimeout(()=>{
            console.log(2);
            resolve();
        })
    );
}


console.log(1);
test2().then(()=>console.log(3));



using async and await 

function test2() {
    return new Promise((resolve) => setTimeout(() => {
            console.log(2);
            resolve();
        }) // added timeout duration for delay
    );
}

async function runTest() {
    console.log(1);
    await test2();  // wait for test2 to complete
    console.log(3);  // execute after test2 completes
}

runTest();
x



Batch Processing Large Arrays using Generators
What are some common use cases for JavaScript generators?






Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

function flattenArray(arr) {
    let result = [];
    
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // Recursively flatten the nested array
            result = result.concat(flattenArray(item));
        } else {
            // If it's not an array, add the item to the result
            result.push(item);
        }
    });
    
    return result;
}

let arr = [1, 2, 3, [4, 5], [6, 7, [8, 19]], 101, [11], 12];
let flattenedArray = flattenArray(arr);

console.log(flattenedArray);


Is anagram?

- Can you give me end to end arcticture or HLD or current project or amzone e-commerce  ?
- What is serverless?
- create a React component that have button on click it will increase the number
- what is lazy loading?
- how to optimize the react application?
- What is Specificity in css?
- what is accessability?

console.log1;
setTimeout(0 => console.log(2), 0);
console.10g(3) *


Q-
x.y.z
^X.y.z
~X.y.z

x.y.z: A specific version.
^x.y.z: Allows updates to minor and patch versions, but not major versions.
~x.y.z: Allows updates to patch versions, but not minor or major versions.

what is d/f between settimeout vs promises in term of event loop?
what is SDLC and what is stages of SDLC and how do you followed in your projects?
How to do you maintain the application security?
How to write unit test case in  react?
What is middleware and how to write it in nodejs?


Summary
call(): Calls a function with a specified this value and arguments provided individually.
apply(): Calls a function with a specified this value and arguments provided as an array.
bind(): Creates a new function with a specified this value and optional arguments. (it is not removing existing value it is adding some new values. 
Such as you have create an array but the all the array related function automatically attached to the arr as an prototype).
another example here is there is object1 and object2 we want to pass some value or want to inheritance obj1 value in the obj2 we can use bind

// JavaScript

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
greet(); // Output: Hello, my name is Charlie

// JavaScript

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5)); // Output: 10