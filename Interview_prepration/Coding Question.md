### Find the duplicates in the array
```
Input : var arr = [1,2,3,4,5,6,2,1];
Output : [1,2]
```
### Find the anagram?
### Count the number of triangle in the output
    arr = [1,3,4,6,5,2,4,9,6,4]
    Output  => 2
### Remove the duplicates?
    Example input  =   [1,1,2,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6]
    Example output = [1,2,3,4,5,6,0,0,0,0,0,0,0,0,0,0,0,0]

### Print prime numbers 
### Design a Digital Clock in HH: MM: SS format in react.
    - Live clock, that means seconds, minutes and hours are updating as the clock.
    - The text in the clock text gets printed in the center of the screen, horizontally and vertically.
    - Whole Background needs to in Black color, and Text needs to be in Green color.

### Create a two component one parent and one child. In child component Create input text box where user can enter the color name pass this color to parent component and change the background color of the body
### Read 3 json files, events.json, users.json, event-user.json
 - event { id, name, country, city, date } (given)
 - user {id, name, country, city} (given)
 - event-user (not given you you have to predict your schema what it should be? )
 - For a given date range - identify the users coming from different cities than event is hosted in.
 - Do using any programming and consider file is already import data in the 3 variables.
    - such as eventsData, usersData, eventUsers.
    - or for Sql you can consider there are three tables users, event, event_user

 - ***ANSWER*** 
    - Using Sql
    ```sql
    SELECT 
        e.id AS event_id,
        e.name AS event_name,
        e.city AS event_city,
        u.id AS user_id,
        u.name AS user_name,
        u.city AS user_city
    FROM 
        events e
    JOIN 
        event_user eu ON e.id = eu.event_id
    JOIN 
        users u ON eu.event_userId = u.id
    WHERE 
        e.date BETWEEN '2024-10-01' AND '2024-10-31' -- specify the date range here
        AND e.city != u.city;
    ```

- If you had to start a fresh project on your own, how would you approach it? Basically, what things would you choose in your React application? How would you structure it?
- How do you debug the bug in react js?


### What would be the output of the following code?
```js
var languages = ['Java', 'php', 'TypeScript'];
languages.length = 0;
languages.push('Golang'); 
console.log(languages);
```

What would be the output of the following code?
```ts
class TuringQueue<T>{
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T = this.data.shift();
}
const turingQueue = new TuringQueue<number>();
turingQueue.push(0) ; turingQueue.push("1"); console.log(turingQueue);
```

### Why false? 0.1+0.2===0.3
### Simple way to remove duplicate values from array.
### Palindrome
```js
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Examples
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```
### two array Equal array check
```js
function arraysEqual(arr1, arr2) {
  // Check if arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check if all corresponding elements are equal
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
```

### Reverse string
```js
function reverseString(str) {
  let reversedStr = '';
  
  // Loop through the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  return reversedStr;
}
```
### Sum digits until single-digit
```js
function sumDigitsUntilSingleDigit(num) {
  while (num >= 10) {
    num = sumDigits(num);
  }
  return num;
}

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Examples
console.log(sumDigitsUntilSingleDigit(1234)); // Output: 1 (1+2+3+4 = 10 -> 1+0 = 1)
console.log(sumDigitsUntilSingleDigit(9876)); // Output: 3 (9+8+7+6 = 30 -> 3+0 = 3)
console.log(sumDigitsUntilSingleDigit(5));    // Output: 5 (already a single digit)
```
### Dynamic table data iteration action button
### HTML storage
### Geo Location In html
### Authentication Vs Authorization
```js
function* getMultipleValues() {
  yield 10;
  yield 20;
}
const result = getMultipleValues();
console.log(result.next()->value);
console. log(result.next().value);
console. log(result.next());
```

### How to fix this function to print in sequence  without let?
```js
function x(i){
    for(var i = 1; i<=10; i++){
        (function(j){
            setTimeout(()=> console.log(j), j*1000);
        })(i);
        
    }
}
x();
```

```js
function x(i){
    for(var i = 1; i<=10; i++){
        (function(j){
            setTimeout(()=> console.log(j), j*1000);
        })(i);
        
    }
}
x();
```

