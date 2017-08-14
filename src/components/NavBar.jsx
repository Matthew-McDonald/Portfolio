import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <a href="#Home">Home</a>
        <br/>
        <a href="#AboutMe">About Me</a>
        <br/>
        <a href="#Featured">Featured</a>
      </div>
    )
  }
}

export default NavBar;
