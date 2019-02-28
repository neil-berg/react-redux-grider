import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: goldenrod;
`;

const Paragraph = styled.p`
  color: red;
  font-size: 26px;
`;

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
        <Paragraph>Loginnn</Paragraph>
      </Wrapper>
    );
  }
}

export default Login;
