//import { useState } from 'react'

import Counter from './Counter'
import UserList from './fetchapi'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <h1>counter & Textprint</h1>
     <Counter/>
     <h1>FetchAPI With UseEffect</h1>
     <UserList/>
    </>
  )
}

export default App
