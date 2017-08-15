import React, { Component } from "react";
import '../../styles/AboutSection.css';
import AboutMe from './AboutMe'

class AboutSection extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
      <div>
        <a name="AboutMe"><h3>About Me</h3></a>
      </div>
      <div>
        <AboutMe />
      </div>
      </div>
    )
  }
}

export default AboutSection;
