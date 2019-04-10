import React, { Component } from 'react';
import Board from './Board';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <header className="App-header">
          <h1>Tic Tac Toe</h1>
          <Board />
        </header>
      </div>
    );
  }
}

export default Game;
