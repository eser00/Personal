import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-container">
          <div className="image">
            <img 
              src="https://ih1.redbubble.net/image.5435799982.8359/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="Your Profile" 
            />
          </div>
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              Hi! I’m Eser, a passionate software developer and computer science student. 
              I enjoy building innovative projects, exploring machine learning, and designing 
              user friendly web applications. My goal is to use technology to solve real world 
              problems and make a positive impact in the world.
            </p>
            <p>
              Outside of coding, I love collaborating on creative ideas, learning new technologies, 
              and constantly improving my skills. Welcome to my portfolio!
            </p>

          
            <h2 className="skills-title">Skills & Technologies</h2>
            <ul className="skills-list">
              <li className="skill-pill">React</li>
              <li className="skill-pill">JavaScript</li>
              <li className="skill-pill">CSS3</li>
              <li className="skill-pill">HTML5</li>
              <li className="skill-pill">Node.js</li>
              <li className="skill-pill">Git</li>
            </ul>          
            </div>
        </div>
      </div>
    );
  }
}

export default About;
