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


### (Question Asked: Cigna Health Care) Kung Fu Panda's Obstacle Challenge
#### Problem Statement
- Mr. Tony Lee is a Martial Arts trainer, training Kung Fu Panda for the finals in their kingdom. To prepare for the wicked tiger, Mr. Tony has placed `n` obstacles in a row. These obstacles can be:

- **Thorns (`*`)**: Represents obstacles.
- **Jumpers (`>`)**: Allows Panda to avoid obstacles to the right.
- **Jumpers (`<`)**: Allows Panda to avoid obstacles to the left.

#### Rules:
1. If jumpers `<` and `>` are placed consecutively (i.e., `<>`), the Panda will compulsorily fall and be **punished**.
2. Your task is to calculate the total number of times the Panda will be punished based on the arrangement of obstacles.

---

## Input Format
1. The first line contains an integer `n` denoting the total number of objects in the row.
2. The second line contains `n` space-separated characters representing the row of obstacles. These can only be `*`, `<`, or `>`.

### Constraints
- `1 ≤ n ≤ 1000`
- Valid inputs are limited to `*`, `<`, and `>` only.

---

## Output Format
Output a single integer denoting the number of times the Panda will be punished due to `< >` patterns.

---


### Explanation
In the row `* < > * < > *`:
- The `< >` pattern occurs twice.
- Thus, the Panda will be punished `2` times.

---

## Edge Cases
1. **No `< >` pairs**:
   - Input: `5 i.e; * > * > *`
   - Output: `0`

2. **All `< >` pairs**:
   - Input: `6 i.e; < > < > < >`
   - Output: `3`

3. **Minimum Input Size**:
   - Input: `1 i.e; *`
   - Output: `0`

---

## Solution

### Approach
1. Traverse the input string.
2. Check for consecutive characters `< >`.
3. Count the number of such occurrences.

---

### Sample Code (JavaScript)
```javascript
// Read input from STDIN
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]); // Total number of objects
const obstacles = input[1].split(" "); // Obstacles and jumpers

let punishmentCount = 0;

// Iterate through the obstacles to find "< >" patterns
for (let i = 0; i < n - 1; i++) {
    if (obstacles[i] === "<" && obstacles[i + 1] === ">") {
        punishmentCount++;
    }
}

// Output the number of times the panda will be punished
console.log(punishmentCount);
```

---

### Flood Relief Donation Camp
#### Problem Statement
- A flood relief donation camp has been organized in a society with `M` houses. Each house has contributed some funds according to their wish. 

- Now, the residents want to know the total amount collected, excluding their own donation, for each house.

- #### Objective:
  - Write a program that:
    1. Takes the contributions made by `M` houses as input.
    2. Outputs the total fund collected by all others for each house.

---

- #### Input Format
  1. The first line contains an integer `M` denoting the number of houses in the society.
  2. The second line contains `M` space-separated integers denoting the contributions made by the `M` houses.

- #### Constraints
  - `M > 0`
  - Each contribution amount is a positive integer.

---

## Output Format
Output a single line containing `M` space-separated integers. Each integer at index `i` represents the total funds collected, excluding the contribution from the `i-th` house.



### Explanation
For each house, the total contribution by all other houses is calculated:
- For the 1st house (3): `6 + 4 + 8 + 9 + 2 + 7 = 30`
- For the 2nd house (6): `3 + 4 + 8 + 9 + 2 + 7 = 34`
- For the 3rd house (4): `3 + 6 + 8 + 9 + 2 + 7 = 31`
- And so on...

---

## Edge Cases
1. **Single house**:
   - Input: `1 i.e; 5`
   - Output: `0`

2. **All contributions are the same**:
   - Input: `3 i.e; 5 5 5`
   - Output: `10 10 10`

3. **Minimum contributions**:
   - Input: `2 i.e; 1 2`
   - Output: `2 1`

---

## Solution

### Approach
1. Calculate the total sum of all contributions.
2. For each house, subtract its contribution from the total sum to compute the required result.

---

### Sample Code (JavaScript)
```javascript
// Read input from STDIN
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const M = parseInt(input[0]); // Number of houses
const contributions = input[1].split(" ").map(Number); // Contributions array

const totalSum = contributions.reduce((acc, curr) => acc + curr, 0); // Calculate total sum
const result = contributions.map(contribution => totalSum - contribution); // Exclude each contribution

console.log(result.join(" ")); // Output result as space-separated values
```

---

### Write a program to find the missing number in array (asked by Codeforge)
```const arr = [1,11,16,3,5,7,8];```

----