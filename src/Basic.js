import React from 'react'
import { useState } from 'react'
export default function Basic() {
    const[inputValue , setInputValue]=useState("");
    const[displayMessage,setDisplayMessage]=useState('');
    const handleChange =(event)=>{
        setInputValue(event.target.value);
    };
    const handleSubmit=(event)=>{
    event.preventDefault();
    setDisplayMessage(`You Submitted: ${inputValue}`);
    }
    return (
    <div>
            <p>{displayMessage}</p>
            <form onSubmit={handleSubmit}>
            <label>Type:</label>
            <input type='text' value={inputValue} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}
