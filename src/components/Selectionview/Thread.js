import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Thread.css';

export default class Thread extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/img/icons8-postgresql-96.png" className="topic-icon"/>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Text>
            {this.props.text}
          </Card.Text>
          <Button variant="primary">Go to thread</Button>
        </Card.Body>
      </Card>      
    )
  }
}
