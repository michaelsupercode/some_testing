import React, { useState } from 'react';
import "../src/style/App.css"


function App() { 
  const [count, setCount] = useState(0) 
  function decrementCount() {  
    setCount(prevCount => {
      console.log(prevCount + "-1")
      return prevCount - 1
    })
  } 
  function incCount() {
    setCount(prevCount => {
      console.log(count)
      console.log(prevCount + " + 1 ")
      return prevCount + 1
    })
  }
  return (
    <div>
      <h2>..counting?..</h2>
      <button onClick={incCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;

