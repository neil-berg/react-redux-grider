import React from 'react';
import NavBar from '../components/NavBar';

class Landing extends React.Component {
  render() {
    return <NavBar navItems={['work', 'about', 'contact']} />;
  }
}

export default Landing;
