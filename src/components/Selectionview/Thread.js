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
      <Card className="thread-card">
        <Card.Img variant="top" src={this.props.imageName} className="topic-icon"/>
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
