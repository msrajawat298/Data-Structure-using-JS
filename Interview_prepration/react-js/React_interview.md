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
- [React Portal](https://youtu.be/HpHLa-5Wdys?si=aGjMjXP59dGwAFSd)
- [Error Boundary](https://youtu.be/DNYXgtZBRPE?si=y3UF2G0HxX2dErHA)
- [React js VIRTUALIZED LIST](https://youtu.be/Yz4eK-4LKXg?si=HAkANz0Y8ASLamzB)

- Controlled Components are those Components that are controlled by react such using useState.
- UnControlled Components are those Components that are controlled by DOM such using useRef.




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


[8 React Js performance optimization techniques YOU HAVE TO KNOW!](https://youtu.be/CaShN6mCJB0?si=uOUXEbQgR1y-TjeR)
- LIST VIRTUALIZATION OR WINDOWING
- Lazy Loading Image
- Memoization (useMemo, useCallback) 
  - useMemo save the result 
  - useCallback save the complete function, it useful when you are passing as the props in the function.
- THROTTLING AND DEBOUNCING EVENTS
  - THROTTLING: FUNCTION IS REPEATEDLY INVOKED AFTER A GIVEN INTERVAL
  - DEBOUNCE: FUNCTION IS INVOKED AFTER A CERTAIN PERIOD OF INACTIVITY
- Code Splitting/Code refactor
- React Fragment
- Web Workers
- USETRANSITION HOOK
- Can you explain what kind of performance issues, we can generally expect in react applications and what can we do about them ?
- Suppose there are too many layers that you have to show something 10k rows so how would you manage that ? If you are using Pagination but still there will be issue such as lagging due to large data using pagination we have handle the issue but How can we do in frontend side?
- How are you consuming your api's in you project?
- Do you use OOPs concept in your programming?
- In which of the following condition, the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?
- What is the main difference between React.Component and React.PureComponent?
    - React.PureComponent implements a shallow comparison of props and state, reducing the need for manual shouldComponentUpdate checks.

### What is Reconciliation in React?
  - **Reconciliation:** The process by which React updates the DOM to match the virtual DOM.
  - **Virtual DOM:**  A lightweight copy of the actual DOM maintained in memory.
  - **Diffing Algorithm:**  Compares the previous and new virtual DOM trees to identify changes.
  - **Efficient Updates:**  React updates only the parts of the actual DOM that have changed, improving performance.
  - **Optimizations:** Keys, component type checks, and pure components help optimize the reconciliation process.


### What does the < Switch > component do in react-router?
  - <Switch> Component: Ensures that only one route is rendered at a time by rendering the first matching route.
  - Order Matters: The order of routes inside the <Switch> determines which route is rendered first.
  - Fallback Route: A route without a path can be used as a fallback for unmatched routes.
  - React Router v6: The <Switch> component is replaced by the <Routes> component, which provides similar functionality with an updated API.


### What is the entry point of a React Application
  - **Entry Point:** The entry point of a React application is typically the index.js or index.tsx file in the src directory.
  - **Importing Modules:** The entry point file imports React, ReactDOM, the root component, and any global styles.
  - **Rendering the Application:** The ReactDOM.render method is used to render the root component into the DOM element with the ID root.
  - **HTML File:** The public/index.html file contains the root DOM element where the React application is mounted.
### What is HOC? Where you have used / written in your project
  - **Higher-Order Component (HOC):** A function that takes a component and returns a new component with additional props or behavior.
  - **Reusability:** HOCs allow you to reuse logic across multiple components.
  - **Props Manipulation:** HOCs can manipulate props, add new props, or wrap the original component with additional behavior.
  - **Use Cases:** Code reusability, cross-cutting concerns, and enhancing components.
```js
import React from 'react';
import { Redirect } from 'react-router-dom';

// Higher-Order Component for authentication
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const isAuthenticated = // logic to check if the user is authenticated
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
}

// Example usage
function Dashboard(props) {
  return <div>Welcome to the Dashboard</div>;
}

const DashboardWithAuth = withAuth(Dashboard);

// Usage in a parent component
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardWithAuth} />
      </Switch>
    </Router>
  );
}

export default App;
```

### What is React Context API and when to use
  - **Creating Context:** MyContext is created using createContext(). 
  - **MyProvider** is a component that uses the Provider to pass down the context value.
  - **Using Context:** MyComponent uses the useContext hook to access the context value and the function to update it.
  - **Providing Context:** The App component wraps MyComponent with MyProvider to provide the context value.

5. How do you handle API calls on your React App? Axios..
6. How will you chain multiple API calls that is depending on the previous request?
7. How will you optimize a React Application?
8. What is pure component? How will you implement same on Functional Components?
9. Explain controlled and uncontrolled components
10. Redux questions on reducers, actions and state...
    - **Reducers:** Pure functions that specify how the state changes in response to actions.
    - **Actions:** Plain objects that describe events or changes in the application.
    - **State Management:**  The state is stored in a single store, updated by dispatching actions, and processed by reducers.
    - **Combining Reducers:**  Use combineReducers to combine multiple reducers into a single reducer.
    - **Middleware:** Extends the store's abilities, enabling custom functionality during action dispatching.

11. How to avoid mutating an array when performing an operation
12. Explain this keyword with arrow function and normal
13. Event bubbling
14. ES6 features you have used
15. Difference between map, filter and foreach
16. Deep copy vs Shallow copy

• What is arrow function ?
• What is redux ?
• What is currying?
• What is difference between map and filter ?
• What is webpack ?
• What do you prefer functional component or class component ?
• How would you optimise the code ?
• What is lazy loading ?
• What is use Memo hook ?
• What is difference between let const and var ?
•What is hoisting?
• What are life cycle methods ?
• Can we use hook for class component ?
• What is clean up function? In useEffect ?
• Difference between spread and rest ?
• How to add the elements in array ?
• What is push, pop, slice and splice and there syntax ?
• What is generator function?
• What is callback in JavaScript ?
• Explain closure
• Explain call apply and bind
• How to pass data between component ?
• How to pass the data from child to parent and from parent to child ?
• How to uniquely identify the element ? How to remove the duplicate elements in array?
• Did you do unit testing ?
• What tool you used for unit testing ?
• They took snapshot then ended the interview
- What react virtual dom?
- What are the features of React?
- What is significance of keys in react that we use?
- What are the some performance optimizing that you use like to increasing the knowledge the performance of your application?
- What is Synthetic event in react?
- What do you understand reference in react ?
- Can you explain life cycle in react?
- What is React JS?
- Lifecycle methods vs Hooks?
- What is unidirectional data flow in React JS?
- What is React memo?
- What is HOC? Any use case? where you have used?
- What is Mounting?
- How to optimize react application? Any example?
  - Pagination
  - Infinite scroll
  - Lazy load
  - caching
  - Code spiting
  - Virtual list
  - webp images

- How to pass data from child to parent?
- What are different ways to call APIs in React?
- What is React Context API?
- What are new features of React latest version?
### What is Redux & how it works?
  - **Redux:** A state management library for JavaScript applications, providing a predictable state container.
  - **Store:** Holds the entire state of the application.
  - **Actions:** Plain objects that describe what happened.
  - **Reducers:** Pure functions that specify how the state changes in response to actions.
  - **Dispatch:** Method to send actions to the store to change the state.
  - **Selectors:** Functions to extract specific pieces of state from the store.
  ```js
    // actions.js
    export const increment = (amount) => ({
      type: 'INCREMENT',
      payload: amount
    });

    export const decrement = (amount) => ({
      type: 'DECREMENT',
      payload: amount
    });

    // reducer.js
    const initialState = { count: 0 };

    export const counterReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + action.payload };
        case 'DECREMENT':
          return { count: state.count - action.payload };
        default:
          return state;
      }
    };

    // store.js
    import { createStore } from 'redux';
    import { counterReducer } from './reducer';

    const store = createStore(counterReducer);

    // Dispatching actions
    store.dispatch(increment(1));
    store.dispatch(decrement(1));

    console.log(store.getState()); // Output: { count: 0 }
    ```

### What are middlewares? and what happens if they are not there?
  - **Middleware:** Enhances the store's abilities by intercepting actions and enabling custom functionality during dispatch.
  - **Uses:** Commonly used for handling asynchronous operations, logging, error handling, and other side effects.
  - **Without Middleware:**
    - Asynchronous handling becomes more challenging.
    - Side effect management is less structured.
    - Reduced extensibility and maintainability.
    - Simpler but limited dispatching of actions.
### Redux Thunk VS Saga ?
  - Both Redux Thunk and Redux Saga are middleware libraries for handling asynchronous actions in Redux applications. They provide different approaches and capabilities for managing side effects in your application.






### Advantages/ Disadvantages of ReactJS