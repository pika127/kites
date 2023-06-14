import NavBar from '../components/Navbar';
import Hero from '../components/Hero'
import AboutImg from '../assets/12.jpg'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
function Contact (){
  return(
    <>
    <NavBar/>
    <Hero
    cName="hero-Contact"
    heroImg={AboutImg}
    title="Contact"
    
    />
    <ContactForm/>
    <Footer/>
    </>
  )
  }
  export default Contact;