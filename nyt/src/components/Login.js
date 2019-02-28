import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  display: block;
  margin: 0.25em;
  padding: 0.25em 1em;
  font-size: 1.25em;
  width: 100%;
  background: palevioletred;
  color: white;
  border: palevioletred;
  border-radius: 3px;
`;

class Login extends React.Component {
  render() {
    return (
      <Container>
        <ButtonWrapper>
          <Button>Github</Button>
          <Button>Google</Button>
          <Button text="email">Email/Password</Button>
        </ButtonWrapper>
      </Container>
    );
  }
}

export default Login;
