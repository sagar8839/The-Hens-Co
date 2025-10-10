import Dish from "../component/dish";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Locator from "../component/Locator";
import OurProductImage from "../component/OurProductImage";
import ProductSection from "../component/ProductSection";
import Promotion from "../component/Promotion";
import Testimonial from "../component/Testimonial";
import TestimonialsContainer from "../component/TestimonialsContainer";

function Product () {
 return(
    <>
    <Header/>
  <OurProductImage/>
  <ProductSection/>
  <TestimonialsContainer/>
  <Locator/>
  <Promotion/>
  <Dish/>
  <Footer/>
    </>
 )
}

export default Product