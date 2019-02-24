import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';

const NavBar = ({ navItems }) => {
  console.log(navItems);
  return (
    <Router>
      <div className="nav-wrapper">
        <h2>Landing</h2>
        <ul className="nav-bar">
          <li className="nav-item">
            <Link to="/work">Work</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
