import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstStep from "./components/FirstStep";
import SecoundStep from "./components/SecoundStep";
import ThiredStep from "./components/ThirdStep";
import ForthStep from "./components/ForthStep";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstStep />} />
          <Route path="/secound" element={<SecoundStep />} />
          <Route path="/third" element={<ThiredStep />} />
          <Route path="/fourth" element={<ForthStep />} />
        </Routes>
      </BrowserRouter>

      {/* <FirstStep /> */}
      {/* <SecoundStep  />
      <ThiredStep />   */}
    </>
  )
}

export default App;
