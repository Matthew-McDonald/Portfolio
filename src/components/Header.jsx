import React, { Component } from 'react';
import Headroom from 'react-headroom'
import {Link} from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.downTolerance = 500,
    this.upTolerance = 1000
  }

  render() {
    return (

      <div className="headerWrapper">
      <div className="Header">
        <h1>Matt McDonald</h1>
        <p>Front-End Developer</p>

      </div>
      <div className="NavBar">
        <a href="#AboutMe">About</a>
        <br/>
        <a href="#Projects">Projects</a>
        <br/>
        <a href="#Contact">Contact</a>
        <br/>
        <a href={process.env.PUBLIC_URL + "/MatthewMcDonald-Resume.pdf"} target="_blank">Resume</a>
      </div>
      </div>

    );
  }
}

export default Header;
