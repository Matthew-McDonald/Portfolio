import React, { Component } from "react";
import "../../styles/AboutSection.css";

class KeepInTouch extends Component {
  render() {
    return (
      <div
        className="flip-container"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="flipper">
          <div className="front">
            <p>Keep In Touch</p>
          </div>
          <div className="container back">
            <div className="grid-1 callout">
              <a href="https://github.com/Matthew-McDonald" target="_blank">Link</a><img
                className="GitHubLogo"
                src={require("../../styles/images/gitHubLogo.png")}
                alt="GitHub"
              />
            </div>
            <div className="grid-2 callout">
              <img
                className="LinkedInLogo"
                src={require("../../styles/images/linkedInLogo.png")}
                alt="LinkedIn"
              />
            </div>
            <div className="grid-3 callout">
              <p>Test</p>
            </div>
            <div className="grid-4 callout">
              <p>Test</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeepInTouch;
