import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Userlist from  './Pages/Userlist';
import Products from "./Pages/Products";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Userlist/>}/>
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
