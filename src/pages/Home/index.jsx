import Hero from "../../components/Hero";
import BookCar from "../../components/BookCar";
import PlanTrip from "../../components/PlanTrip";
import PickCar from "../../components/PickCar";
import Banner from "../../components/Banner";
import Testimonials from "../../components/Testimonials";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";


const Home = () =>{

    return(
        <>
          <Hero/>
          <BookCar/>
          <PlanTrip/>
          <PickCar/>
          <Banner/>
          <Testimonials/>
          <Faq/>
          <Footer/>
        </>
    );
    }
export default Home;