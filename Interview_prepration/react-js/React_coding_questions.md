# Interview Questions

### 1. React Example - Button Click to Increase Number
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

---
### 2. Asked in Cvent
- 1st round
  - D/f b/w fetch or Axios
- 2nd round questions 
  - Implement the Explorer View using React JS
  - Note : 
    - 1. Example Explorer view is below
    - 2. Design the JSON representing the folder structure
    - 3. Implement the Explorer view in React
    - 4. Do the CSS of folder and files name so visible better.
  ```
  Root
      public
          index.html
      src
          components
              Home.js
          App.js
      package.json
  ```
