import React, { Component } from "react";
import '../../styles/AboutSection.css'

class Skills extends Component {
  render() {
    return (

        <div className="flip-container skillsContainer" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
        			<p>Skills</p>
        		</div>
        		<div className="back">
        			<p>Description</p>
        		</div>
        	</div>
        </div>

    );
  }
}

export default Skills;
