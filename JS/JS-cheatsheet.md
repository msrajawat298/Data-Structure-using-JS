Here’s a basic JavaScript cheat sheet to include in your `JS-cheatsheet.md` file, which covers essential JavaScript concepts:

---

# JavaScript Cheatsheet

## Table of Contents
1. [Variables](#variables)
2. [Data Types](#data-types)
3. [Operators](#operators)
4. [Functions](#functions)
5. [Control Flow](#control-flow)
6. [Loops](#loops)
7. [Arrays](#arrays)
8. [Objects](#objects)
9. [ES6 Features](#es6-features)
10. [Error Handling](#error-handling)
11. [DOM Manipulation](#dom-manipulation)

---

## 1. Variables

### Declaration:
- **`let`** – block-scoped, re-assignable.
- **`const`** – block-scoped, read-only.
- **`var`** – function-scoped, can be re-assigned.

```js
let age = 25;
const name = "John";
var city = "New York";
```

---

## 2. Data Types

### Primitive Types:
- **String**: `'Hello'`
- **Number**: `123`
- **Boolean**: `true` or `false`
- **Undefined**: `let x;`
- **Null**: `let y = null;`
- **Symbol**: `Symbol('id')`

### Type Checking:
```js
typeof "Hello"; // "string"
typeof 123;     // "number"
typeof true;    // "boolean"
```

---

## 3. Operators

### Arithmetic Operators:
- `+`, `-`, `*`, `/`, `%`

### Comparison Operators:
- `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

### Logical Operators:
- `&&` (AND), `||` (OR), `!` (NOT)

### Assignment Operators:
- `=`, `+=`, `-=`, `*=`, `/=`, `%=`

---

## 4. Functions

### Function Declaration:
```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Arrow Function (ES6):
```js
const add = (a, b) => a + b;
```

### Anonymous Function:
```js
setTimeout(function() {
  console.log("Hello");
}, 1000);
```

---

## 5. Control Flow

### If-Else:
```js
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Switch Statement:
```js
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Other day");
}
```

---

## 6. Loops

### For Loop:
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop:
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### For...of Loop (for Arrays):
```js
const arr = [1, 2, 3];
for (let num of arr) {
  console.log(num);
}
```

---

## 7. Arrays

### Array Declaration:
```js
let fruits = ['apple', 'banana', 'orange'];
```

### Array Methods:
- `.push()`, `.pop()`, `.shift()`, `.unshift()`
- `.map()`, `.filter()`, `.reduce()`
- `.indexOf()`, `.includes()`

```js
fruits.push('mango');    // Adds to end
fruits.pop();            // Removes from end
```

### Spread Operator (ES6):
```js
let newFruits = [...fruits, 'pineapple'];
```

---

## 8. Objects

### Object Declaration:
```js
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

### Accessing Properties:
```js
console.log(person.name);    // Dot notation
console.log(person['age']);  // Bracket notation
```

### Object Methods:
```js
person.greet = function() {
  return `Hello, ${this.name}`;
};
```

---

## 9. ES6 Features

### Destructuring:
```js
let { name, age } = person;
```

### Template Literals:
```js
let message = `Hello, ${name}! You are ${age} years old.`;
```

### Default Parameters:
```js
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
```

---

## 10. Error Handling

### Try-Catch:
```js
try {
  // Code that may throw an error
  let result = riskyOperation();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Cleanup actions");
}
```

---

## 11. DOM Manipulation

### Select Elements:
```js
let element = document.getElementById('myId');
let elements = document.querySelectorAll('.myClass');
```

### Modify Content:
```js
element.textContent = 'New Content';
element.innerHTML = '<b>Bold Text</b>';
```

### Add Event Listener:
```js
element.addEventListener('click', function() {
  alert('Element clicked!');
});
```

---

This cheat sheet offers a quick overview of essential JavaScript concepts and syntax. You can expand upon it as needed by adding more advanced topics like Promises, Async/Await, or working with APIs.

## Reference Link
- [quickref](https://quickref.me/javascript.html)
- [jscheatsheet](https://htmlcheatsheet.com/js/)
- [js_2024](https://www.w3schools.com/js/js_2024.asp)
- [JS Graphics](https://www.w3schools.com/js/js_graphics_google_chart.asp)
- [5 Super Useful JS CheatSheet](https://media.licdn.com/dms/document/media/D4D1FAQG57b3R-1gglg/feedshare-document-pdf-analyzed/0/1725453568532?e=1726704000&v=beta&t=BsDbPzEtA6iGxrgaYvl6arhmDqE-9KUEEgXrkqxokpk)
- [Top 25 JavaScript Interview Questions for Beginners](https://www.youtube.com/watch?v=OEQpRTXfxoo&pp=ygUWanMgaW50ZXJ2aWV3IHF1ZXN0aW9ucw%3D%3D)