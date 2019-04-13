import React, { Component } from 'react';

class NextPlayer extends Component {
  render() {
    return (
      <div className="next-player">
        Next Player is {this.props.nextPlayer}
      </div>
    );
  }
}

export default NextPlayer;
