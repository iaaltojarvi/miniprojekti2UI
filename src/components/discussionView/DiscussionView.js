import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import './DiscussionView.css';

export default class DiscussionView extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
    // handleUpdate(newPost) {
    //   this.setState({ thread: newPost });
    // }
    async componentDidMount() {
      let res = await fetch('/api/thread/' + '2');
      let jsonRes = await res.json();
      this.setState({ data: jsonRes });
    }
   
    render() {
      let dataArray = this.state.data.map(item => {
        return (
          <p key={item.id}>{item.content}</p>
        )
      });
      return (
        <div>
          <Form>
            <Form.Group>
              <Form.Label>Write a post</Form.Label>
              <Button>Send</Button>
              <Form.Control as="textarea" rows="5"/>
            </Form.Group>
          </Form>
          <Card border="dark" className="message-card">
            <Card.Body>
              <Card.Text>
                {dataArray[0]}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  border="dark" className="message-card">
            <Card.Body>
              <Card.Text>
                {dataArray[1]}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  border="dark" className="message-card">
            <Card.Body>
              <Card.Text>
                {dataArray[2]}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  border="dark" className="message-card">
            <Card.Body>
              <Card.Text>
                {dataArray[3]}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card  border="dark" className="message-card">
            <Card.Body>
              <Card.Text>
                {dataArray[3]}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    }
  }



/* <div>
          <Container className="topic-container">
            <Form>
              <Form.Group>
                <Form.Label>Write your post</Form.Label>
                <Form.Control as="textarea" rows="4" />
              </Form.Group>
            </Form>
          </Container>

        </div> */