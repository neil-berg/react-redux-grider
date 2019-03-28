import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { increment, decrement, login, logout } from './actions';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  margin: 1em;
  font-size: 1em;
  border-radius: 10px;

  :focus {
    outline: 0;
  }

  :active {
    background: #ccc;
  }
`;

class App extends React.Component {
  render() {
    const {
      decrement,
      increment,
      clicks,
      count,
      login,
      logout,
      loggedIn
    } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Counter</h1>
        <Container>
          <Button onClick={decrement}>-</Button>
          <div>{count}</div>
          <Button onClick={increment}>+</Button>
        </Container>
        <div style={{ textAlign: 'center' }}>Total clicks: {clicks}</div>
        <Button onClick={login}>LogIn</Button>
        <Button onClick={logout}>LogOut</Button>
        <div>Status: {loggedIn ? 'true' : 'false'}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  clicks: state.clicks,
  loggedIn: state.loggedIn
});

export default connect(
  mapStateToProps,
  {
    increment,
    decrement,
    login,
    logout
  }
)(App);
