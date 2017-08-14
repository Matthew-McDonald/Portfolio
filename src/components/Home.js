import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Featured from './FeaturedWork';

import '../styles/Home.css';

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="mainContainer">
          <a name="Home"><h3></h3></a>
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <Featured />
        </div>
      </div>
    );
  }
}

export default App;
