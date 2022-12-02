import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
