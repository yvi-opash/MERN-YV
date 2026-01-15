//import React from 'react'
import { useState } from 'react'

function counter () {
  
  const [count, setcount] = useState(0); 
  const [text, settext] = useState("");
  
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => {setcount(count + 1)}}>+</button>
      <button onClick={() => {setcount(count -1)}}>-</button> 
      <button onClick={() => {setcount(0)}}>0</button>

      <input type="text" onChange={(e) => {settext(e.target.value)}} />
      <p>{text}</p>
    </>
  )
}

export default counter;