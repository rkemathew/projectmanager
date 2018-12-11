import React, { Component } from 'react';
import './ProjectItem.css';

class ProjectItem extends Component {
  render() {
    return (
      <div className="ProjectItem">
        <span className="remove-project" onClick={this.handleDeleteProject.bind(this, this.props.project.id)}>X</span>
        <span className="project-category">{this.props.project.category}</span>
        <span className="separator">-</span>
        <span className="project-title">{this.props.project.title}</span>
      </div>
    );
  }

  handleDeleteProject(id) {
    this.props.onDeleteProject(id);
  }
}

export default ProjectItem;
