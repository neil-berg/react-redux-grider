import React from 'react';
import TaskBar from './TaskBar';
import TaskList from './TaskList';

class App extends React.Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    counter: 0
  };

  onInputSubmit = task => {
    // Update state with new task
    const newTask = {
      id: this.state.counter + 1,
      description: task,
      completed: false
    };

    this.setState(prevState => {
      const updatedTasks = prevState.tasks.concat(newTask);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
        counter: prevState.counter + 1
      };
    });
  };

  onCheckClick = task => {
    // Mark this task as completed
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(item => {
        return item.id === task.id ? { ...item, completed: true } : item;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks
      };
    });
  };

  onTrashClick = task => {
    // Remove this task from state and localStorage
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.filter(item => item.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks
      };
    });
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
