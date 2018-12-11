import React, { Component } from 'react';
import './AddProject.css';

class AddProject extends Component {
  render() {
    return (
      <div className="AddProject">
        <form>
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
}

export default AddProject;
