import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
import selfPortrait from "../../assets/cover/self-portrait.jpeg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">The Logo</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <p>Pivotal Saints: This token can be found in the Ether.
      </p>
      <img
        src={selfPortrait}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <p>Pivotal Saints looks towards the future to see where it leads.
      </p>
    </section>
  );
}

export default About;