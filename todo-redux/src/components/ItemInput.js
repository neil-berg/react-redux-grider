import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTodo } from '../actions';

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 400px;
  height: 25px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px grey solid;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  margin-left: 1em;
  border-radius: 10px;

  :focus {
    outline: 0;
  }
`;

const ItemInput = ({ addTodo }) => {
  let inputText;
  return (
    <InputForm
      onSubmit={e => {
        e.preventDefault();
        if (!inputText.value.trim()) {
          return;
        }
        addTodo(inputText.value);
        inputText.value = '';
      }}
    >
      <Input ref={node => (inputText = node)} />
      <Button type="submit">Add +</Button>
    </InputForm>
  );
};

export default connect(
  null,
  {
    addTodo
  }
)(ItemInput);
