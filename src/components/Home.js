import React, { Component } from "react";
import AboutSection from "./AboutSection/AboutSection";
import Featured from "./FeaturedProjects/FeaturedWork";

import "../styles/Home.css";

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="mainContainer">
          <a name="Home">
            <h3 />
          </a>
        </div>
        <div>
          <AboutSection />
        </div>
        <div className="Featured">
          <Featured />
        </div>
      </div>
    );
  }
}

export default App;
