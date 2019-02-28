import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class DiscussionView extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], input: '', thread_id: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
  }

  async componentDidMount() {
    this.updateMessages();
  }

  async updateMessages() {
    let threadId = this.props.match.params.id;
    let res = await fetch('/api/thread/' + threadId);
    let jsonRes = await res.json();
    this.setState({ data: jsonRes, thread_id: threadId });
  }

  // author_id, thread_id, text, category
  async handleClick(event) {
    event.preventDefault();
    if (!this.props.isAuth) {
      alert('Log in to post messages!');
      return;
    }
    let token = localStorage.getItem('auth');
    let author_id = JSON.parse(token).id.toString();
    let thread_id = this.state.thread_id;
    let text = this.state.input;
    let bodyData = {
      text,
      thread_id,
      author_id
    }
    try {
      var myHeaders = new Headers();
      if (token) {
        myHeaders.append('authorization', token);
      }
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Accept', 'application/json');
      let res = await fetch('/api/messages', {
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: JSON.stringify(bodyData)
      })
      console.log(res);
      let jsonRes = await res.json();
      if (jsonRes.success) {
        // TODO: get all messages again!
        this.updateMessages();        
      }
    } catch (error) {
      alert(error.message);
    }
  }

  handleChange(event) {
    this.setState({ input: event.target.value })
  }

  render() {
    let dataArray = this.state.data.map(item => {
      return (
        <Card className="discussion-card" key={item.id}>
          <Card.Body>
            <Card.Text>
              {item.content}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    })
    return (
      <div>
        <Container className="discussion-card-container">
          {dataArray}
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Type new message: </Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.handleChange} />
            </Form.Group>
            <Button
              variant="primary"
              onClick={this.handleClick}
              type="submit">Input message</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
