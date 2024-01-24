import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>   
  )
}

export default App
