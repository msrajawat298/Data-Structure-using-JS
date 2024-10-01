## Reference Link to learn and Prepare for interviews
- [Prop Drilling in React JS ](https://youtu.be/CeY1sd80Hxo?si=G6E6mYmOZfK5RLZc)
- [Context API](https://youtu.be/Qe9uObzq76M?si=s_FBVD8kDk_Y7G9C)
- [useContext in React](https://youtu.be/iFssz5lpncw?si=OQhtx8lb4g5OMVlO)
- [useMemo in React](https://youtu.be/P_YwL0B8k7k?si=lSmIIwaBenUP5HmM)
- [useCallback Hook](https://youtu.be/5zempLONkxM?si=n_J2V73ehtNuyNbU)
- [Controlled and UnControlled Components](https://youtu.be/uXwFVf1A9ak?si=8tL045QMsPKZceKW)
- [Lifting State Up OR Pass Data From Child to Parent ](https://youtu.be/NMerkZt7iVw?si=_WgtI6cdcw_zJlqW)
- [useEffect - 1](https://youtu.be/tGXbiU2jcs4?si=r0nR0DAHGPqYuyJ8)
- [useEffect - 2](https://youtu.be/53H_fYlikHc?si=md3b7cXuiAS0use3)
- [useRef](https://www.youtube.com/watch?v=nX9ShZo0COc) // We can manipulate the dom using useRef
- [Custom Hooks](https://youtu.be/Vs43P8zcRr4?si=WccVdX891-CrCpVs)
- [Lazy Loading](https://youtu.be/-L2e1dR1UIE?si=5IQgKKuPV7b9JkLG)
- [Core Concepts of Redux](https://www.youtube.com/playlist?list=PLp18NAIKHWnuq1ODXRD-3ivVJ3R89A5UL)


## Interview Questions

## 1. React Example - Button Click to Increase Number
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


### 2. **Pure Component vs Component (Class and Function in React)**

- **Pure Component**:
  - In class-based components, `PureComponent` is a base class that performs a shallow comparison between props and state to avoid unnecessary re-rendering.
  - In function-based components, a component can be made "pure" using `React.memo()`, which prevents re-rendering if props don’t change.
  
- **Component**:
  - A standard class or function component in React that re-renders on every state or props update without doing a shallow comparison.

**Key Differences**:
- **Performance**: Pure components prevent unnecessary renders by comparing props/state, which may improve performance in certain cases.
- **Implementation**: `PureComponent` automatically handles shallow comparisons, while `Component` or functional components will re-render unless optimizations like `React.memo()` are applied.

### 3. **React Life Cycle Methods**

For class components:
- **Mounting**: 
  - `constructor()`: Initializes the component.
  - `componentDidMount()`: Called once after the component is rendered.
  
- **Updating**:
  - `shouldComponentUpdate()`: Determines if a re-render is needed.
  - `componentDidUpdate()`: Called after updates are applied.

- **Unmounting**:
  - `componentWillUnmount()`: Clean-up code (e.g., removing event listeners).

For functional components (with hooks):
- **useEffect()**: Mimics the lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) in a single function, depending on the dependency array.

### 4. **What is the Virtual DOM?**
The **Virtual DOM** is an in-memory representation of the actual DOM elements. React uses it to optimize updates to the actual DOM by:
1. Creating a virtual copy of the UI.
2. Comparing it with the previous version to identify changes (diffing).
3. Only updating the parts of the real DOM that need to be changed.

This improves performance since manipulating the real DOM is much slower compared to working with the virtual DOM.

### 5. **Difference Between Context API and Redux**

| Feature             | **Context API**                                | **Redux**                                 |
|---------------------|------------------------------------------------|-------------------------------------------|
| **Purpose**         | Used for passing data globally in a simpler way without "prop drilling." | A state management library designed for complex and large-scale applications. |
| **Size**            | Built into React, smaller in terms of code and boilerplate. | Requires additional dependencies and has more boilerplate (actions, reducers). |
| **Complexity**      | Simple, good for small to medium-sized apps.   | More complex, suited for larger applications where state management is critical. |
| **Performance**     | Re-renders every consumer when context updates (requires optimization). | Optimized with middleware and selector mechanisms to avoid unnecessary re-renders. |
| **State Shape**     | Global state managed by React’s built-in features. | Global state managed externally, often more structured and scalable. |
| **Middleware Support** | Lacks middleware support like Redux Thunk/Saga for handling side effects. | Has powerful middleware like Thunk or Saga for async actions. |

### 6. **useCallback vs useMemo**

- **`useCallback`**: Returns a **memoized version of a function**. It's used to prevent re-creating a function on every render.
  ```js
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

- **`useMemo`**: Returns a **memoized value**. It's used to prevent re-computing a value on every render.
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

**Key Difference**:  
- `useCallback` is for **memoizing functions**, and `useMemo` is for **memoizing values**.

### 7. **What are Custom Hooks?**
Custom hooks are **reusable functions** that encapsulate logic using React hooks. They allow for sharing logic between components without repeating code. Custom hooks follow the naming convention of starting with "use", like `useFetch`, `useLocalStorage`.

Example:
```js
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(response => response.json()).then(setData);
  }, [url]);
  return data;
}
```

### 8. **What is React Portal?**
React portals allow you to render components outside the main DOM hierarchy (e.g., outside the root div). This is useful for modals, tooltips, and overlays where you want to escape the regular parent-child DOM flow.

Example:
```js
ReactDOM.createPortal(
  <div>Modal Content</div>,
  document.getElementById('modal-root')
);
```

### 9. **What is `useReducer`?**
`useReducer` is a hook used for managing more complex state logic. It’s similar to `useState`, but instead of directly setting the state, you define a reducer function that describes how the state should change in response to actions.

Example:
```js
const initialState = { count: 0 };

export const reducer = (state, action) =>  {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

import React, { useReducer } from 'react';

const Counter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;

```

### 10. **How to Track if Our React App is Optimized (e.g., using `useMemo` or `useCallback`)**
- **React DevTools**: You can use the React DevTools extension to inspect the component re-rendering. It highlights components that are rendering, making it easier to see unnecessary renders.
- **Profiler**: React has a **Profiler API** that helps measure the performance of your app by tracking re-renders and time spent rendering.
- **use why-did-you-render**: A library that highlights unnecessary renders in React components.
- **Memory Leaks**: Using tools like Chrome DevTools, you can inspect memory usage and ensure that components are properly cleaned up when unmounted.

### 8. **What is a Cache Header?**
Cache headers are HTTP headers used to specify how long the browser or intermediary (like CDN) should cache a resource, reducing the need for repeated network requests. Common cache headers include:
- **`Cache-Control`**: Specifies caching policies (e.g., `public`, `private`, `max-age`).
- **`Expires`**: Sets an expiration date for when a resource should no longer be considered fresh.
- **`ETag`**: Used for versioning resources, ensuring the client always has the most recent version.
