import React, { Fragment } from "react";
import './projects.css'
import '../dashboard/Dashboard.css'

const ProjectsPage = () => {
  return (
    <div className='projects-container'>
      {/* <h1>This is the Projects Page</h1> */}
      <div className='red-title rotate-title'>
            <span>Super </span>
            <span className='superprojects-text'>Pro</span>
            <span className='superprojects-text' id='supertinker-i'>
              j
            </span>
            <span className='superprojects-text'>ects</span>
      </div>
      <div classname='card'>
        <div>This is the search projects section</div>
      </div>
    </div>
  );
};

export default ProjectsPage;
