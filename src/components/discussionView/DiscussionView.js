import React, { Component } from 'react'
import { getDiscussion } from '../../API/mock_calls';

export default class DiscussionView extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    let res = await fetch('/api/thread/' + '2');
    let jsonRes = await res.json();
    this.setState({ data: jsonRes });
  }

  render() {
    let dataArray = this.state.data.map(item => {
      return (
        <li key={item.id}>{item.content}</li>
      );
    })
    return (
      <div>
        <ul>{dataArray}</ul>
      </div>
    )
  }
}
