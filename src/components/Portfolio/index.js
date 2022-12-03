import React from "react";
import alludaShot from "../../assets/large/portfolio/alluda-scrnsht-large.jpg";
import noteTaker from "../../assets/large/portfolio/note-taker-large.jpg";
import horiseon from "../../assets/large/portfolio/horiseon-large.jpg";

function Portfolio() {
  return (
    <section className="my-5">
      <h id="portfolio">Pivotal: The Developer</h>
    
    <section>
    <a href="https://alluda.herokuapp.com/" className="my-5">Alluda</a>
    </section>
      <img
        src={alludaShot}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />

    <p>This project contains mental health awareness and supports the mental state of all people.</p>
    
    ...

    To see a full list of the code sourcing for this project, check out <a href="https://github.com/PivotalSaint/alluda">GitHub!</a>

          <section className="my-5">
          <a href="https://pivotal-note-taker.herokuapp.com/" className="my-5">Note Taking App</a>
          <section></section>
            <img
              src={noteTaker}
              className="my-2"
              style={{ width: "100%" }}
              alt="cover"
            />
      
          <p>This project allows a person to take notes.</p>
          To see a full list of the code sourcing for this project, check out <a href="https://github.com/PivotalSaint/note-taker">GitHub!</a>
          </section>

          <section className="my-5">
          <a href="https://pivotalsaint.github.io/Challenge1/" className="my-5">Horiseon</a>
          <section></section>
            <img
              src={horiseon}
              className="my-2"
              style={{ width: "100%" }}
              alt="cover"
            />
          <p>This project was the first project created and shows html/css functionality.</p>
          To see a full list of the code sourcing for this project, check out <a href="https://github.com/PivotalSaint/Challenge1">GitHub!</a>
          </section>
     </section>
  );
}

export default Portfolio;