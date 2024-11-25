# DSA Notes

## Terminologies
- **Out of Bound**: Refers to accessing elements outside the valid index range of a data structure, such as arrays or lists, leading to undefined behavior or errors.
- **Stack Overflow**: Occurs when a program's call stack exceeds its allocated size, typically due to deep or infinite recursion.

---

## Tips and Tricks

### String and Number Conversions
1. **Convert String to Number**: Subtract with `0`.  
    - Example:  
        ```javascript
        const result = "7" - "0"; // Output: 7
        ```
2. **Convert Number to String**: Add an empty string (`+ ''`).  
    - Example:  
        ```javascript
        const result = 7 + ''; // Output: '7'
        ```

### XOR Operations
- **Finding Differing Characters**:
    - XOR (`^`) of the same characters results in zero because XOR of two identical bits is always `0`.  
        - Example:  
            ```javascript
            a ^ a = 0
            ```
    - To find differing character(s) between two strings, XOR the character codes of all characters using `charCodeAt`. Characters common to both strings will cancel out, leaving the differing character(s).  
        - Example:  
            ```javascript
            // 'abcd' ^ 'abcde' results in 'e'
            const result = findDifference('abcd', 'abcde'); // Output: 'e'
            ```
            ```javascript
            function findDifference(str1, str2) {
                let diff = 0;
                for (const char of str1) diff ^= char.charCodeAt(0);
                for (const char of str2) diff ^= char.charCodeAt(0);
                return String.fromCharCode(diff);
            }
            ```

### Ensuring Maximum and Minimum Values
1. **Finding the Largest Value**:  
    - Use `const largest = Number.MIN_VALUE` to initialize a variable to the smallest positive value in JavaScript (`5e-324`).  
    - This ensures that any larger value encountered will replace it, resulting in the maximum value.  
        - Example:
            ```javascript
            let largest = Number.MIN_VALUE;
            for (const num of [10, 25, 5, 50]) {
                if (num > largest) {
                    largest = num;
                }
            }
            console.log(largest); // Output: 50
            ```
2. **Finding the Smallest Value**:  
    - Use `const smallest = Number.MAX_VALUE` to initialize a variable to the largest possible numeric value in JavaScript (`1.7976931348623157e+308`).  
    - This ensures that any smaller value encountered will replace it, resulting in the minimum value.  
        - Example:
            ```javascript
            let smallest = Number.MAX_VALUE;
            for (const num of [10, 25, 5, 50]) {
                if (num < smallest) {
                    smallest = num;
                }
            }
            console.log(smallest); // Output: 5
            ```

---

### Summary:
- `Number.MIN_VALUE`: Smallest positive value, useful as a starting point to find the maximum.
- `Number.MAX_VALUE`: Largest numeric value, useful as a starting point to find the minimum.
