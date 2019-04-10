import React, { Component } from 'react';

import Board from './Board';
import MovesList from './MovesList';

import './Game.css';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = this.initialConfiguration();
    this.clickHandler = this.clickHandler.bind(this);
    this.moveButtonClickHandler = this.moveButtonClickHandler.bind(this);
  }

  initialConfiguration(){
    let moves = [];
    moves.push(Array(9).fill(null));

    return {
      nextPlayer: '0',
      moveIndex: 0,
      moves: moves
    };
  }

  reset(){
    this.setState(this.initialConfiguration());
  }

  getLines(){
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  getNextPlayer(currentPlayer){
    return ((currentPlayer === 'X') ? '0' : 'X');
  }

  gameOver(squares){
    const lines = this.getLines();
    
    for(let i = 0; i < lines.length; i++) {
       let a = lines[i][0];
       let b = lines[i][1];
       let c = lines[i][2];
       if(squares[a] && (squares[a]===squares[b]) && (squares[b]===squares[c])){
         return true; 
       }
    }
    return false
  }

  gameTied(squares){
    return squares.every(function(x){return x!=null})
  }

  clickHandler(index){
    let newSquares    = this.getSquares().slice();

    let currentPlayer = this.state.nextPlayer;
    newSquares[index] = currentPlayer;

    if(this.gameOver(newSquares)){
      alert("Winner is " + currentPlayer);
      this.reset();
      return;
    }

    if(this.gameTied(newSquares)){
      alert("Game ends in a Tie. Try again!");
      this.reset();
      return;
    }

    let newMoves = this.state.moves.slice()
    newMoves.push(newSquares);
    
    this.setState({
      moves: newMoves,
      moveIndex: this.state.moveIndex + 1,
      nextPlayer: this.getNextPlayer(currentPlayer)
    });
  }

  getSquares(){
    return this.state.moves[this.state.moveIndex];
  }

  moveButtonClickHandler(i){
    let newMoves = this.state.moves.slice(0, i+1);
    this.setState({
      moveIndex: i,
      moves: newMoves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Tic Tac Toe</h1>
          <Board nextPlayer={this.state.nextPlayer} squares={this.getSquares()} clickHandler={this.clickHandler} />
          <MovesList moveIndex={this.state.moveIndex} moveButtonClickHandler={this.moveButtonClickHandler}/>
        </header>
      </div>
    );
  }
}

export default Game;
