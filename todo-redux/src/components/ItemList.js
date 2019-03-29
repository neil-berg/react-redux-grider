import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { deleteTodo, completeTodo } from '../actions';

const ItemContainer = styled.ul`
  list-style-type: none;
  width: 475px;
  margin: 1em auto;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: ${props =>
    props.completed ? 'line-through black' : 'none'};
  color: grey;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemList = ({ todos, deleteTodo, completeTodo }) => {
  if (todos.length > 0) {
    const renderedList = todos.map(todo => {
      if (todo.show) {
        return (
          <Item key={todo.id} completed={todo.completed}>
            {todo.text}
            <IconContainer>
              <FontAwesomeIcon
                onClick={() => completeTodo(todo.id)}
                icon={faCheck}
                style={{ color: 'green', padding: '0.5em' }}
              />
              <FontAwesomeIcon
                onClick={() => deleteTodo(todo.id)}
                icon={faTrashAlt}
                style={{ color: 'red' }}
              />
            </IconContainer>
          </Item>
        );
      }
    });
    return <ItemContainer>{renderedList}</ItemContainer>;
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  {
    deleteTodo,
    completeTodo
  }
)(ItemList);
