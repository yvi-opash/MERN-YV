import { useMemo, useState } from 'react'



function UseMemo() {
  const [count, setCount] = useState(0)
  const [number,setNumber] = useState(0)

  function square(number: number) {
    return Math.pow(number,9);
  };


  const numberChange = (e:any) =>{
    setNumber(e.target.value);
  }



  const sn = useMemo(() => square(number), [number])

  return (
    <>
      <div>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <input type="number" name="number" onChange={numberChange} />

      </div>
      <p className="read-the-docs">
        {sn}
      </p>
    </>
  )
}

export default UseMemo;
