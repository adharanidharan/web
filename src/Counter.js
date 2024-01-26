import React from 'react'
import { useState } from 'react'
import './Counter.css'
export default function Counter() {
  

    const [count,setCount]=useState(0);
    
    function incrementCount() {
    setCount(count + 1);
  }
    const decrementCount=()=>{
      setCount(count-1);
    };
    const resetCount=()=>{
      setCount(0);
    };
  
  return (
    <div className='cou'>
       <h1>Counter: {count}</h1>
       <button onClick={incrementCount}>Increment</button> 
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
           </div>
  )
}

