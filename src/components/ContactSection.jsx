import React, { Component } from "react";
import '../styles/ContactSection.css'

class ContactSection extends Component {
  render() {
    return (
      <div className="contactContainer">
      <div className="contactChild">
        <a href="https://github.com/Matthew-McDonald" target="_blank"><img
          className="GitHubLogo"
          src={require("../styles/images/gitHubLogo.png")}
          alt="GitHub"
        /></a>
      </div>
      <div className="contactChild LinkedInContainer">
        <a href="https://www.linkedin.com/in/matt-mcdonald1/" target="_blank">
        <img
          className="LinkedInLogo"
          src={require("../styles/images/linkedInLogo.png")}
          alt="LinkedIn"
        /></a>
      </div>
    </div>

    )
  }
}

export default ContactSection;
