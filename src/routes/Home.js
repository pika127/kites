import NavBar from '../components/Navbar';
import Hero from '../components/Hero'
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Home (){
return(
  <>
    <NavBar/>
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1544468607-e7b3e848ff87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=650&q=80"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destnation"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
  </>
)
}
export default Home;