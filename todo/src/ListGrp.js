import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import todos from './todoItems';
import getVariant from './Variant';

function ListGrp() {
  return (
    <ListGroup>
      {todos.map((item, index) => (
        <ListGroup.Item key={index} variant= {getVariant(item.dueDate)}>
          {item.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ListGrp;
