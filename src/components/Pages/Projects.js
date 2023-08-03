import React from "react";
import SingleProject from './SingleProject';
import scheduler from "../../images/WorkDayScheduler.png"
import readme from "../../images/ReadMe.jpg"
import quiz from "../../images/Quiz.png"
import dashboard from "../../images/WeatherDashboard.png"
import note from "../../images/NoteTaker.png"
import pGenerator from "../../images/PasswordGenerator.png"
import ChatAlong from "../../images/Chat_Along_logo.jpg"

function Projects() {
  const projects = [    
    {
      title: 'Work Day Scheduler',
      description: 'A simple calendar app for scheduling your work day.',
      imageUrl: scheduler,
      projectUrl: 'https://nanthantk.github.io/WorkDayScheduler/'
    },

    {
      title: 'Readme Generator',
      description: 'Creates Readme.md from user inputs',
      imageUrl: readme,
      projectUrl: 'https://github.com/NanthanTK/README-Generator'
    },
    {
      title: 'Coding Quiz',
      description: 'A quiz to prepare for a job interview',
      imageUrl: quiz,
      projectUrl: 'https://nanthantk.github.io/Quiz/'
    },
    {
      title: 'Easy note taker',
      description: 'A handy note taker to jot down thoughts and ideas.',
      imageUrl: note,
      projectUrl: 'https://easy-note-taker-karun.herokuapp.com/notes'
    },
    {
      title: 'Weather Dashboard',
      description: 'An app to search weather and keep tabs of them',
      imageUrl: dashboard,
      projectUrl: 'https://nanthantk.github.io/weather-dashboard/'
    },
    {
      title: 'Password Generator',
      description: 'An app to generate secure password.',
      imageUrl: pGenerator,
      projectUrl: 'https://nanthantk.github.io/Password-Generator/'
    },
    {
      title: 'ChatAlong',
      description: 'A social media App to share thoughts and ideas.',
      imageUrl: ChatAlong,
      projectUrl: 'https://chatalong-50aa45c36357.herokuapp.com/'
    }
  ];

  return (
    <div className="project-page">
      <h1>My Projects</h1>
      <div className="project-container">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col mb-4">
              <SingleProject
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;