import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Thread from './Thread';
import { getThreads } from '../../API/mock_calls';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const createId = () => {
  return (Math.random() * Date.now()).toFixed(0);
}

export default class ThreadContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const threadList = getThreads(this.props.topics);
    const newList = threadList.map(thread => {
      return (<Col lg={4} key={thread.id}><Thread author='Groot!' text={thread.topic}></Thread></Col>);
    });
    return (
      <Container>
        <Row>
          {newList}
        </Row>
      </Container>
    );
  }
}
