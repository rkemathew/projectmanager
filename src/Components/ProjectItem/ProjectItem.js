import React, { Component } from 'react';
import './ProjectItem.css';

class ProjectItem extends Component {
  render() {
    return (
      <div className="ProjectItem">
        <span className="project-category">{this.props.project.category}</span>
        <span className="separator">-</span>
        <span className="project-title">{this.props.project.title}</span>
      </div>
    );
  }
}

export default ProjectItem;
