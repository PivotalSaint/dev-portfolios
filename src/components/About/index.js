import React from "react";
import selfPortrait from "../../assets/cover/self-portrait.jpeg"

function About() {
  return (
    <section> About The Developer
      <img
        src={selfPortrait}
        style={{ width: "75%", position: "center" }}
        alt="cover"
      />
      <p>Pivotal Saints looks towards the future to see where it leads.
      </p>
    </section>
  );
}

export default About;