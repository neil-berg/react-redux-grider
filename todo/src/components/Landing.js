import React from 'react';
import { Redirect } from 'react-router-dom';
import './Landing.css';

class Landing extends React.Component {
  state = { toMainPage: false };

  onLandingClick = () => {
    this.setState(() => ({
      toMainPage: true
    }));
  };

  render() {
    if (this.state.toMainPage) {
      return <Redirect to="/todo" />;
    }
    return (
      <div className="landing-card ui card">
        <div className="content">
          <div className="header">To Do App</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Simple React ToDo App</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  Add to-do items and mark them complete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button primary" onClick={this.onLandingClick}>
            Start new list
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
