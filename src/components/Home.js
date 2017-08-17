import React, { Component } from "react";
import AboutSection from "./AboutSection/AboutSection";
import Featured from "./FeaturedProjects/FeaturedWork";
import ContactSection from './ContactSection'
import Header from './Header'

import "../styles/Home.css";
import "../styles/Header.css"

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="headerContainer">
        <Header />
        </div>
        <div className="mainContainer">
          <a name="Home">
            <h3 />
          </a>
        </div>
        <div>
          <ContactSection />
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
