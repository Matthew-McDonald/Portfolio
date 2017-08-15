import React, { Component } from "react";
import NavBar from './NavBar';
import Footer from './Footer'
import Header from './Header'
import '../styles/NavBar.css'
import '../styles/Header.css'
import '../styles/index.css'

class Base extends Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
          <Header />
        </div>
      {this.props.children}
      <div>
        <Footer />
      </div>
</div>
    )
  }
}

export default Base;
