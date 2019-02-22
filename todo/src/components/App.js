import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import TaskBar from './TaskBar';
import TaskList from './TaskList';
import Button from './Button';

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

  clearTasks = e => {
    // Clear tasks from state and local storage
    this.setState({ tasks: [] });
    localStorage.removeItem('tasks');
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/todo"
            render={props => (
              <div className="ui segments">
                <TaskBar onInputSubmit={this.onInputSubmit} />
                <TaskList
                  tasks={this.state.tasks}
                  onCheckClick={this.onCheckClick}
                  onTrashClick={this.onTrashClick}
                />
                <Button
                  text="Clear tasks"
                  tasks={this.state.tasks}
                  onButtonClick={this.clearTasks}
                />
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
