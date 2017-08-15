import React, { Component } from "react";
import '../../styles/AboutSection.css';
import AboutMe from './AboutMe'
import Resume from './Resume'
import Hobbies from './Hobbies'
import KeepInTouch from './KeepInTouch'

class AboutSection extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
      <div className="aboutMeChildContainer">
        <a name="AboutMe"></a>
        <AboutMe />
      </div>
      <div className="aboutMeChildContainer">
        <Resume />
      </div>
      <div className="aboutMeChildContainer">
        <Hobbies />
      </div >
      <div className="aboutMeChildContainer">
        <KeepInTouch />
      </div>
      </div>
    )
  }
}

export default AboutSection;
