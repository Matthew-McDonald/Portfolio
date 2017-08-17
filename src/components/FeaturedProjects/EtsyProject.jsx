import React, { Component } from "react";
import "../../styles/FeaturedWork.css";
import { Link } from "react-router-dom";

class Etsy extends Component {
  render() {
    return (
      <div>
        <h3 className="etsyTitle">Etsy Replica</h3>
        <div className="etsyContainer">
          <div className="textContainer">
            <div className="etsyTextContainer">
            <div>
            <p className="etsyParagraph">
              This was a whole class project where we were split into small groups and given different pages from the Etsy website to replicate in ReactJs. My group was tasked with the home page and header. Once complete I led the class in joining the 4 repos together into one organization on Github.
            </p>
            <p className="etsySkillList">ReactJs | HTML | Bootstrap</p>
            </div>
            <div className="buttonDiv">
            <button className="etsyButton one">
              <a href="" target="_blank">
                Live Site
              </a>
            </button>
            <button className="etsyButton two">
              <a href="https://github.com/TIY-Etsy-Project/TIY-Etsy-Final" target="_blank">
                Code
              </a>
            </button>
            </div>
            </div>
          </div>
          <div className="imageContainer">
            <img
              className="projectScreenShot"
              src={require("../../styles/images/EtsyProject.png")}
              alt="Etsy Project"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Etsy;
