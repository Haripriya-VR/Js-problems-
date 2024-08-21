import React, { useState } from 'react'
import UseEffecthook from './UseEffecthook'

function UseState() {
    const [counter ,setCounter]= useState(0)
const [inputValue,setinputValue] = useState('hello')
const handleChange =()=>{
  setCounter(counter+1)
}
const handleDecrement=()=>{
  setCounter(counter -1)
}

const handleInput =(e)=>{
  const newValue = e.target.value
  setinputValue(newValue)
}
  return (
    <>
    <p>{counter}</p>
     <button onClick={handleChange}>increment</button>
     <button onClick={handleDecrement}>decrement</button>

     <input onChange={handleInput} type="text" />
     <p>{inputValue}</p>
    
    </>
  )
}

export default UseState
