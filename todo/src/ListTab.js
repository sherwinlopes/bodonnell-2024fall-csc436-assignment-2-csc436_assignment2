import React from 'react';
import './ListTab.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import todos from './todoItems';
import getVariant from './Variant';



function ListGrp() {


  return (

    <Tab.Container defaultActiveKey={todos[0].title}>
      <ListGroup>
        {todos.map((todos, index) => (
          <ListGroup.Item
            key={index}
            eventKey={todos.title}
            variant={getVariant(todos.dueDate)}>
            {todos.title}
            </ListGroup.Item>
        ))}
      </ListGroup>

      <Tab.Content>
        {todos.map((todos, index) => (
          <Tab.Pane key={index} eventKey={todos.title}>
            <p contentEditable = "true">{todos.description}</p>
            <input
            type="date"
            defaultValue={todos.dueDate}
            onChange={e=>{}} />
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
   
  );
}

export default ListGrp;
