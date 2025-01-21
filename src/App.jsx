import AboutMe from "./components/aboutMe/AboutMe"
import Banner from "./components/banner/Banner"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Services from "./components/services/Services"
import Testimonial from "./components/testimonial/Testimonial"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Services></Services>
      <Projects></Projects>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>


    </div>
  )
}

export default App
