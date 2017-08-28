import React, { Component } from "react";
import "../../styles/ProjectSection/FeaturedWork.css";
import "../../styles/ProjectSection/movieProject.css"
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    return (
      <div>
        <h3 className="movieTitle">Responsive Movie Site</h3>
        <div className="MovieContainer">
          <div className="textContainer">
            <div className="movieTextContainer">
            <p className="movieParagraph">This responsive site contains 3 pages with break points set for mobile, tablet and desktop. It was created based off mockup pictures of how the site should respond at different size screens.</p>
            <p className="movieSkillList">HTML | Responsive Design | CSS</p>
              <a href="https://hostedprojects.github.io/Responsive-Movie-Site/" target="_blank">
                <button className="movieButton one">
                Live Site
                </button>
              </a>
              <a href="https://github.com/Matthew-McDonald/Responsive-Movie-Site" target="_blank">
                <button className="movieButton two">
                Code
                </button>
              </a>
            </div>
          </div>
          <div className="mainMovieContainer">
          <div className="movieImageContainer">
            <img
              className="projectScreenShotMovie"
              src={require("../../styles/images/ResponsiveRashoman.png")}
              alt="MovieProject"
            />
          </div>
          <div className="mobileContainer">
          <img
            className="mobileScreenShot"
            src={require("../../styles/images/ResponsiveRashomanMobile.png")}
            alt="MobileProject"
          />
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default Movie;
