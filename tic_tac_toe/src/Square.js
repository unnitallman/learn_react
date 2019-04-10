import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
      <div className="square" onClick={() => {this.props.clickHandler(this.props.index)}}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
