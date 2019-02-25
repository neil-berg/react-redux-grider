import React from 'react';
import { Route, Link } from 'react-router-dom';
import Project from '../components/Project';

const Work = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/project1`}>Project 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/project2`}>Project 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/project3`}>Project 3</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:projectID`} component={Project} />
    </div>
  );
};

export default Work;
