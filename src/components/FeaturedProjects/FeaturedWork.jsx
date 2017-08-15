import React, { Component } from "react";
import "../../styles/FeaturedWork.css";
import SoundCloud from "./SoundCloudProject";
import Etsy from "./EtsyProject";
import ResponsiveMovie from "./MovieProject";

class Featured extends Component {
  render() {
    return (
      <div className="featuredContainer">
        <a name="Featured">
          <h3>Featured</h3>
        </a>
        <div className="etsy-ProjectContainer projectContainer">
        <Etsy />
        </div>
        <div className="projectContainer soundCloud-ProjectContainer">
        <SoundCloud />
        </div>
        <div className="projectContainer movie-ProjectContainer">
        <ResponsiveMovie />
        </div>
      </div>
    );
  }
}

export default Featured;
