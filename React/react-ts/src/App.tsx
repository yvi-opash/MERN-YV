//import { useState } from 'react'

import Fetchuser from './components/Fetchuser'
import Counter from './components/Counter'
import UserList from './components/Fetchapi'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <h1>counter & Textprint</h1>
     <Counter/>
     <h1>FetchAPI With UseEffect</h1>
     <UserList/>
     <h1>Fetch data to .json file using .map and prop</h1>
     <Fetchuser/>
    </>
  )
}

export default App
