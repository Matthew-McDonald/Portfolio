import React, { Component } from "react";
import "../../styles/AboutSection.css";

class KeepInTouch extends Component {
  render() {
    return (
      <div
        className="flip-container KITContainer"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="flipper">
          <div className="front">
            <p>Keep In Touch</p>
          </div>
          <div className="back">
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default KeepInTouch;
