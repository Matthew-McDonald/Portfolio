import React, { Component } from "react";
import '../../styles/AboutSection.css'

class Resume extends Component {
  render() {
    return (

        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
        			<p>Resume</p>
        		</div>
        		<div className="back">
        			<p>Description</p>
        		</div>
        	</div>
        </div>

    );
  }
}

export default Resume;