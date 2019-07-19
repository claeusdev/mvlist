import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
export default class MovieForm extends Component {
  state = {
    text: ""
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;
    return (
      <div>
        <form data-testid="movie-form" onSubmit={() => submitForm({ text })}>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
