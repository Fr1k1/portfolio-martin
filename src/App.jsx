import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="content-wrapper">
        <Projects />
      </div>
    </>
  );
}

export default App;
