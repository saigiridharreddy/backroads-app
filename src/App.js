import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import About from "./components/About";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
