// import React ,{useState} from 'react'
// import "./Home.css"
// const Home = () => {
//  const[count, setCount]=useState(0)
//   return (
//     <div className='parent'>
     
//     <div className='body'>

//     <h1 className='hometxt'>Welcome !!!! this is Home Page</h1>

//     <p>count:{count}</p>
//     <button onClick={()=>setCount(count+1)}>Plus</button>
//     </div>
//     </div>
//   )
// }

// export default Home


// import React, { useState, useMemo } from 'react';

// function Home() {
//   const [a, setA] = useState(5);
//   const [b, setB] = useState(10);

//   // Without useMemo, this result would be recomputed on every render
//   const result = useMemo(() => {
//     console.log('Computing result...');
//     return a + b;
//   }, [a, b]);

//   return (
//     <div>
//       <p>Result: {result}</p>
//       <button onClick={() => setA(a + 1)}>Increment A</button>
//       <button onClick={() => setB(b + 1)}>Increment B</button>
//     </div>
//   );
// }
// export default Home

// import React, { useState } from 'react';

// const RefreshButton = () => {
//   const [refreshCount, setRefreshCount] = useState(0);

//   const handleClick = () => {
//     setRefreshCount((prevCount) => prevCount + 1);
//     window.location.reload();
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Refresh Page</button>
//       <p>Previous Value: {refreshCount - 1}</p>
//       <p>New Value: {refreshCount}</p>
//     </div>
//   );
// };

// export default RefreshButton;


import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
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

