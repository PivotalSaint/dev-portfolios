import React from "react";

function Nav() {
  const categories = [
    { name: "Portfolio", description: "A compiled set of Art by Pivotal" },
    { name: "Contact", description: "Get in touch with the Developer" },
    {
      name: "Resume",
      description: "List of all Credentials",
    },
  ];
  function categorySelected() {
    console.log("P.S.");
  }
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
            <a href="#about">About the Developer</a>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={categorySelected}>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
