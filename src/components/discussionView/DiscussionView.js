import React, { Component } from 'react'
import { getDiscussion } from '../../API/mock_calls';
//import { getDiscussion } from  '../../serviceClient';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class DiscussionView extends Component {
  constructor(props) {
    super(props);
    this.state = { thread: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(newPost) {
    this.setState({ thread: newPost });
  }

  async componentDidMount() {
    let res = await fetch('/api/thread');
    let jsonRes = await res.json();
    console.log(jsonRes);
  }

  render() {
    let res = getDiscussion(this.props.match.params.id);
    if (!res) {
      res = [{ content: "Not found!" }];
    }
    return (
      <div>
        <p>{res[0].content}</p>
        <Button variant="primary">Go to thread</Button>
        <CardGroup className = "messages">
          <Card className="message-card">
            <Card.Body>
              <Card.Text>
                Mitä tapahtuu?
                {this.props.json}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="message-card">
            <Card.Body>
              <Card.Text>
                Mitä tapahtuu2?
                {this.props.json}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="message-card">
            <Card.Body>
              <Card.Text>
                Mitä tapahtuu3?
                {this.props.json}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="message-card">
            <Card.Body>
              <Card.Text>
                Mitä tapahtuu4?
                {this.props.json}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

/* <div>
          <Container className="topic-container">
          <Form>
          <Form.Group>
            <Form.Label>Write your post</Form.Label>
            <Form.Control as = "textarea" rows = "4"/>
          </Form.Group>
          </Form>
          </Container>

        </div> */