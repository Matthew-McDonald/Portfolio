import React, { Component } from "react";
import '../../styles/AboutSection.css';
import AboutMe from './AboutMe'
import Skills from './Skills'
import Hobbies from './Hobbies'
import KeepInTouch from './KeepInTouch'

class AboutSection extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
      <div className="aboutMeChildContainer">
        <a name="AboutMe"></a>
        <Skills />
      </div>
      <div className="aboutMeChildContainer">
        <AboutMe />
      </div>
      <div className="aboutMeChildContainer">
        <KeepInTouch />
      </div>
      </div>
    )
  }
}

export default AboutSection;
