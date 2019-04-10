import React, { Component } from 'react';
import Square from './Square';
import NextPlayer from './NextPlayer';

class Board extends Component {
  renderSquare(i){
    return (
      <Square index={i} value={this.props.squares[i]} clickHandler={this.props.clickHandler}/>
    );
  }
  
  render() {
    return (
      <div>
        <NextPlayer nextPlayer={this.props.nextPlayer} />

        <div className="board">
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
