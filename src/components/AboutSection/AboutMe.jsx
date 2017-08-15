import React, { Component } from "react";
import '../../styles/AboutSection.css'

class AboutMe extends Component {
  render() {
    return (

        <div className="flip-container" >
        	<div className="flipper">
        		<div className="front">
        			<p>Front</p>
        		</div>
        		<div className="back">
        			<p>Back</p>
        		</div>
        	</div>
        </div>

    );
  }
}

export default AboutMe;
