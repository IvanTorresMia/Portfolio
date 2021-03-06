import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import FakeNav from "./Components/FakeNav";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills"
import Timeline from './Components/Experience/Timeline'
import Portfolio from './Components/Portfolio/Portfolio-Con'
import ContactForm from './Components/Contact'
import Footer from './Components/Footer'
import { Link, animateScroll as scroll } from 'react-scroll'

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#156307"
            }
          }
        }
      }}
      />
      <FakeNav />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Timeline />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
