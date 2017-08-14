import React, { Component } from "react";
import "../styles/FeaturedWork.css";
import {Link} from "react-router-dom";

class Etsy extends Component {
  render() {
    return (
      <div>
        <h3>Etsy</h3>
      <div className="etsyContainer">
        <div>
          <p>This was my first big Javascript project. I utilized SoundCloud's API to instantly search for tracks and bands on SoundClound, display the results and play the song right from the app.</p>
          <p>Javascript | API | HTML | CSS</p>
          <button><a href="https://matthew-mcdonald.github.io/SoundCloud-API/" target="_blank">Live Site</a></button>
          <button><a href="https://github.com/Matthew-McDonald/SoundCloud-API" target="_blank">Code</a></button>
        </div>
        <div className="imageContainer">
          <img
            className="projectScreenShot"
            src={require("../styles/images/SoundCloudProject.png")}
            alt="Etsy Project"
          />
        </div>
      </div>
      </div>
    );
  }
}

export default Etsy;
