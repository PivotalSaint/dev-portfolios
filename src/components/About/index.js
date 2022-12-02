import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

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
    </section>
  );
}

export default About;