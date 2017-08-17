import React, { Component } from "react";
import "../../styles/FeaturedWork.css";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    return (
      <div>
        <h3 className="movieTitle">Responsive Movie Site</h3>
        <div className="MovieContainer">
          <div className="textContainer">
            <div className="movieTextContainer">
            <p className="movieParagraph">My first responsive website, created in week 2 of The Iron Yard. It has 3 pages with break points set for mobile, tablet and desktop. </p>
            <p className="movieSkillList">React | Redux | CSS</p>
            <button className="movieButton one">
              <a href="https://matthew-mcdonald.github.io/Responsive-Movie-Site/" target="_blank">
                Live Site
              </a>
            </button>
            <button className="movieButton two">
              <a href="https://github.com/Matthew-McDonald/Responsive-Movie-Site" target="_blank">
                Code
              </a>
            </button>
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
