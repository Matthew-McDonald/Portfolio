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
          <div className="back kitback">
            <div className="kitBorderBottom">
              <h6>Email</h6>
              <p>mattmcd1221@gmail.com</p>
            </div>
            <div className="phoneSection">
              <h6>Phone</h6>
              <p>484.885.9003</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeepInTouch;
