import React from "react";

function Nav() {
  const categories = [
    {
      name: "about",
      description: "Get to know Pivotal",
    },
    { name: "portfolio", description: "A compiled set of Art by Pivotal" },
    { name: "contact", description: "Get in touch with the Developer" },
    {
      name: "resume",
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
          <span role="img" aria-label="trademark"></span> Pivotal Saint
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Resume</span>
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
