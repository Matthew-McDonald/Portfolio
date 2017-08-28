import React, { Component } from "react";
import "../../styles/ProjectSection/FeaturedWork.css";
import "../../styles/ProjectSection/etsyProject.css"
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
              Broken into smaller groups, the Etsy Replica was a collaborative project amongst all classmates. My group was tasked to rebuild the Etsy homepage and header using ReactJS. Once complete, I led the joining the 4 repos together into one organization on Github.
            </p>
            <p className="etsySkillList">ReactJs | HTML | Bootstrap</p>
            </div>
            <div className="buttonDiv">

              <a href="https://github.com/TIY-Etsy-Project/TIY-Etsy-Final" target="_blank">
                <button className="etsyButton two">
                Code
                </button>
              </a>

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

// <button className="etsyButton one">
//   <a href="" target="_blank">
//     Live Site
//   </a>
// </button>
