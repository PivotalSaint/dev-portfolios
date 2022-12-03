import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">
         Pivotal Saint <span role="img" aria-label="copyright">&#169;</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" className="mx-2">About the Developer</a>
            <a href="#portfolio" className="mx-2">Portfolio</a>
            <a href="#contact" className="mx-2">Contact</a>
            <a href="#resume" className="mx-2">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
