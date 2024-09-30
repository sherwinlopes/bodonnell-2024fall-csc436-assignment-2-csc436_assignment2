import React from 'react';
import ListGroup  from 'react-bootstrap/ListGroup';
import todos from './todoItems';
const ToDoList = () => {
  return (
    <ListGroup>
      {todos.map((item, index) => (
        <ListGroup.Item key={index}>
          {item.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ToDoList;
