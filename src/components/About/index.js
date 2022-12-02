import React from "react";
import coverImage from "../../assets/cover/cover-image.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Get to know Pivotal</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;