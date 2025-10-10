import FarmsHero from "../component/Farms-hero";
import FarmSection from "../component/FarmSection";
import FarmsMap from "../component/FarmsMap";
import Footer from "../component/Footer";
import Happy from "../component/Happy";
import Header from "../component/Header";
import Locator from "../component/Locator";

const Farms = () =>{
  return( 
    <>
    <Header/>
   <FarmsHero/>
   <FarmSection/>
   <FarmsMap/>
   <Locator/>
   <Happy/>
   <Footer/>
   </>
  )

}

export default Farms;