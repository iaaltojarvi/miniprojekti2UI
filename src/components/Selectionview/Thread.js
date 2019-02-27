import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Thread.css';

const Thread = (props) => {
  return (
    <Card className="thread-card">
      <Card.Img variant="top" src={props.imageName} className="topic-icon" />
      <Card.Body>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Go to thread</Button>
      </Card.Body>
    </Card>
  )
}

export default Thread;