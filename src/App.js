import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>

        <div>
          <Portfolio></Portfolio>
        </div>
        <section>
          <Resume></Resume>
          <Contact></Contact>
        </section>
      </main>
    </div>
  );
}

export default App;
