import Home from "./pages/Home";
import Contact from './pages/Contact'
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUp";
import SignIn from "./components/SignIn";



function App() {
 
  return (
    <>
    <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignIn />} />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App;
