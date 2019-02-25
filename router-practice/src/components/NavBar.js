import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from '../pages/Landing';
import Work from '../pages/Work';
import About from '../pages/About';

const NavBar = () => (
  <div>
    <ul className="nav-bar">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/work">Work</Link>
      </li>
      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/work" component={Work} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);
export default NavBar;
