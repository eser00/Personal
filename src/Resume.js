import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "New Jersey Institute of Technology",
      year: "2022-2026",
      gpa: "3.8/4.0"
    },
    {
      degree: "High School Diploma",
      school: "Bergen Arts and Science Charter School",
      year: "2018-2022",
      gpa: "3.9/4.0"
    }
  ];

  const experience = [
    {
      title: "Data Science Intern",
      company: "Sogody-Bioloupe",
      period: "2025-Present",
      responsibilities: [
        "Engineered SQL and Python pipelines, reducing data errors by 15% through validation of multi million row pharmaceutical datasets.",
        "Analyzed 25+ clinical trials, improving interpretability by 20% via advanced modeling and regression analysis.",
        "Accelerated model runtime by 30% through refined feature selection and vectorized computation, cutting compute costs."
      ]
    },
    {
      title: "Java Instructor/Assistant",
      company: "Neotech Academy",
      period: "2023-2025",
      responsibilities: [
        "Mentored 100+ students from beginner to proficient through project based instruction in Java, recursion, and data structurealgorithms.",
        "Elevated student debugging accuracy by 30% through structured peer review sessions and consistent code quality standards.",
        "Simplified complex programming concepts for 100+ students through comparative demonstrations, strengthening understanding of performance trade offs and algorithmic efficiency."
      ]
    }, 

    {
      title: "Volunteer",
      company: "Albanian Cultural Center NJ",
      period: "2020-2025",
      responsibilities: [
        "Led community engagement through Albanian language and dance instruction by leading weekly cultural classes.",
        "Coordinated 10+ large scale community events through planning and coordination by collaborating with staff and volunteers.",
        "Cultivated leadership and teamwork skills through 5+ years of volunteer service, mentoring youth and leading cultural engagement programs."

      ]
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C", "C++", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Bootstrap", "jQuery"],
    "Tools & Technologies": ["Git", "VS Code", "MongoDB", "PostgreSQL", "Figma", "Adobe XD"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;