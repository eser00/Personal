import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Lung Cancer Prediction Model',
          image: 'https://repository-images.githubusercontent.com/474572546/d2b783f4-a08f-4b2a-b26b-4989404f9304',
          description: 'A full-stack e-commerce platform built with React and Node.js.',
          technologies: ['Google Colab', 'Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
          demoLink: 'https://docs.google.com/presentation/d/1mYx-j7uV26KBdYNetnb-5CjgdIXHbORDApPW1Vdh2Jw/edit?usp=sharing',
          codeLink: 'https://colab.research.google.com/drive/1T8rP0Y-HZwpjvpiAG0XTh570HeUhHIJk?usp=sharing'
        },
        {
          title: 'Nyc Real Estate Prediction Model',
          image: 'https://www.rismedia.com/wp-content/uploads/2022/04/report_home_price_increase-AdobeStock_165414758.jpg',
          description: 'A collaborative task management application with real-time updates.',
          technologies: ['Google Colab', 'Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
          demoLink: '#',
          codeLink: 'https://colab.research.google.com/drive/1MESxXyRGvKNcS-c0w3Lc56F9emDZCOn3?usp=sharing'
        }
      ]
    };
  }

  render() {
    return (
      <section className="portfolio-section">
        <h1 className="portfolio-title">My Portfolio</h1>
        <div className="portfolio-container">
          {this.state.projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="buttons">
                  <a href={project.demoLink} className="btn demo">Live Demo</a>
                  <a href={project.codeLink} className="btn code">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
