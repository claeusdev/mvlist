import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class MovieForm extends Component {
  render() {
    return (
      <div>
        <form data-testid="movie-form">
          <input type="text" />
          <button type="button">
Submit
          </button>
        </form>
      </div>
    );
  }
}
