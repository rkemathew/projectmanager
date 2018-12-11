import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({projects: [{
      id: uuid.v4(),
      title: 'Business Website',
      category: 'Web Design',
    }, {
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development',
    }, {
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development',
    }]});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <hr />
        <Projects projects={this.state.projects} deleteProject={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }

  handleAddProject(newProject) {
    const projects = this.state.projects;
    projects.push(newProject);
    this.setState({projects});
  }

  handleDeleteProject(id) {
    const projects = this.state.projects;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects});
  }
}

export default App;
