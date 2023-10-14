import "./App.scss";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="content-wrapper">
        <Projects />
        <TechStack />
        <Services />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
