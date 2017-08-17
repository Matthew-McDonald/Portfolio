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
              This was my first big Javascript project. I utilized SoundCloud's
              API to instantly search for tracks and bands on SoundClound,
              display the results and play the song right from the app.
            </p>
            <p className="soundCloudSkillList">Javascript | API | HTML | CSS</p>
            <button className="soundCloudButton one">
              <a
                href="https://matthew-mcdonald.github.io/SoundCloud-API/"
                target="_blank"
              >
                Live Site
              </a>
            </button>
            <button className="soundCloudButton two">
              <a
                href="https://github.com/Matthew-McDonald/SoundCloud-API"
                target="_blank"
              >
                Code
              </a>
            </button>
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
