import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import App from './components/App';
import NotFound from './components/NotFound';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#root')
);
