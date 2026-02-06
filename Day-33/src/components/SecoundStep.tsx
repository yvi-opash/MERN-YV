import React from 'react'
import { useNavigate } from 'react-router-dom';






const SecoundStep = () => {


    const navigate = useNavigate();

    const handle2Form = (e:React.FormEvent) => {
        e.preventDefault();
        navigate("/third");
    }

  return (
    <>
        <div>
            <h1>Second Step</h1>
            <form onSubmit={handle2Form}>
                <input type="password" name="password" placeholder="Enter your password" />
                <input type="password" name="confirmPassword" placeholder="Confirm your password" />
                <button type="button" onClick={() => navigate("/")}>Back</button>
                <button type='submit'>Next</button>
            </form>
        </div>
    </>
  )
}

export default SecoundStep