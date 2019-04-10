import React, { Component } from 'react';
import Square from './Square';
import NextPlayer from './NextPlayer';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextPlayer: '0'
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  reset(){
    this.setState({
      squares: Array(9).fill(null),
      nextPlayer: '0'
    });
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
    let newSquares    = this.state.squares.slice();
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

    this.setState({
      squares: newSquares,
      nextPlayer: this.getNextPlayer(currentPlayer)
    });
  }

  render() {
    return (
      <div>
        <NextPlayer nextPlayer={this.state.nextPlayer} />

        <div className="Board">
          <div className="row">
            <Square index={0} value={this.state.squares[0]} clickHandler={this.clickHandler}/>
            <Square index={1} value={this.state.squares[1]} clickHandler={this.clickHandler}/>
            <Square index={2} value={this.state.squares[2]} clickHandler={this.clickHandler}/>
          </div>
          <div>
            <Square index={3} value={this.state.squares[3]} clickHandler={this.clickHandler}/>
            <Square index={4} value={this.state.squares[4]} clickHandler={this.clickHandler}/>
            <Square index={5} value={this.state.squares[5]} clickHandler={this.clickHandler}/>
          </div>
          <div>
            <Square index={6} value={this.state.squares[6]} clickHandler={this.clickHandler}/>
            <Square index={7} value={this.state.squares[7]} clickHandler={this.clickHandler}/>
            <Square index={8} value={this.state.squares[8]} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
