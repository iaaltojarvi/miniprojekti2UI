import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Thread from './Thread';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const createId = () => {
  return (Math.random() * Date.now()).toFixed(0);
}


export default class ThreadContainer extends Component {
  render() {
    const threadList = Array(6).fill({ author: "Groot!", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit!" });
    const newList = threadList.map(thread => {
      return (<Col lg={4} key={createId()}><Thread author={thread.author} text={thread.text}></Thread></Col>);
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
