import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="content-wrapper">
        <Projects />
        <TechStack />
      </div>
    </>
  );
}

export default App;
