import './ToDoList.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from './Form.js';
import ListGrp from './ListTab.js';

function TodoList() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Assignment 2: Sherwin's ToDo List</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form/>
        </Col>
        <Col md={8}>
          <ListGrp/>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
