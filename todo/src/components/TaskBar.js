import React from 'react';

class TaskBar extends React.Component {
  state = { task: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onInputSubmit(this.state.task);
    this.setState({ task: '' }); // Clear input field
  };

  onInputChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="task-form ui form" onSubmit={this.handleSubmit}>
          <div className="ui action input">
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.task}
              placeholder="Enter your task"
            />
            <button className="ui teal right labeled icon button">
              <i className="paper plane icon" />
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskBar;
