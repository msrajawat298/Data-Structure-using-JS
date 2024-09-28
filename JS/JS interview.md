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