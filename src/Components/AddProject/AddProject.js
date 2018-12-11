import React, { Component } from 'react';
import './AddProject.css';
import uuid from 'uuid';

class AddProject extends Component {
  render() {
    return (
      <div className="AddProject">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label>
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label>
                <input type="text" ref="category" />
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    this.props.addProject({
      id: uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value,
    });
    event.preventDefault();
  }  
}

export default AddProject;
