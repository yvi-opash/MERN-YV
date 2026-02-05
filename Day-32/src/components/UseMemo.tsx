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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">UseMemo Demo</h1>
      
      <div className="space-y-4">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 w-full"
        >
          Count is {count}
        </button>
        
        <input 
          type="number" 
          name="number" 
          onChange={numberChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter a number"
        />
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-lg font-semibold text-gray-700 text-center">
          Result: <span className="text-blue-600">{sn}</span>
        </p>
      </div>
    </div>
  )
}
export default UseMemo;
