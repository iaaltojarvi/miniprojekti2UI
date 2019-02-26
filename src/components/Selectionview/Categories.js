import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Categories.css';

export default class Categories extends Component {
  render() {
    return (
      <Container className="topic-container">
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item variant="light" onClick={() => alert('All')}>All categories</ListGroup.Item>
              <ListGroup.Item variant="light" onClick={() => alert('Javascript')}>Javascript</ListGroup.Item>
              <ListGroup.Item variant="light" onClick={() => alert('Node')}>NodeJS</ListGroup.Item>
              <ListGroup.Item variant="light" onClick={() => alert('ReactJS')}>ReactJS</ListGroup.Item>
              <ListGroup.Item variant="light" onClick={() => alert('Database')}>Databases</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
