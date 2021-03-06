import React from "react";

import Comment from "./Comments";
import { comment } from "postcss";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      newComentText: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments,
        { text: this.state.newComentText},
      ],
      newComentText: ""

    })
  }
  handleTextChange(e) {
    this.setState({ newComentText: e.target.value });
  }

  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newComentText}
            onChange={this.handleTextChange}
          />
          <button type="submit">Comentar</button>
        </form>
        {this.state.comments.map((comment, index) => {
          return <Comment key={index}>{comment.text}</Comment>;
        })}
      </div>
    );
  }
}
