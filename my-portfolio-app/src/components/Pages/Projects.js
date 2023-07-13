import React from "react";
import SingleProject from './SingleProject';

function Projects() {
  const projects = [    
    {
      title: 'Work Day Scheduler',
      description: 'A simple calendar app for scheduling your work day.',
      imageUrl: '/images/WorkDayScheduler.png',
      projectUrl: 'https://nanthantk.github.io/WorkDayScheduler/'
    },

    {
      title: 'Readme Generator',
      description: 'Creates Readme.md from user inputs',
      imageUrl: '/images/ReadMe.jpg',
      projectUrl: 'https://github.com/NanthanTK/README-Generator'
    },
    {
      title: 'Coding Quiz',
      description: 'A quiz to prepare for a job interview',
      imageUrl: '/images/Quiz.png',
      projectUrl: 'https://nanthantk.github.io/Quiz/'
    },
    {
      title: 'Easy note taker',
      description: 'A handy note taker to jot down thoughts and ideas.',
      imageUrl: '/images/NoteTaker.png',
      projectUrl: 'https://easy-note-taker-karun.herokuapp.com/notes'
    },
    {
      title: 'Weather Dashboard',
      description: 'An app to search weather and keep tabs of them',
      imageUrl: '/images/WeatherDashboard.png',
      projectUrl: 'https://nanthantk.github.io/weather-dashboard/'
    },
    {
      title: 'Password Generator',
      description: 'An app to generate secure password.',
      imageUrl: '/images/PasswordGenerator.png',
      projectUrl: 'https://nanthantk.github.io/Password-Generator/'
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