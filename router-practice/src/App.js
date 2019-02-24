import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Landing} />
      </Router>
    );
  }
}

export default App;
