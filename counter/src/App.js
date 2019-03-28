import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
  onClickDecrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
    this.props.dispatch({ type: 'ADD' });
  };

  onClickIncrement = () => {
    this.props.dispatch({ type: 'INCREMENT' });
    this.props.dispatch({ type: 'ADD' });
  };

  onClickLogin = () => {
    this.props.dispatch({ type: 'LOGIN' });
  };

  onClickLogout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Counter</h1>
        <Container>
          <Button onClick={this.onClickDecrement}>-</Button>
          <div>{this.props.count}</div>
          <Button onClick={this.onClickIncrement}>+</Button>
        </Container>
        <div style={{ textAlign: 'center' }}>
          Total clicks: {this.props.clicks}
        </div>
        <Button onClick={this.onClickLogin}>LogIn</Button>
        <Button onClick={this.onClickLogout}>LogOut</Button>
        <div>Status: {this.props.loggedIn ? 'true' : 'false'}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  clicks: state.clicks,
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(App);
