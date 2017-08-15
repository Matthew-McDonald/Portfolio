import React, { Component } from "react";
import '../../styles/AboutSection.css'

class Hobbies extends Component {
  render() {
    return (

        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
        			<p>Hobbies</p>
        		</div>
        		<div className="back">
        			<p>Description</p>
        		</div>
        	</div>
        </div>

    );
  }
}

export default Hobbies;
