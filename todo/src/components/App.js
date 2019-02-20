import React from 'react';
import TaskBar from './TaskBar';
import TaskList from './TaskList';

class App extends React.Component {
  state = {
    tasks: [],
    counter: 0
  };

  onInputSubmit = task => {
    // Update state with new task
    const newTask = {
      id: this.state.counter + 1,
      description: task,
      completed: false
    };

    this.setState({
      tasks: this.state.tasks.concat(newTask),
      counter: this.state.counter + 1
    });
  };

  onCheckClick = task => {
    // Mark this task as completed
    const taskIndex = this.state.tasks.findIndex(item => item.id === task.id);
    console.log('to be updated');
  };

  onTrashClick = task => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(item => item.id !== task.id)
    }));
  };

  render() {
    return (
      <div className="ui segments">
        <TaskBar onInputSubmit={this.onInputSubmit} />
        <TaskList
          tasks={this.state.tasks}
          onCheckClick={this.onCheckClick}
          onTrashClick={this.onTrashClick}
        />
      </div>
    );
  }
}

export default App;
