import './App.css'
import Navigations from './Components/Navigations';
import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Hero from './Components/Hero';

function App() {
 

  return (
    <div className='min-h-screen  text-green-500 bg-orange-800'>
     <Navigations/>   
     <Contact/>
     {/* <Footer/> */}
     <About/>
     <Services/>
    <Hero/>
    </div>
      
   
  )
}

export default App
