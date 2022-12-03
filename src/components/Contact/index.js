import React from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  return (
    <section className="mx-2">
      <h1 id="contact">Get in touch</h1>
      <section>
      <form className="my-5"></form>
      <p>Please enter your email</p>
        <input type={validateEmail}></input>
        <button className="mx-2">Submit</button>
      </section>
    </section>
  );
}

export default Contact;