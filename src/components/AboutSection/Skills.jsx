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
        		<div className="back skillsBack">
        			<p className="backPone">JavaScript | React.js | Node.js | Redux </p>
              <p className="backPtwo">HTML | CSS | Git | GitHub | MySql | PostgreSQL</p>
              <p className="backPthree">MongoDB | Express.js | SASS | Bootstrap</p>
        		</div>
        	</div>
        </div>

    );
  }
}

export default Skills;
