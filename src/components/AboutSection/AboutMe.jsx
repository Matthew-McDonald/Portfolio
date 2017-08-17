import React, { Component } from "react";
import '../../styles/AboutSection.css'

class AboutMe extends Component {
  render() {
    return (

        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
        			<p>About Me</p>
        		</div>
        		<div className="back aboutBack">
        			<p>As a recent grad of The Iron Yard I have spent the last 4 months immersed in code. Creating, learning and collaborating in teams to grow my skills as a developer. I am eager to learn and grow as technologies change and am passionate about becoming the best developer I can be.
              </p>
        		</div>
        	</div>
        </div>

    );
  }
}

export default AboutMe;
