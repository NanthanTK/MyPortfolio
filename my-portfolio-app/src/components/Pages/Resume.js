import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h2 className="resume-heading">Professional Summary</h2>
      <p className="resume-summary">
        Highly skilled and motivated Full Stack Developer with expertise in React and the MERN stack. Strong foundation in front-end and back-end technologies. Proficient in HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, Express.js, MySQL with Sequelize, and MongoDB with Mongoose. Passionate about creating dynamic and user-friendly web applications, dedicated to delivering high-quality code and continuously expanding knowledge in web development.
      </p>

      <h2 className="resume-heading">Technical Skills</h2>
      <ul className="resume-skills">
        <li>HTML, CSS, JavaScript, jQuery, Bootstrap</li>      
        <li>React</li>
        <li>Node.js, Express.js</li>      
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>RESTful APIs</li>
        <li>Git</li>
      </ul>

      <h2 className="resume-heading">Education</h2>
      <div className="resume-education">
        <h3>Coding Bootcamp Name</h3>
        <ul>
          <li>Completed an intensive coding bootcamp with a focus on full-stack web development.</li>
          <li>Gained hands-on experience in HTML, CSS, JavaScript, and the MERN stack.</li>
          <li>Participated in team-based projects, practicing Agile/Scrum methodologies and version control with Git.</li>
        </ul>
      </div>


    </div>
  );
};

export default Resume;
