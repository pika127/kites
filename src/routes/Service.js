import NavBar from '../components/Navbar';
import Hero from '../components/Hero'
import AboutImg from '../assets/Hero2.jpg'
import Footer from '../components/Footer';
import Trip from '../components/Trip';
function Service (){
  return(
    <>
    <NavBar/>
    <Hero
    cName="hero-Service"
    heroImg={AboutImg}
    title="Service"
    
    />
    <Trip/>
    <Footer/>
    </>
  )
  }
  export default Service;