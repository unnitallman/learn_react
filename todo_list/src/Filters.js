import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a className="nav-link active" href="/">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/active">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/completed">Completed</a>
        </li>
      </ul>
    );
  }
}

export default Filters;
