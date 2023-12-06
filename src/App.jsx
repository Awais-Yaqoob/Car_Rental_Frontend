import Banner from "./components/Banner";
import BookCar from "./components/BookCar";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import PickCar from "./components/PickCar";
import PlanTrip from "./components/PlanTrip";
import Testimonials from "./components/Testimonials";



function App() {
 
  return (
    <>
    <Navbar/>
      <Hero/>
      <BookCar/>
      <PlanTrip/>
      <PickCar/>
      <Banner/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App;
