 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Layout from './component/Layout' // Optional layout component
import Farms from './pages/Farms'
import About from './pages/About'
import Teams from './pages/Team'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Women from './pages/Women'
import Kids from './pages/Kids'
import BoxEgg from './pages/Boxegg'
 
import ScrollToTop from './component/ScrollToTop'
 
import SmallEggBox from './pages/SmallBoxEgg'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
 

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Products Route */}
        <Route path="/products" element={<Product />} />

        <Route path='/our-farms' element={<Farms/>} />

      <Route path='/about' element={<About/>} />

      <Route path='/team' element={<Teams/>} />

      <Route path='/contact' element={<Contact/>} />

      <Route path='/faq' element={<Faq/>} />

      <Route path='/women' element={<Women/>} />

      <Route path='/kids' element={<Kids/>} />

       <Route path='/Eggs' element={<BoxEgg/>} />

        <Route path='/Egg' element={<SmallEggBox/>} />

      <Route path = '/privacy' element={<Privacy/>} />

        <Route path = '/terms-conditon' element={<Terms/>} />
      

        
        {/* Optional: Product Detail Route */}
        <Route path="/products/:id" element={<Product />} />
        
        {/* Optional: 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App