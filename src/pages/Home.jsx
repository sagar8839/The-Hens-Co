import Hero from '../component/Hero'
import Banners from '../component/Banner'
import HomeSections from '../component/Home-section'
import TestimonialsContainer from '../component/TestimonialsContainer'
import Wrap from '../component/Wrap'
import Promotion from '../component/Promotion'
import Dish from '../component/dish'
import Locator from '../component/Locator'
import Happy from '../component/Happy'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Download from '../component/Download'
 


function Home()  {
    return(
        <>
         <Header/>
       <Hero/>
       <Banners/>
       <HomeSections/>
       <TestimonialsContainer/>
       <Wrap/>
       <Promotion/>
       <Dish/>
       <Locator/>
       <Download/>
      <Happy/>
     <Footer/>
        </>
    )
}

export default Home;