import React from "react";

function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="title-contact">
        <h1>You Can Contact Here</h1>
      </div>
      <div className="contact-container">
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
