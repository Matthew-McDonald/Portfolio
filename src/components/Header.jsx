import React, { Component } from 'react';

class Header extends Component {
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
