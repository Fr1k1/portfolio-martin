import "./App.scss";
import Experience from "./Components/Experience/Experience";
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
      </div>
    </>
  );
}

export default App;
