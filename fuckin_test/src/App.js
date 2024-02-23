import React, { useState } from 'react';
import './App.css';
function App() {
    const [count, setCount] = useState(3)
  
  function incCount() {
      setCount(prevCount => {
        console.log(count)
        console.log(prevCount + " + + ")
        return prevCount + 1
      })
    }
  
   return (
      <>
      <section>
        <div class="first">  
        <div class="fucks">
          <h1>{count}</h1>
          </div>    
          <div class="update">
            <button onClick={incCount}>+</button> 
          </div>
        </div>  
        </section>
       
      </>
    );
  }
  
  export default App;