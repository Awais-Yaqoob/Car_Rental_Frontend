import Home from "./pages/Home";
import Contact from './pages/Contact'
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";



function App() {
 
  return (
    <>
    <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
