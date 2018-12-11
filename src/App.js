import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({projects: [{
      title: 'Business Website',
      category: 'Web Design',
    }, {
      title: 'Social App',
      category: 'Mobile Development',
    }, {
      title: 'Ecommerce Shopping Card',
      category: 'Web Development',
    }]});
  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <hr />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
