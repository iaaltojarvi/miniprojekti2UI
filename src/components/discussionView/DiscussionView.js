import React, { Component } from 'react'
import { getDiscussion } from '../../API/mock_calls';

export default class DiscussionView extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let res = getDiscussion(this.props.match.params.id);
    if (!res) {
      res = [{ content: "Not found!" }];
    }
    return (
      <div>
        <p>{res[0].content}</p>
      </div>
    )
  }
}
