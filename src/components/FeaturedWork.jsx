import React, { Component } from "react";
import "../styles/FeaturedWork.css";
import SoundCloud from './SoundCloudProject'
import Etsy from './EtsyProject'

class Featured extends Component {
  render() {
    return (
      <div className="featuredContainer">
        <a name="Featured">
          <h3>Featured</h3>
        </a>
        <SoundCloud />
        <Etsy />
      </div>
    );
  }
}

export default Featured;
