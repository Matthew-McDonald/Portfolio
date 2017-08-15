import React, { Component } from 'react';
import Headroom from 'react-headroom'

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
        <h1>Matt McDonald</h1><p>Front-End Developer</p>
        <p>484.885.9003 mattmcd1221@gmail.com</p>
      </div>
      <div className="NavBar">
        <a href="#Home">Home</a>
        <br/>
        <a href="#AboutMe">About Me</a>
        <br/>
        <a href="#Featured">Featured</a>
      </div>
      </div>
  
    );
  }
}

export default Header;
