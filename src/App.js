import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
