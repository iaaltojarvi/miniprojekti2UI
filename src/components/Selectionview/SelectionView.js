import React, { Component } from 'react'
import Categories from './Categories';
import ThreadContainer from './ThreadContainer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SelectionView.css';
import AddThread from './AddThread';

const availableTopics = [{ "id": "1", "topic": 'All categories' }, { "id": "2", "topic": 'JavaScript' }, { "id": "3", "topic": 'ReactJS' }, { "id": "4", "topic": 'NodeJS' }, { "id": "5", "topic": 'PostgreSQL' }];

export default class SelectionView extends Component {
  constructor(props) {
    super(props);
    this.state = { topic: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(newTopic) {
    this.setState({ topic: newTopic });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <AddThread />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Categories onClick={this.handleUpdate} listContent={availableTopics} />
          </Col>
          <Col lg={9}>
            <ThreadContainer topics={this.state.topic}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
