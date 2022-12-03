import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume"

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
