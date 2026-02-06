import React from 'react'
import { useNavigate } from 'react-router-dom';

const ThirdStep = () => {


    const navigate = useNavigate();

    const handle3Step = (e:React.FormEvent) => {
        e.preventDefault();
        

        navigate("/fourth");
    }
  return (
    
    <>
        <div>
            <h1>third Step</h1>
            
            
            
            <form onSubmit={handle3Step}>
            
                <input type="text" name="city"  placeholder="Enter your city" />
                <input type="text" name="country" placeholder="Enter your country" />
                <button type="button" onClick={() => navigate("/secound")}>Back</button>
                <button type="submit">Submit</button>
            
            </form>
        </div>
    </>
  )
}

export default ThirdStep