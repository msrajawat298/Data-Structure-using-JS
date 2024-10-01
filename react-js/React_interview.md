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
What is virtual Dom?
D/f b/w context api and redux?
useCallback vs useMemo?

How to use profiler?
How to track is our react app optimze application such as we have used useMemo or usecallback.

what is cache header?
How to use profiler in react js?
What is react portal?
what is useReducer


The useReducer hook in React is a powerful alternative to useState for managing complex state logic in functional components. It is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous state. It is similar to how you would use reducers in Redux.

Key Points
Reducer Function: A function that takes the current state and an action, and returns the new state.
Initial State: The initial state value.
Dispatch Function: A function to dispatch actions to the reducer.
Syntax
const [state, dispatch] = useReducer(reducer, initialState);

Example Code
Here's a simple example of using useReducer to manage a counter:

Reducer Function
// JavaScript

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

Component Using useReducer
// JavaScript

import React, { useReducer } from 'react';

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;



Explanation
Reducer Function: counterReducer takes the current state and an action, and returns the new state based on the action type.
Initial State: initialState is an object with a count property set to 0.
useReducer Hook: useReducer is called with the counterReducer and initialState. It returns the current state and a dispatch function.
Dispatching Actions: The dispatch function is used to send actions to the reducer. In this example, clicking the buttons dispatches increment and decrement actions.
Summary
useReducer: A hook for managing complex state logic in functional components.
Reducer Function: Defines how the state should change in response to actions.
Initial State: The starting state value.
Dispatch Function: Used to send actions to the reducer.


what is custom hooks?