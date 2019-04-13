import React, { Component } from 'react';

class MovesList extends Component {
  renderMoveButtons(){
    let moveButtons = [];

    for(let i = 0; i < this.props.moveIndex; i++) {
      moveButtons.push(this.moveButton(i));
    }

    return moveButtons;
  }

  moveButton(i){
    return(
      <button className="move-button" onClick={ () => this.props.moveButtonClickHandler(i) }>
        Move {i}
      </button>
    );
  }

  render() {
    return (
      <div className="moves-list">
        {this.renderMoveButtons()}
      </div>
    );
  }
}

export default MovesList;
