import NavBar from '../components/Navbar';
import Hero from '../components/Hero'
import AboutImg from '../assets/About.jpg'
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
function About (){
  return(
    <>
    <NavBar/>
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
  
    />
    <AboutUs/>
    <Footer/>
    </>
  )
  }
  export default About;