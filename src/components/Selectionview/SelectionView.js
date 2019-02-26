import React, { Component } from 'react'
import Categories from './Categories';
import ThreadContainer from './ThreadContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SelectionView.css';

export default class SelectionView extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={3}>
            <Categories />
          </Col>
          <Col lg={9}>
            <ThreadContainer />
          </Col>
        </Row>
      </Container>
    )
  }
}
