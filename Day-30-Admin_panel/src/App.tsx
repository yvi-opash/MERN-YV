import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Userlist from  './Pages/Userlist';
import Products from "./Pages/Products";
import Login from "./Pages/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Userlist/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
