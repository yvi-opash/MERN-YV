import React from 'react'
import { useNavigate } from 'react-router-dom';


const FirstStep = () => {



    const navigate = useNavigate();

    const handle1Next =(e:React.FormEvent) => {
    e.preventDefault();

    
    navigate("/secound");

   } 
  return (
    <>
        <div>
            <h1>First Step</h1>
            <form onSubmit={handle1Next}>
                <input type="text" name="name" placeholder="Enter your name" />
                <input type="email" name="email" placeholder="Enter your email" />
                <input type='number' name="age" placeholder="Enter your age" />
                <input type="number" name="mobile-number" placeholder="Enter your mobile number" />
                <button type="submit">Next</button>
            </form>
        </div>
    </>
  )
}

export default FirstStep