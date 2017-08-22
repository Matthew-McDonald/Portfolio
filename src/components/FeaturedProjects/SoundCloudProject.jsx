import React, { Component } from "react";
import "../../styles/FeaturedWork.css";
import { Link } from "react-router-dom";

class SoundCloud extends Component {
  render() {
    return (
      <div>
        <h3 className="soundCloudTitle">Searchable SoundCloud API</h3>
        <div className="soundCloudContainer">
          <div className="soundCLoudtextContainer textContainer">
            <div className="soundCloudTextContainer">
            <p className="soundCloudParagraph">
              This was my first personal Javascript project. I utilized SoundCloud's
              API to instantly search for tracks and bands on SoundClound,
              display the results and play songs right from the app. This was also my first time designing my own app from the ground up with CSS.
            </p>
            <p className="soundCloudSkillList">Javascript | API | HTML | CSS</p>

              <a
                href="https://hostedprojects.github.io/SoundCloud-API-Host/" target="_blank"
              >
              <button className="soundCloudButton one">
                Live Site
                </button>
              </a>


              <a
                href="https://github.com/Matthew-McDonald/SoundCloud-API"
                target="_blank"
              >
              <button className="soundCloudButton two">
                Code
                </button>
              </a>

            </div>
          </div>
          <div className="soundCloudImgContainer imageContainer">
            <img
              className="projectScreenShot"
              src={require("../../styles/images/SoundCloudProject.png")}
              alt="SoundCloudProject"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SoundCloud;
