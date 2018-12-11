import React, { Component } from 'react';
import ProjectItem from '../ProjectItem';
import './Projects.css';

class Projects extends Component {
  render() {
    const projectItemsHdr = 
      <div>
        <div className="hdr-category">Category</div>
        <div className="separator"></div>
        <div className="hdr-title">Title</div>
      </div>;

    let projectItems = [];
    if (this.props.projects) {
      projectItems = this.props.projects.map((project) => {
        return <ProjectItem key={project.id} project={project} onDeleteProject={this.deleteProject.bind(this)} />
      });
    }

    return (
      <div className="Projects">
        {projectItemsHdr}
        {projectItems}
      </div>
    );
  }

  deleteProject(id) {
    this.props.deleteProject(id);
  }
}

export default Projects;
